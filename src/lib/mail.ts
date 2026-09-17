import nodemailer from "nodemailer";

export const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "monya1987@gmail.com";

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

type SendMailInput = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendMail({ subject, text, html, replyTo }: SendMailInput) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);

  if (!host || !user || !pass) {
    return { ok: false as const, reason: "not_configured" as const };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? user,
    to: CONTACT_TO,
    replyTo,
    subject,
    text,
    html,
  });

  return { ok: true as const };
}
