import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const topics = ['crypto', 'bitcoin', 'blockchain', 'ethereum', 'solana', 'altcoin', 'xrp'];
    const q = topics[Math.floor(Math.random() * topics.length)];

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const from = `${year}-${month}-01`;
    const to = `${year}-${month}-${day}`;

    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${q}&lang=en&max=5&from=${from}&to=${to}&sortby=publishedAt&token=${process.env.GNEWS_API_KEY}`
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("Eroare GNews:", err);
    return NextResponse.json({ error: 'Nu am putut prelua știrile.' }, { status: 500 });
  }
}