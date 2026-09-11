# HubSpot setup

The website supports HubSpot visitor tracking and server-side lead submission while retaining its existing MongoDB and Google Sheets integrations.

## HubSpot forms

Create three regular forms in HubSpot with these fields and standard internal names:

- Contact: `firstname`, `lastname`, `email`, `phone`, `company`, `jobtitle`, `message`
- Newsletter: `email`
- WhatsApp: `firstname`, `lastname`, `phone`

Labels may differ, but the internal names must match. Configure consent/GDPR fields and workflows in HubSpot as required for your account and jurisdiction.

## Environment variables

Copy `.env.example` to `.env.local`, fill in the values, and restart the development server:

```dotenv
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_CONTACT_FORM_ID=00000000-0000-0000-0000-000000000000
HUBSPOT_NEWSLETTER_FORM_ID=00000000-0000-0000-0000-000000000000
HUBSPOT_WHATSAPP_FORM_ID=00000000-0000-0000-0000-000000000000
```

Add the same variables in the production hosting environment and redeploy. The portal ID enables HubSpot's tracking script. Each form ID enables its corresponding lead sync. If HubSpot is not configured or is temporarily unavailable, existing lead storage still succeeds and the integration error is logged server-side.
