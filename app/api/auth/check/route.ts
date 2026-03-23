import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get("site-auth");
  const authenticated = authCookie?.value === "authenticated";
  return NextResponse.json({ authenticated });
}
