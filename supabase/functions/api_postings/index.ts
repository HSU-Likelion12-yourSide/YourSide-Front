/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "https://deno.land/std@0.177.0/dotenv/load.ts";
import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2.47.7";
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
    // GET: `/api_postings` 메서드 처리 - 전체
    if (url.pathname === "/api_postings" && req.method === "GET") {
      console.log("Fetching postings...");
      const { data, error } = await supabase.from("postings").select("*");

      if (error) {
        console.error("Error fetching postings:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // GET: `/api_postings/qna` 메서드 처리 - qna
    if (url.pathname === "/api_postings/qna" && req.method === "GET") {
      console.log("Fetching postings...");
      const { data, error } = await supabase
        .from("postings")
        .select("*")
        .eq("posting_type", "qna"); // posting_type이 "qna"인 항목

      if (error) {
        console.error("Error fetching postings:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shared postingss found" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // GET: `/api_postings/info` 메서드 처리 - info
    if (url.pathname === "/api_postings/info" && req.method === "GET") {
      console.log("Fetching postings...");
      const { data, error } = await supabase
        .from("postings")
        .select("*")
        .eq("posting_type", "info"); // posting_type이 "info"인 항목

      if (error) {
        console.error("Error fetching postings:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shared postingss found" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // GET: `/api_postings/qna` 메서드 처리 - qna
    if (url.pathname === "/api_postings/qna/popular" && req.method === "GET") {
      console.log("Fetching postings...");
      const { data, error } = await supabase
        .from("postings")
        .select("*")
        .eq("posting_type", "qna") // posting_type이 "qna"인 항목
        .order("bookmark_count", { ascending: false }) // `bookmark_count` 기준 정렬
        .limit(10); // 상위 10개 제한

      if (error) {
        console.error("Error fetching postings:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shared postingss found" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // GET: `/api_postings/info` 메서드 처리 - info
    if (url.pathname === "/api_postings/info/popular" && req.method === "GET") {
      console.log("Fetching postings...");
      const { data, error } = await supabase
        .from("postings")
        .select("*")
        .eq("posting_type", "info")
        .order("bookmark_count", { ascending: false }) // `bookmark_count` 기준 정렬
        .limit(10); // 상위 10개 제한

      if (error) {
        console.error("Error fetching postings:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (!data || data.length === 0) {
        return new Response(
          JSON.stringify({ error: "No shared postingss found" }),
          { headers: { "Content-Type": "application/json" }, status: 404 },
        );
      }

      return new Response(
        JSON.stringify({ data }),
        { headers: { "Content-Type": "application/json" }, status: 200 },
      );
    }

    // POST: `/api_postings` 처리
    if (url.pathname === "/api_postings" && req.method === "POST") {
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

      // 필수 필드 검증
      if (
        !body.worksheet_id || !body.title || body.posting_type === undefined
      ) {
        return new Response(
          JSON.stringify({
            error: "Missing required fields: worksheet_id, title, or type",
          }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }

      // type 필드 처리
      if (body.posting_type !== "qna" && body.posting_type !== "info") {
        return new Response(
          JSON.stringify({
            error: "Invalid type value. Expected 'qna' or 'info'.",
          }),
          { headers: { "Content-Type": "application/json" }, status: 400 },
        );
      }
      const postingType = body.posting_type; // 유효한 값이면 그대로 사용

      const { data: insertData, error: insertError } = await supabase
        .from("postings")
        .insert([
          {
            user_id: userId,
            posting_type: postingType,
            worksheet_id: body.worksheet_id,
            title: body.title,
            content: body.content,
            bookmark_count: body.bookmark_count, //qna:네편 답변, info: 네편 정보
          },
        ])
        .select("*");

      if (insertError) {
        console.error("Error inserting into postings:", insertError);
        return new Response(
          JSON.stringify({ error: "Failed to insert data into postings" }),
          { headers: { "Content-Type": "application/json" }, status: 500 },
        );
      }

      if (Array.isArray(insertData) && insertData.length > 0) {
        return new Response(
          JSON.stringify({
            status: 201,
            insertedData: insertData[0],
            message: "postings data successfully inserted.",
          }),
          { headers: { "Content-Type": "application/json" }, status: 201 },
        );
      }

      return new Response(
        JSON.stringify({ error: "No data inserted" }),
        { headers: { "Content-Type": "application/json" }, status: 500 },
      );
    }

    // -- 아래는 작업 필요 --
    // 북마크 관련 코드 이전

    if (url.pathname === "/api_postings/bookmark" && req.method === "POST") {
      const userAuthor = await author(req, supabase);
      if (userAuthor instanceof Response) {
        return userAuthor;
      }
      const { userId } = userAuthor;

      try {
        let body;
        try {
          body = await req.json();
        } catch {
          return new Response(
            JSON.stringify({ error: "Invalid or missing JSON body" }),
            { headers: { "Content-Type": "application/json" }, status: 400 },
          );
        }

        const { id, bookmark_state } = body; // 수정: posting_id -> id
        if (!id || typeof id !== "number") {
          return new Response(
            JSON.stringify({ error: "Invalid or missing 'id'." }), // 수정: posting_id -> id
            { headers: { "Content-Type": "application/json" }, status: 400 },
          );
        }

        if (typeof bookmark_state !== "boolean") {
          return new Response(
            JSON.stringify({
              error: "Invalid 'bookmark_state' value. Must be boolean.",
            }),
            { headers: { "Content-Type": "application/json" }, status: 400 },
          );
        }

        console.log(
          `Updating bookmark_count for id: ${id} with state: ${bookmark_state}`, // 수정: posting_id -> id
        );

        // 현재 bookmark_count 가져오기
        const { data: currentData, error: fetchError } = await supabase
          .from("postings")
          .select("bookmark_count")
          .eq("id", id) // 수정: posting_id -> id
          .single();

        if (fetchError || !currentData) {
          console.error("Error fetching current bookmark count:", fetchError);
          return new Response(
            JSON.stringify({
              error: "Failed to fetch current bookmark count.",
            }),
            { headers: { "Content-Type": "application/json" }, status: 500 },
          );
        }

        const currentCount = currentData.bookmark_count || 0;

        if (bookmark_state) {
          // 북마크 추가
          const { error: insertError } = await supabase
            .from("bookmarks")
            .insert([{ user_id: userId, posting_id: id }]); // 수정: posting_id -> id

          if (insertError) {
            if (
              insertError.message.includes(
                "duplicate key value violates unique constraint",
              )
            ) {
              return new Response(
                JSON.stringify({ error: "Bookmark already exists." }),
                {
                  headers: { "Content-Type": "application/json" },
                  status: 409,
                },
              );
            }
            console.error("Error adding bookmark:", insertError);
            return new Response(
              JSON.stringify({ error: "Failed to add bookmark." }),
              { headers: { "Content-Type": "application/json" }, status: 500 },
            );
          }

          // bookmark_count 증가
          const newCount = currentCount + 1;
          console.log("Updating bookmark_count for id:", id); // 수정: posting_id -> id
          console.log("newCount Data:", newCount);

          const { data: updatedData, error: countError } = await supabase
            .from("postings")
            .update({ bookmark_count: newCount })
            .eq("id", id) // 수정: posting_id -> id
            .select("id, bookmark_count")
            .maybeSingle();

          if (countError || !updatedData) {
            console.error("Error updating bookmark count:", countError);
            return new Response(
              JSON.stringify({ error: "Failed to update bookmark count." }),
              { headers: { "Content-Type": "application/json" }, status: 500 },
            );
          }

          console.log("Updated Data:", updatedData);
          return new Response(
            JSON.stringify({
              message: "Bookmark added successfully.",
              updatedData,
            }),
            { headers: { "Content-Type": "application/json" }, status: 200 },
          );
        } else {
          // 북마크 삭제
          const { error: deleteError } = await supabase
            .from("bookmarks")
            .delete()
            .eq("user_id", userId)
            .eq("posting_id", id); // 수정: posting_id -> id

          if (deleteError) {
            console.error("Error removing bookmark:", deleteError);
            return new Response(
              JSON.stringify({ error: "Failed to remove bookmark." }),
              { headers: { "Content-Type": "application/json" }, status: 500 },
            );
          }

          // bookmark_count 감소
          const newCount = Math.max(0, currentCount - 1);
          console.log("Updating bookmark_count for id:", id); // 수정: posting_id -> id
          console.log("newCount Data:", newCount);

          const { data: updatedData, error: countError } = await supabase
            .from("postings")
            .update({ bookmark_count: newCount })
            .eq("id", id) // 수정: posting_id -> id
            .select("id, bookmark_count")
            .maybeSingle();

          if (countError || !updatedData) {
            console.error("Error updating bookmark count:", countError);
            return new Response(
              JSON.stringify({ error: "Failed to update bookmark count." }),
              { headers: { "Content-Type": "application/json" }, status: 500 },
            );
          }

          console.log("Updated Data:", updatedData);
          return new Response(
            JSON.stringify({
              message: "Bookmark removed successfully.",
              updatedData,
            }),
            { headers: { "Content-Type": "application/json" }, status: 200 },
          );
        }
      } catch (error) {
        console.error("Unhandled Error:", error);
        return new Response(
          JSON.stringify({
            error: error instanceof Error
              ? error.message
              : "Unknown error occurred.",
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
