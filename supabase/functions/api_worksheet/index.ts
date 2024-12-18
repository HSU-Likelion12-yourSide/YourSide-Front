/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

// .env 파일 로드
import "https://deno.land/std@0.177.0/dotenv/load.ts";
// Supabase 라이브러리 가져오기
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";

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
      console.log("Fetching worksheekt...");
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

    // POST 메서드 처리
    // if (req.method === "POST") {
    //   // 클라이언트에서 Authorization 헤더를 가져오기
    //   const authHeader = req.headers.get("Authorization");
    //   console.log("Authorization Header:", authHeader);

    //   // Authorization 헤더가 없을 경우 401 Unauthorized 반환
    //   if (!authHeader) {
    //     return new Response(
    //       JSON.stringify({ error: "Authorization header is missing" }),
    //       { headers: { "Content-Type": "application/json" }, status: 401 },
    //     );
    //   }

    //   // Bearer 토큰에서 JWT 추출
    //   const token = authHeader.split(" ")[1]; // "Bearer <token>"에서 <token>만 추출
    //   if (!token) {
    //     return new Response(
    //       JSON.stringify({ error: "Invalid authorization token" }),
    //       { headers: { "Content-Type": "application/json" }, status: 401 },
    //     );
    //   }

    //   // Supabase 클라이언트로 사용자 정보 가져오기
    //   const {
    //     data: { user },
    //     error: userError,
    //   } = await supabase.auth.getUser(token);

    //   // Supabase에서 사용자 정보 가져오기 실패 시 처리
    //   if (userError) {
    //     console.error("Error fetching user:", userError);
    //     return new Response(
    //       JSON.stringify({ error: "Invalid or expired token" }),
    //       { headers: { "Content-Type": "application/json" }, status: 500 },
    //     );
    //   }

    //   // 사용자 정보가 없는 경우 처리
    //   if (!user) {
    //     console.error("User is null or invalid token provided.");
    //     return new Response(
    //       JSON.stringify({ error: "Failed to retrieve user information" }),
    //       { headers: { "Content-Type": "application/json" }, status: 401 },
    //     );
    //   }

    //   console.log("Authenticated User:", user);
    //   const userId = user.id; // 현재 로그인된 사용자의 user_id

    //   try {
    //     // 요청 Body를 JSON 형식으로 파싱
    //     const body = await req.json();
    //     console.log("Request Body:", body);

    //     // posting_id 필드가 존재하지 않거나 숫자가 아닐 경우 400 Bad Request 반환
    //     if (!body.posting_id || typeof body.posting_id !== "number") {
    //       return new Response(
    //         JSON.stringify({ error: "posting_id must be a number" }),
    //         { headers: { "Content-Type": "application/json" }, status: 400 },
    //       );
    //     }

    //     // !!Supabase에 posting_id 삽입
    //     const { data: insertData, error: insertError } = await supabase
    //       .from("bookmarks")
    //       .insert([
    //         {
    //           posting_id: body.posting_id,
    //           user_id: userId, // 자동으로 user_id 추가
    //         },
    //       ])
    //       .select("*"); // 삽입된 데이터를 반환
    //     // 삽입 중 에러 발생 시 처리
    //     if (insertError) {
    //       // 중복 키 에러 처리 (UNIQUE 제약 조건 위반)
    //       if (
    //         insertError.message.includes(
    //           "duplicate key value violates unique constraint",
    //         )
    //       ) {
    //         return new Response(
    //           JSON.stringify({ error: "posting_id already exists" }),
    //           { headers: { "Content-Type": "application/json" }, status: 409 }, // 409 Conflict
    //         );
    //       }
    //       console.error("Error inserting data:", insertError);
    //       return new Response(
    //         JSON.stringify({ error: "Failed to insert data into database" }),
    //         { headers: { "Content-Type": "application/json" }, status: 500 },
    //       );
    //     }

    //     // !!삽입된 데이터 다시 조회
    //     const { data: insertedData, error: selectError } = await supabase
    //       .from("bookmarks")
    //       .select("*");
    //     // .eq("posting_id", body.posting_id);
    //     // console.log("Inserted Data:", insertedData);

    //     // 삽입된 데이터 로그 출력
    //     console.log("Inserted Data (from insert):", insertedData);
    //     // 데이터 조회 중 에러 발생 시 처리
    //     if (selectError) {
    //       console.error("Supabase Select Error:", selectError);
    //       return new Response(
    //         JSON.stringify({ error: "Failed to retrieve inserted data" }),
    //         { headers: { "Content-Type": "application/json" }, status: 500 },
    //       );
    //     }

    //     // 삽입된 데이터가 없는 경우 (예외 상황 처리)
    //     if (!insertedData || insertedData.length === 0) {
    //       return new Response(
    //         JSON.stringify({ error: "No data found after insertion" }),
    //         { headers: { "Content-Type": "application/json" }, status: 404 },
    //       );
    //     }

    //     // 삽입된 데이터가 있을 경우 출력, 201 Created 반환
    //     if (insertData && insertData.length > 0) {
    //       console.log("Inserted Data:", insertData[0]); // 첫 번째 삽입된 데이터만 출력
    //       return new Response(
    //         JSON.stringify({
    //           message: "Data inserted successfully",
    //           insertedData: insertData[0], // 첫 번째 데이터만 클라이언트로 반환
    //         }),
    //         { headers: { "Content-Type": "application/json" }, status: 201 },
    //       );
    //     }
    //   } catch (error) {
    //     // 요청 처리 중 발생한 예외 처리
    //     console.error("Unhandled Error:", error);
    //     return new Response(
    //       JSON.stringify({
    //         error: error instanceof Error
    //           ? error.message
    //           : "Unknown error occurred",
    //       }),
    //       { headers: { "Content-Type": "application/json" }, status: 500 },
    //     );
    //   }
    // }

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
