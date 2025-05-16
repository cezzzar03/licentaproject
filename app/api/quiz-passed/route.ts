import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email lipsă' }, { status: 400 });
  }

  try {
    const updated = await prisma.utilizator.update({
      where: { email },
      data: { quizPassed: true },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Eroare PATCH /quiz-passed:", error);
    return NextResponse.json({ error: 'Update eșuat' }, { status: 500 });
  }
}