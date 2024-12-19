/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "https://deno.land/std@0.177.0/dotenv/load.ts";
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";
import { calculateTotalPay } from "./calculate.ts";

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
    // GET 메서드 처리
    if (req.method === "GET") {
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
      const authHeader = req.headers.get("Authorization");

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return new Response(
          JSON.stringify({
            error: "Authorization header is missing or invalid",
          }),
          { headers: { "Content-Type": "application/json" }, status: 401 },
        );
      }

      const token = authHeader.split(" ")[1];
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
            user_id: user.id,
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
