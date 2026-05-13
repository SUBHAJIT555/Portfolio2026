import nodemailer from "nodemailer";
import { z } from "zod";

export type ContactMailPayload = {
  name: string;
  email: string;
  phone: string;
  projectIdea: string;
};

const emailSchema = z.string().email();

const CONTACT_MAIL_REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
] as const;

export function getMissingContactMailEnv(): string[] {
  return CONTACT_MAIL_REQUIRED_ENV.filter((key) => {
    const v = process.env[key];
    return typeof v !== "string" || v.trim() === "";
  });
}

export function parseContactToAddresses(raw: string): string[] | null {
  const parts = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length === 0) return null;
  for (const p of parts) {
    if (!emailSchema.safeParse(p).success) return null;
  }
  return parts;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(
  data: ContactMailPayload
): Promise<void> {
  const host = process.env.SMTP_HOST!.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const port = portRaw ? Number(portRaw) : 587;
  if (!Number.isFinite(port) || port < 1 || port > 65535) {
    throw new Error("Invalid SMTP_PORT");
  }

  const secure =
    process.env.SMTP_SECURE?.trim().toLowerCase() === "true" || port === 465;

  const user = process.env.SMTP_USER!.trim();
  /** Gmail app passwords often include spaces. */
  const pass = (process.env.SMTP_PASS ?? "").replace(/\s/g, "");
  const toRaw = process.env.CONTACT_TO_EMAIL!.trim();
  const toAddresses = parseContactToAddresses(toRaw);
  if (!toAddresses) {
    throw new Error("Invalid CONTACT_TO_EMAIL");
  }

  const mailFrom =
    process.env.MAIL_FROM?.trim() && process.env.MAIL_FROM.trim().length > 0
      ? process.env.MAIL_FROM.trim()
      : user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 15_000,
  });

  const { name, email, phone, projectIdea } = data;
  const phoneLine = phone ? `Phone: ${phone}\n` : "";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phoneLine,
    "",
    "About project idea:",
    projectIdea,
  ].join("\n");

  const phoneHtml = phone
    ? `<p><strong>Phone</strong><br />${escapeHtml(phone)}</p>`
    : "";

  const html = `<!DOCTYPE html>
<html><body>
  <p><strong>Name</strong><br />${escapeHtml(name)}</p>
  <p><strong>Email</strong><br />${escapeHtml(email)}</p>
  ${phoneHtml}
  <p><strong>About project idea</strong></p>
  <p>${escapeHtml(projectIdea).replace(/\r\n|\n|\r/g, "<br />")}</p>
</body></html>`;

  const subject = `Portfolio contact: ${name.replace(/[\r\n]+/g, " ").slice(0, 120)}`;

  await transporter.sendMail({
    from: mailFrom,
    to: toAddresses,
    replyTo: email,
    subject,
    text,
    html,
  });
}
