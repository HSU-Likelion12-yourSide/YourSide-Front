import { SupabaseClient } from "https://esm.sh/v135/@supabase/supabase-js@2.47.7/dist/module/index.js";

const author = async (
  req: Request,
  supabase: SupabaseClient,
): Promise<{ userId: string } | Response> => {
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

  return { userId: user.id };
};

export default author;
