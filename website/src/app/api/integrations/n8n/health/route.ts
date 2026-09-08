import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.N8N_BASE_URL?.replace(/\/$/, "");
  const apiKey = process.env.N8N_API_KEY;

  if (!baseUrl || !apiKey) {
    return NextResponse.json(
      { ok: false, service: "n8n", error: "Server configuration is incomplete." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${baseUrl}/api/v1/workflows?limit=1`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-N8N-API-KEY": apiKey,
      },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, service: "n8n", status: response.status, error: "n8n API request failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      service: "n8n",
      status: response.status,
      message: "MVM can authenticate with the n8n API.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, service: "n8n", error: "Unable to reach n8n." },
      { status: 502 },
    );
  }
}
