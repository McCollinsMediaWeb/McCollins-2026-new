"use client";

import { useEffect, useRef } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "google-recaptcha-v2";

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      render(container: HTMLElement, options: {
        sitekey: string;
        theme: "light" | "dark";
        callback?: (token: string) => void;
        "expired-callback"?: () => void;
      }): number;
    };
  }
}

function loadRecaptchaScript() {
  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise<void>((resolve) => {
      if (window.grecaptcha) resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load reCAPTCHA"));
    document.head.appendChild(script);
  });
}

export default function RecaptchaCheckbox({
  theme = "light",
  onChange,
}: {
  theme?: "light" | "dark";
  onChange?: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current || renderedRef.current) return;

    loadRecaptchaScript().then(() => {
      window.grecaptcha?.ready(() => {
        if (!containerRef.current || renderedRef.current) return;
        window.grecaptcha!.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme,
          callback: onChange,
          "expired-callback": () => onChange?.(""),
        });
        renderedRef.current = true;
      });
    }).catch((error) => console.error(error));
  }, [onChange, theme]);

  if (!SITE_KEY) {
    return <p role="alert">reCAPTCHA is not configured.</p>;
  }

  return <div ref={containerRef} style={{ margin: "16px 0", minHeight: 78 }} />;
}

export function getRecaptchaResponse(form: HTMLFormElement) {
  const value = new FormData(form).get("g-recaptcha-response");
  return typeof value === "string" ? value : "";
}
