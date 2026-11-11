const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadRecaptcha() {
  if (!SITE_KEY) {
    return Promise.reject(new Error("CAPTCHA is not configured. Please contact the site administrator."));
  }

  if (window.grecaptcha) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load CAPTCHA. Please check your connection and try again."));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export async function getRecaptchaToken(action: string) {
  await loadRecaptcha();

  return new Promise<string>((resolve, reject) => {
    window.grecaptcha!.ready(() => {
      window.grecaptcha!.execute(SITE_KEY!, { action }).then(resolve, reject);
    });
  });
}
