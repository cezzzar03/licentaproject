import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=crypto&lang=en&max=5&token=${process.env.GNEWS_API_KEY}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Eroare GNews:", err);
    return NextResponse.json({ error: 'Nu am putut prelua știrile.' }, { status: 500 });
  }
}