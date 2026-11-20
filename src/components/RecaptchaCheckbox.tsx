"use client";

import { useEffect } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "google-recaptcha-v3";

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

function loadRecaptchaScript() {
  if (!SITE_KEY) return Promise.reject(new Error("reCAPTCHA is not configured."));

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise<void>((resolve, reject) => {
      if (window.grecaptcha) resolve();
      else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("Unable to load reCAPTCHA.")), { once: true });
      }
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load reCAPTCHA."));
    document.head.appendChild(script);
  });
}

export default function RecaptchaCheckbox({
  theme: _theme = "light",
}: {
  theme?: "light" | "dark";
  onChange?: (token: string) => void;
}) {
  useEffect(() => {
    loadRecaptchaScript().catch((error) => console.error(error));
  }, []);

  if (!SITE_KEY) return <p role="alert">reCAPTCHA is not configured.</p>;
  return null;
}

export async function getRecaptchaResponse(
  _form?: HTMLFormElement,
  action = "form_submit",
) {
  if (!SITE_KEY) return "";

  try {
    await loadRecaptchaScript();
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha!
          .execute(SITE_KEY, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  } catch (error) {
    console.error("reCAPTCHA execution error:", error);
    return "";
  }
}
