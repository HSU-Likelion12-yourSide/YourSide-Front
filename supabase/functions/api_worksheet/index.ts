/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "https://deno.land/std@0.177.0/dotenv/load.ts";
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";
import { calculateTotalPay } from "./calculate.ts";
import author from "./author.ts";

console.log("Hello from Functions!");

// 환경 변수 확인
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing from environment variables");
}

// Supabase 클라이언트 초기화
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Edge Function 시작
Deno.serve(async (req) => {
  const url = new URL(req.url);

  try {
    // GET: `/api_worksheet` 메서드 처리 - 전체
    if (url.pathname === "/api_worksheet" && req.method === "GET") {
      console.log("Fetching worksheet...");
      const { data, error } = await supabase.from("worksheet").select("*");

      if (error) {
        console.error("Error fetching worksheet:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch worksheet" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // GET: `/api_worksheet/shared` 메서드 처리 - 공유된 결과지 조회
    if (url.pathname === "/api_worksheet/shared" && req.method === "GET") {
      console.log("Fetching worksheet...");
      const { data, error } = await supabase
        .from("worksheet")
        .select("*")
        .eq(
          "is_open",
          true,
        );

      if (error) {
        console.error("Error fetching worksheet:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch worksheet" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shared worksheets found" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    //GET: `/api_worksheet/N` 처리 - 세부 조회
    if (url.pathname.startsWith("/api_worksheet/") && req.method === "GET") {
      // URL에서 ID 추출
      const idPart = url.pathname.split("/").pop(); // 경로의 마지막 부분
      const id = Number(idPart); // 숫자로 변환

      // 테이블에서 가져올 데이터
      const { data, error } = await supabase
        .from("worksheet")
        .select("*")
        .eq("id", id)
        .single(); // 단일 행 반환

      if (error) {
        console.error(`Error fetching ${id} data:`, error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch current data" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data) {
        return new Response(
          JSON.stringify({ error: "No record found for the provided ID" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // POST: `/calculate` 처리
    if (url.pathname === "/api_worksheet/calculate" && req.method === "POST") {
      if (req.headers.get("Content-Type") !== "application/json") {
        return new Response(
          JSON.stringify({ error: "Content-Type must be application/json" }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }

      let body;
      try {
        body = await req.json();
      } catch {
        return new Response(
          JSON.stringify({ error: "Invalid or missing JSON body" }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }

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

    // POST: `/api_worksheet` 처리
    if (url.pathname === "/api_worksheet" && req.method === "POST") {
      // 사용자 검증
      const userAuthor = await author(req, supabase);
      if (userAuthor instanceof Response) {
        return userAuthor;
      }
      const { userId } = userAuthor;

      let body;
      try {
        body = await req.json();
      } catch {
        return new Response(
          JSON.stringify({ error: "Invalid or missing JSON body" }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }

      const { data: insertData, error: insertError } = await supabase
        .from("worksheet")
        .insert([
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
          JSON.stringify({ error: "Failed to insert data into worksheet" }),
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

      return new Response(
        JSON.stringify({ error: "No data inserted" }),
        { headers: { "Content-Type": "application/json" }, status: 500 },
      );
    }
    // PUT: `/api_worksheet/N` 처리
    if (url.pathname.startsWith("/api_worksheet/") && req.method === "PUT") {
      // URL에서 ID 추출
      const idPart = url.pathname.split("/").pop(); // 경로의 마지막 부분
      const id = Number(idPart); // 숫자로 변환

      // ID가 유효한지 확인
      if (!id || isNaN(id) || id <= 0) {
        return new Response(
          JSON.stringify({ error: "Invalid or missing ID in URL" }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }

      // 사용자 검증
      const userAuthor = await author(req, supabase);
      if (userAuthor instanceof Response) {
        return userAuthor;
      }
      const { userId } = userAuthor;

      // 현재 상태 확인
      const { data: currentData, error: fetchError } = await supabase
        .from("worksheet")
        .select("is_open")
        .eq("id", id)
        .single();

      if (fetchError) {
        console.error("Error fetching current data:", fetchError);
        return new Response(
          JSON.stringify({ error: "Failed to fetch current data" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!currentData) {
        return new Response(
          JSON.stringify({ error: "No record found for the provided ID" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      // 상태 토글
      const newIsOpen = !currentData.is_open;
      console.log("ID to update:", id);
      console.log("New is_open value:", newIsOpen);
      console.log("Current data fetched:", currentData);

      // 데이터베이스 업데이트
      const { data: updatedData, error: updateError } = await supabase
        .from("worksheet")
        .update({ is_open: newIsOpen })
        .eq("id", id)
        .select("id, is_open")
        .maybeSingle();

      if (updateError) {
        console.error("Error updating data:", updateError);
        return new Response(
          JSON.stringify({ error: "Failed to update data" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!updatedData) {
        return new Response(
          JSON.stringify({ error: "No matching rows to update" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({
          status: 200,
          data: updatedData,
          message: "Successfully toggled 'is_open' field",
        }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
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
