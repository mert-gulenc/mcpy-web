import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const APP_REDIRECT = "mcpyapp://oauth";
const REDIRECT_URI = "https://usemcpy.com/oauth/callback";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export async function GET(req: NextRequest) {
  try {
    return await handleCallback(req);
  } catch (err) {
    console.error("[oauth/callback] Unhandled error:", err);
    return NextResponse.redirect(`${APP_REDIRECT}?error=server_error`);
  }
}

async function handleCallback(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  if (error || !code || !state) {
    return NextResponse.redirect(
      `${APP_REDIRECT}?error=${encodeURIComponent(error ?? "missing_params")}`
    );
  }

  // Validate state token
  const { data: stateRow } = await getSupabaseAdmin()
    .from("oauth_states")
    .select("user_id, expires_at")
    .eq("state_token", state)
    .single<{ user_id: string; expires_at: string }>();

  if (!stateRow) {
    return NextResponse.redirect(`${APP_REDIRECT}?error=invalid_state`);
  }

  if (new Date(stateRow.expires_at) < new Date()) {
    await getSupabaseAdmin().from("oauth_states").delete().eq("state_token", state);
    return NextResponse.redirect(`${APP_REDIRECT}?error=state_expired`);
  }

  // Delete used state (one-time use)
  await getSupabaseAdmin().from("oauth_states").delete().eq("state_token", state);

  // Exchange code for tokens
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    console.error("[oauth/callback] Token exchange failed:", err);
    return NextResponse.redirect(`${APP_REDIRECT}?error=token_exchange_failed`);
  }

  const tokens = (await tokenRes.json()) as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    scope: string;
  };

  const upsertData: Record<string, unknown> = {
    user_id: stateRow.user_id,
    access_token: tokens.access_token,
    expires_at: new Date(Date.now() + tokens.expires_in * 1000).toISOString(),
    scope: tokens.scope,
    updated_at: new Date().toISOString(),
  };
  if (tokens.refresh_token) {
    upsertData.refresh_token = tokens.refresh_token;
  }

  const { error: upsertErr } = await getSupabaseAdmin()
    .from("google_connections")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .upsert(upsertData as any, { onConflict: "user_id" });

  if (upsertErr) {
    console.error("[oauth/callback] DB upsert failed:", upsertErr.message);
    return NextResponse.redirect(`${APP_REDIRECT}?error=db_error`);
  }

  return NextResponse.redirect(`${APP_REDIRECT}?success=true`);
}
