// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY); // 👈 Use env var name, not the actual key

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
        from: 'hello@packlite.com', // 👈 Use a valid email address from your verified domain
        to: 'wgreaney0405@gmail.com',
        subject: `New Contact Form Submission: ${body.subject}`,
        html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
        `,
    });

    console.log("Resend response:", data); // 👈 This logs the full response for debugging

    return NextResponse.json({ success: true, message: 'Email sent!', resend: data });
    } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
}
}

