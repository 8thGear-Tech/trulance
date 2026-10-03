"use server";

import { Resend } from "resend";
import { z } from "zod";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[] | undefined>;
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  topic: z.enum(["general", "hire", "join", "partnership"]),
  message: z.string().trim().min(10, "Please add a little more detail (10+ characters).").max(5000),
});

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(200).optional(),
  phone: z.string().trim().max(40).optional(),
  plan: z.enum(["starter", "growth", "squad", "not-sure"]),
  services: z.array(z.string()).min(1, "Choose at least one service."),
  budget: z.string().trim().min(1, "Please choose a budget range."),
  timeline: z.string().trim().min(1, "Please choose a timeline."),
  details: z.string().trim().min(20, "Please describe the project (20+ characters).").max(8000),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function rows(data: Record<string, string | undefined>) {
  return Object.entries(data)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v!)}</td></tr>`,
    )
    .join("");
}

async function send(subject: string, replyTo: string, fields: Record<string, string | undefined>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@trulance.io";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Trulance Website <onboarding@resend.dev>";

  if (!apiKey) {
    // Local development without a key: log instead of failing.
    console.warn("[forms] RESEND_API_KEY is not set; submission logged only.", { subject, fields });
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo,
    subject,
    html: `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows(fields)}</table>`,
    text: Object.entries(fields)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  });
  if (error) throw new Error(error.message);
}

const GENERIC_ERROR = "Something went wrong sending your message. Please try again or email info@trulance.io.";

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("website")) return { status: "success", message: "Thanks! We'll be in touch shortly." };

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
  });
  if (!parsed.success) {
    return { status: "error", message: "Please fix the highlighted fields.", errors: z.flattenError(parsed.error).fieldErrors };
  }

  const d = parsed.data;
  try {
    await send(`Website enquiry (${d.topic}) from ${d.name}`, d.email, {
      Name: d.name,
      Email: d.email,
      Topic: d.topic,
      Message: d.message,
    });
  } catch (e) {
    console.error("[forms] contact send failed", e);
    return { status: "error", message: GENERIC_ERROR };
  }
  return { status: "success", message: "Thanks! Your message is on its way. We'll reply within [N] working days." };
}

export async function submitQuote(_prev: FormState, formData: FormData): Promise<FormState> {
  if (formData.get("website")) return { status: "success", message: "Thanks! We'll be in touch shortly." };

  const opt = (k: string) => {
    const v = formData.get(k);
    return typeof v === "string" && v.trim() ? v : undefined;
  };

  const parsed = quoteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: opt("company"),
    phone: opt("phone"),
    plan: formData.get("plan"),
    services: formData.getAll("services").map(String),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    details: formData.get("details"),
  });
  if (!parsed.success) {
    return { status: "error", message: "Please fix the highlighted fields.", errors: z.flattenError(parsed.error).fieldErrors };
  }

  const d = parsed.data;
  try {
    await send(`Quote request: ${d.company ?? d.name} (${d.plan})`, d.email, {
      Name: d.name,
      Email: d.email,
      Company: d.company,
      Phone: d.phone,
      Plan: d.plan,
      Services: d.services.join(", "),
      Budget: d.budget,
      Timeline: d.timeline,
      Details: d.details,
    });
  } catch (e) {
    console.error("[forms] quote send failed", e);
    return { status: "error", message: GENERIC_ERROR };
  }
  return { status: "success", message: "Thanks! We've received your request and will send a quote within [N] working days." };
}
