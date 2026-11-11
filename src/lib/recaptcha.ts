import { NextRequest } from "next/server";

type RecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptcha(
  request: NextRequest,
  token: unknown,
  expectedAction: string,
) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured");
    return false;
  }

  if (typeof token !== "string" || !token) return false;

  const params = new URLSearchParams({ secret, response: token });
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (forwardedFor) params.set("remoteip", forwardedFor);

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
      cache: "no-store",
    });
    if (!response.ok) return false;

    const result = (await response.json()) as RecaptchaResponse;
    const minimumScore = Number(process.env.RECAPTCHA_MIN_SCORE || "0.5");
    return Boolean(
      result.success &&
      result.action === expectedAction &&
      typeof result.score === "number" &&
      result.score >= minimumScore,
    );
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}
