// /src/app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email === 'test@example.com' && password === 'password') {
    return NextResponse.json({ message: 'Login successful!' }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
  }
}
