/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// .env 파일 로드
import "https://deno.land/std@0.177.0/dotenv/load.ts";
// Supabase 라이브러리 가져오기
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";

import { calculateTotalPay } from "./calculate.ts";
console.log("Hello from Functions!");

// 환경 변수 확인
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

// supabase URL과 Key가 없을 경우 Error
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing from environment variables");
}

// Supabase 클라이언트 초기화
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Edge Function 시작
Deno.serve(async (req) => {
  const url = new URL(req.url);
  try {
    const body = await req.json();

    // GET 메서드 처리
    if (req.method === "GET") {
      console.log("Fetching worksheet...");
      // Supabase에서 'bookmarks' 테이블 데이터 가져오기
      const { data, error } = await supabase.from("worksheet").select("*");

      if (error) {
        console.error("Error fetching worksheet:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch worksheet" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      console.log("Data:", data);
      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    /** api_worksheet 전체 조회*/
    // `~/api_worksheet/calculate` 처리
    if (
      req.method === "POST" &&
      url.pathname === "/calculate"
    ) {
      // `total_pay` 계산
      const total_pay = calculateTotalPay(body);

      return new Response(
        JSON.stringify({
          status: 200,
          total_pay,
          message: "Total pay calculation completed.",
        }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }
    /** api_worksheet 전체 조회*/
    // `~/api_worksheet` 처리 (데이터 저장)
    if (req.method === "POST") {
      /** 사용자 정보 가져오기*/
      // 클라이언트에서 Authorization 헤더를 가져오기
      const authHeader = req.headers.get("Authorization");
      console.log("Authorization Header:", authHeader);

      // Authorization 헤더가 없을 경우 401 Unauthorized 반환
      if (!authHeader) {
        return new Response(
          JSON.stringify({ error: "Authorization header is missing" }),
          { headers: { "Content-Type": "application/json" }, status: 401 },
        );
      }

      // Bearer 토큰에서 JWT 추출
      const token = authHeader.split(" ")[1]; // "Bearer <token>"에서 <token>만 추출
      if (!token) {
        return new Response(
          JSON.stringify({ error: "Invalid authorization token" }),
          { headers: { "Content-Type": "application/json" }, status: 401 },
        );
      }

      // Supabase 클라이언트로 사용자 정보 가져오기
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser(token);

      // Supabase에서 사용자 정보 가져오기 실패 시 처리
      if (userError) {
        console.error("Error fetching user:", userError);
        return new Response(
          JSON.stringify({ error: "Invalid or expired token" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      // 사용자 정보가 없는 경우 처리
      if (!user) {
        console.error("User is null or invalid token provided.");
        return new Response(
          JSON.stringify({ error: "Failed to retrieve user information" }),
          { headers: { "Content-Type": "application/json" }, status: 401 },
        );
      }

      console.log("Authenticated User:", user);
      const userId = user.id; // 현재 로그인된 사용자의 user_id
      /** 사용자 정보 가져오기*/

      // !! 데이터베이스에 저장: 데이터 삽입
      const { data: insertData, error: insertError } = await supabase
        .from("worksheet").insert([
          {
            user_id: userId,
            title: body.title,
            content: body.content,
            total_pay: body.total_pay,
            extra_pay: body.extra_pay || false,
            week_pay: body.week_pay || false,
            night_pay: body.night_pay || false,
            overtime_pay: body.overtime_pay || false,
            holiday_pay: body.holiday_pay || false,
            is_open: body.is_open || false,
          },
        ])
        .select("*");

      if (insertError) {
        console.error("Error inserting into worksheet:", insertError);
        return new Response(
          JSON.stringify({
            error: insertError.message ||
              "Failed to insert data into worksheet",
          }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (Array.isArray(insertData) && insertData.length > 0) {
        return new Response(
          JSON.stringify({
            status: 201,
            insertedData: insertData[0],
            message: "Worksheet data successfully inserted.",
          }),
          { headers: { "Content-Type": "application/json" }, status: 201 },
        );
      }

      // 삽입된 데이터의 ID 또는 특정 조건으로 데이터 조회
      const { data: insertedData, error: selectError } = await supabase
        .from("worksheet")
        .select("*");
      // .eq("id", insertData[0]?.id) // 삽입된 데이터의 ID로 다시 조회
      // .single(); // 단일 데이터만 반환

      // 삽입된 데이터가 없는 경우 (예외 상황 처리)
      if (!insertedData || insertedData.length === 0) {
        return new Response(
          JSON.stringify({ error: "No data found after insertion" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      if (selectError) {
        console.error("Error retrieving inserted data:", selectError);
        return new Response(
          JSON.stringify({
            error: "Failed to retrieve inserted data",
          }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }
    }

    // 지원하지 않는 메서드에 대한 처리
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { headers: { "Content-Type": "application/json" }, status: 405 },
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { headers: { "Content-Type": "application/json" }, status: 500 },
    );
  }
});
