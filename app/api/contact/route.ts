import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    
    console.log('Environment check:');
    console.log('GMAIL_USER exists:', !!gmailUser);
    console.log('GMAIL_APP_PASSWORD exists:', !!gmailPassword);
    console.log('GMAIL_USER length:', gmailUser?.length || 0);
    console.log('GMAIL_APP_PASSWORD length:', gmailPassword?.length || 0);
    
    if (!gmailUser || !gmailPassword) {
      console.error('❌ Gmail credentials not configured');
      console.error('GMAIL_USER:', gmailUser ? `Set (${gmailUser.length} chars)` : 'Missing');
      console.error('GMAIL_APP_PASSWORD:', gmailPassword ? `Set (${gmailPassword.length} chars)` : 'Missing');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact the administrator.',
          debug: {
            hasUser: !!gmailUser,
            hasPassword: !!gmailPassword,
            envKeys: Object.keys(process.env).filter(k => k.includes('GMAIL'))
          }
        },
        { status: 500 }
      );
    }

    console.log('Attempting to send email to:', 'pearlcodelk@gmail.com');
    console.log('From:', process.env.GMAIL_USER);

    // Email content
    const mailOptions = {
      from: `"QBiz Solutions" <${process.env.GMAIL_USER}>`,
      to: 'pearlcodelk@gmail.com',
      replyTo: email, // Allows you to reply directly to the user
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            
            <p style="margin: 10px 0;">
              <strong style="color: #16a34a;">Name:</strong> ${name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #16a34a;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
            
            ${phone ? `
            <p style="margin: 10px 0;">
              <strong style="color: #16a34a;">Phone:</strong> 
              <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
            </p>
            ` : ''}
            
            ${company ? `
            <p style="margin: 10px 0;">
              <strong style="color: #16a34a;">Company:</strong> ${company}
            </p>
            ` : ''}
            
            ${service ? `
            <p style="margin: 10px 0;">
              <strong style="color: #16a34a;">Service Interest:</strong> ${service}
            </p>
            ` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the QBiz Solutions contact form.</p>
            <p>You can reply directly to this email to contact ${name} at ${email}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${service ? `Service Interest: ${service}` : ''}

Message:
${message}

---
This email was sent from the QBiz Solutions contact form.
You can reply directly to this email to contact ${name} at ${email}.
      `.trim(),
    };

    // Verify connection first
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError);
      throw verifyError;
    }

    // Send email
    console.log('📧 Attempting to send email...');
    console.log('From:', process.env.GMAIL_USER);
    console.log('To: pranamalakshan360@gmail.com');
    
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    
    // Return more detailed error message
    const errorMessage = error.response 
      ? `Gmail error: ${error.response}` 
      : error.message 
      ? `Error: ${error.message}` 
      : 'Failed to send email. Please check your Gmail credentials.';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
