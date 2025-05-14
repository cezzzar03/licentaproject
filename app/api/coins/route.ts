import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    );
    const data = await res.json();

    return Array.isArray(data)
      ? NextResponse.json(data)
      : NextResponse.json([], { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Eroare CoinGecko' }, { status: 500 });
  }
}