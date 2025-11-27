import { NextResponse } from 'next/server';

export async function GET() {
  // This endpoint helps verify environment variables are set correctly
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  
  // Get all environment variables that contain "GMAIL" (for debugging)
  const allEnvKeys = Object.keys(process.env);
  const gmailKeys = allEnvKeys.filter(key => key.toUpperCase().includes('GMAIL'));
  
  return NextResponse.json({
    status: 'Environment Check',
    gmailUser: {
      exists: !!gmailUser,
      length: gmailUser?.length || 0,
      firstChar: gmailUser?.[0] || 'N/A',
      lastChar: gmailUser?.[gmailUser?.length - 1] || 'N/A',
    },
    gmailPassword: {
      exists: !!gmailPassword,
      length: gmailPassword?.length || 0,
      firstChar: gmailPassword?.[0] || 'N/A',
      lastChar: gmailPassword?.[gmailPassword?.length - 1] || 'N/A',
    },
    allGmailKeys: gmailKeys,
    totalEnvKeys: allEnvKeys.length,
    nodeEnv: process.env.NODE_ENV,
  }, { status: 200 });
}

