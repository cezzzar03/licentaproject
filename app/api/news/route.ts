import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const topics = ['crypto', 'bitcoin', 'blockchain'];
    const q = topics[Math.floor(Math.random() * topics.length)];

    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${q}&lang=en&max=5&sortby=publishedAt&token=${process.env.GNEWS_API_KEY}`
    );
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("Eroare GNews:", err);
    return NextResponse.json({ error: 'Nu am putut prelua știrile.' }, { status: 500 });
  }
}
