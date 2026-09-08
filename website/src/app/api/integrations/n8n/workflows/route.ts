import { NextResponse } from "next/server";
import { n8nRequest } from "@/lib/n8n";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await n8nRequest<{ data?: Array<{ id: string; name: string; active: boolean }> }>(
      "/workflows?limit=100",
    );

    const workflows = (result.data ?? []).map(({ id, name, active }) => ({ id, name, active }));

    return NextResponse.json({ ok: true, count: workflows.length, workflows });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to retrieve n8n workflows." },
      { status: 502 },
    );
  }
}
