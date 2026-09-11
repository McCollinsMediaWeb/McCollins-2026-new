import type { NextRequest } from "next/server";

type HubSpotFormKind = "contact" | "newsletter" | "whatsapp";

type HubSpotSubmission = {
  kind: HubSpotFormKind;
  fields: Array<{ name: string; value: string }>;
  pageName?: string;
  pageUri?: string;
};

const formIdEnvironmentVariables: Record<HubSpotFormKind, string> = {
  contact: "HUBSPOT_CONTACT_FORM_ID",
  newsletter: "HUBSPOT_NEWSLETTER_FORM_ID",
  whatsapp: "HUBSPOT_WHATSAPP_FORM_ID",
};

export function getHubSpotPortalId() {
  return process.env.HUBSPOT_PORTAL_ID;
}

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return { firstname: parts.shift() ?? "", lastname: parts.join(" ") };
}

export async function submitToHubSpot(request: NextRequest, submission: HubSpotSubmission) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env[formIdEnvironmentVariables[submission.kind]];

  if (!portalId || !formId) {
    return { submitted: false, reason: "not_configured" as const };
  }

  const fields = submission.fields
    .map((field) => ({ ...field, value: field.value.trim() }))
    .filter((field) => field.value.length > 0);
  const hutk = request.cookies.get("hubspotutk")?.value;
  const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(portalId)}/${encodeURIComponent(formId)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.now().toString(),
        fields,
        context: {
          ...(hutk ? { hutk } : {}),
          ...(ipAddress ? { ipAddress } : {}),
          ...(submission.pageName ? { pageName: submission.pageName } : {}),
          ...(submission.pageUri ? { pageUri: submission.pageUri } : {}),
        },
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`HubSpot ${submission.kind} form submission failed (${response.status}): ${details.slice(0, 500)}`);
  }

  return { submitted: true as const };
}
