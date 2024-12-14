/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// .env 파일 로드
import "https://deno.land/std@0.177.0/dotenv/load.ts";

console.log("Hello from Functions!");

// 환경 변수 확인
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing from environment variables");
}

// Edge Function 시작
Deno.serve(async (req) => {
  try {
    // GET 메서드 처리
    if (req.method === "GET") {
      return new Response(
        JSON.stringify({ message: "This is a GET request" }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // POST 메서드 처리
    if (req.method === "POST") {
      const { name } = await req.json();
      const data = { message: `Hello ${name}!` };

      return new Response(
        JSON.stringify(data),
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
