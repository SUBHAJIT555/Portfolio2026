import { NextResponse } from "next/server";
import { z } from "zod";

import { isContactRateLimited } from "@/lib/mail/rate-limit-contact";
import {
  getMissingContactMailEnv,
  sendContactEmail,
} from "@/lib/mail/send-contact-email";

export const runtime = "nodejs";

export const maxDuration = 25;

const contactBodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50),
  projectIdea: z.string().trim().min(1).max(10000),
  website: z.string().max(200).optional().default(""),
});

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported content type." },
      { status: 415 }
    );
  }

  const ip = clientIp(request);
  if (isContactRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const missingEnv = getMissingContactMailEnv();
  if (missingEnv.length > 0) {
    console.error("Contact mail: missing env:", missingEnv.join(", "));
    return NextResponse.json(
      {
        error: "Contact form is not configured.",
        missing: missingEnv,
      },
      { status: 503 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactBodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  if (parsed.data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      projectIdea: parsed.data.projectIdea,
    });
  } catch (err) {
    console.error("Contact mail send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
