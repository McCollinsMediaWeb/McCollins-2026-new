import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { submitToHubSpot } from '@/lib/hubspot';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || !body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Simple email regex validation on the server side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    // 1. Persist locally to MongoDB
    const client = await clientPromise;
    const db = client.db('MccollinsMedia');

    const subscriber = {
      email: body.email.toLowerCase().trim(),
      createdAt: new Date()
    };

    await db.collection('newsletterSubscribers').insertOne(subscriber);

    let hubspotSubmitted = false;
    try {
      const hubspotResult = await submitToHubSpot(req, {
        kind: 'newsletter',
        fields: [{ name: 'email', value: subscriber.email }],
        pageName: 'Website newsletter signup',
        pageUri: req.headers.get('referer') || '',
      });
      hubspotSubmitted = hubspotResult.submitted;
    } catch (err) {
      console.error('HubSpot newsletter sync error:', err);
    }

    // 2. Forward to Google Sheets Webhook URL from environment variables
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: subscriber.email })
        });
        if (!response.ok) {
          console.error('Google Sheet Webhook returned status:', response.status);
        }
      } catch (err) {
        console.error('Google Sheet Webhook fetch error:', err);
      }
    } else {
      console.warn('GOOGLE_SHEET_WEBHOOK_URL environment variable is not defined.');
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully', hubspotSubmitted });
  } catch (error: unknown) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 });
  }
}
