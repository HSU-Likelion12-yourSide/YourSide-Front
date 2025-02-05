/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// .env 파일 로드
import "https://deno.land/std@0.177.0/dotenv/load.ts";
// Supabase 라이브러리 가져오기
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";
import author from "./author.ts";

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
  try {
    // GET 메서드 처리
    if (req.method === "GET") {
      console.log("Fetching comments...");
      // Supabase에서 'comments' 테이블 데이터 가져오기
      const { data, error } = await supabase.from("comments").select("*");

      if (error) {
        console.error("Error fetching bookmarks:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch bookmarks" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      console.log("Data:", data);
      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // POST 메서드 처리
    // `author.ts`를 이용하여 사용자 검증
    if (req.method === "POST") {
      // 사용자 검증 (author.ts 활용)
      const userAuthor = await author(req, supabase);
      if (userAuthor instanceof Response) {
        return userAuthor; // 인증 실패 시 즉시 응답 반환
      }
      const { userId } = userAuthor; // 인증된 사용자 ID
      console.log("Authenticated User ID:", userId);

      try {
        // 요청 Body를 JSON 형식으로 파싱
        const body = await req.json();
        console.log("Request Body:", body);

        // 필수 필드 검증 (하나의 로직으로 통합)
        // const missingFields = [];
        // if (!body.posting_id || typeof body.posting_id !== "number") {
        //   missingFields.push("posting_id (number)");
        // }
        // if (!body.content || typeof body.content !== "string") {
        //   missingFields.push("content (string)");
        // }

        // if (missingFields.length > 0) {
        //   return new Response(
        //     JSON.stringify({
        //       error: `Missing or invalid fields: ${missingFields.join(", ")}`,
        //     }),
        //     { headers: { "Content-Type": "application/json" }, status: 400 },
        //   );
        // }

        // Supabase에 posting_id와 content 삽입
        const { data: insertData, error: insertError } = await supabase
          .from("comments")
          .insert([
            {
              posting_id: body.posting_id,
              user_id: userId, // 인증된 사용자 ID 추가
              content: body.content,
            },
          ])
          .select("*"); // 삽입된 데이터를 반환

        // 삽입 중 에러 발생 시 처리
        if (insertError) {
          console.error("Error inserting data:", insertError);
          return new Response(
            JSON.stringify({
              error:
                "Failed to insert comment into database. check, postings and postings_id",
            }),
            { headers: { "Content-Type": "application/json" }, status: 500 },
          );
        }

        // 삽입된 데이터 로그 출력
        console.log("Inserted Comment:", insertData);

        // 정상적으로 삽입된 경우 응답 반환
        return new Response(
          JSON.stringify({
            message: "Comment inserted successfully",
            insertedData: insertData[0], // 삽입된 데이터 반환
          }),
          { headers: { "Content-Type": "application/json" }, status: 201 },
        );
      } catch (error) {
        console.error("Unhandled Error:", error);
        return new Response(
          JSON.stringify({
            error: error instanceof Error
              ? error.message
              : "Unknown error occurred",
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
