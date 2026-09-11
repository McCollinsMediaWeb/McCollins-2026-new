import { NextRequest, NextResponse } from 'next/server';
import { splitFullName, submitToHubSpot } from '@/lib/hubspot';
import { ObjectId } from 'mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, source, pageUrl } = body || {};

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      phone: phone.trim(),
      source: source ? source.trim() : 'Website WhatsApp Button',
      pageUrl: pageUrl || '',
      createdAt: new Date(),
    };

    let insertedId: ObjectId | undefined;
    if (process.env.MONGODB_URI) {
      try {
        const { default: clientPromise } = await import('@/lib/mongodb');
        const client = await clientPromise;
        const db = client.db('MccollinsMedia');
        const result = await db.collection('whatsappLeads').insertOne(leadData);
        insertedId = result.insertedId;
      } catch (err) {
        console.error('MongoDB WhatsApp lead storage error:', err);
      }
    }

    const { firstname, lastname } = splitFullName(leadData.name);
    let hubspotSubmitted = false;
    try {
      const hubspotResult = await submitToHubSpot(req, {
        kind: 'whatsapp',
        fields: [
          { name: 'firstname', value: firstname },
          { name: 'lastname', value: lastname },
          { name: 'phone', value: leadData.phone },
        ],
        pageName: leadData.source,
        pageUri: leadData.pageUrl,
      });
      hubspotSubmitted = hubspotResult.submitted;
    } catch (err) {
      console.error('HubSpot WhatsApp lead sync error:', err);
    }

    // 2. Forward to Google Sheets Webhook URL if configured
    const webhookUrl =
      process.env.WHATSAPP_GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwHe1Wom6xq9Vp0Zq1lS-h9CSdKS7bM-4XjQO1f00EPUF3SGSPMMNh4ZPE0vx3i1Bvv6w/exec";

    if (webhookUrl) {
      try {
        const sheetRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          body: JSON.stringify({
            name: leadData.name,
            phone: leadData.phone,
            source: leadData.source,
            pageUrl: leadData.pageUrl,
            createdAt: leadData.createdAt.toISOString(),
          }),
        });
        const sheetResText = await sheetRes.text();
        console.log('Google Sheet Webhook response:', sheetRes.status, sheetResText);
      } catch (err) {
        console.error('Google Sheet Webhook submission error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'WhatsApp lead recorded successfully',
      id: insertedId,
      hubspotSubmitted,
    });
  } catch (error: unknown) {
    console.error('WhatsApp Lead API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    const { default: clientPromise } = await import('@/lib/mongodb');
    const client = await clientPromise;
    const db = client.db('MccollinsMedia');

    const result = await db.collection('whatsappLeads').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No WhatsApp lead found with that ID' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'WhatsApp lead deleted successfully' });
  } catch (error: unknown) {
    console.error('Delete WhatsApp lead API error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 });
  }
}
