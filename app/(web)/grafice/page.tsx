'use client';
import { useEffect, useState } from 'react';

const coins = [
  { name: 'BTC', symbol: 'BINANCE:BTCUSDT' },
  { name: 'ETH', symbol: 'BINANCE:ETHUSDT' },
  { name: 'XRP', symbol: 'BINANCE:XRPUSDT' },
  { name: 'SOL', symbol: 'BINANCE:SOLUSDT' },
  { name: 'ADA', symbol: 'BINANCE:ADAUSDT' },
];

export default function GraficePage() {
  const [selectedSymbol, setSelectedSymbol] = useState('BINANCE:BTCUSDT');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      new (window as any).TradingView.widget({
        container_id: "tradingview_btc_chart",
        width: "100%",
        height: 700,
        symbol: selectedSymbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "ro",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        save_image: false,
      });      
    };

    const chartDiv = document.getElementById('tradingview_btc_chart');
    if (chartDiv) chartDiv.innerHTML = ''; 

    document.body.appendChild(script);
  }, [selectedSymbol]);

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">📈 Grafic Monede Live</h1>

      <div id="tradingview_btc_chart" className="w-full mb-6" style={{ minHeight: '700px' }} />

      <div className="flex justify-center gap-4">
        {coins.map((coin) => (
          <button
            key={coin.name}
            onClick={() => setSelectedSymbol(coin.symbol)}
            className={`px-4 py-2 rounded font-bold border ${
              selectedSymbol === coin.symbol
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 border-blue-600'
            } transition`}
          >
            {coin.name}
          </button>
        ))}
      </div>
    </div>
  );
}