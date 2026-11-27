import { NextRequest } from "next/server";
import { jwtVerify, SignJWT } from "jose";

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
    if (result.success !== true) return false;

    const minimumScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
    if (typeof result.score === "number" && result.score < minimumScore) {
      console.warn(`[reCAPTCHA] Blocked bot / low-score request: score ${result.score} < ${minimumScore}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function proofKey() {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error("RECAPTCHA_SECRET_KEY is not configured");
  return new TextEncoder().encode(secret);
}

export async function createRecaptchaProof(resumeUrl: string) {
  return new SignJWT({ resumeUrl, purpose: "career_application" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(proofKey());
}

export async function verifyRecaptchaProof(proof: unknown, resumeUrl: unknown) {
  if (typeof proof !== "string" || typeof resumeUrl !== "string") return false;
  try {
    const { payload } = await jwtVerify(proof, proofKey());
    return payload.purpose === "career_application" && payload.resumeUrl === resumeUrl;
  } catch {
    return false;
  }
}
