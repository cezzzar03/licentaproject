'use client';
import { useEffect, useState } from 'react';

export default function SymbolSearchChart() {
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");
  const [input, setInput] = useState("");
  const [lastTriedSymbol, setLastTriedSymbol] = useState("BTCUSDT");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      new (window as any).TradingView.widget({
        container_id: "tv_chart",
        width: "100%",
        height: 700,
        symbol: symbol,
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

    const chartDiv = document.getElementById('tv_chart');
    if (chartDiv) chartDiv.innerHTML = '';

    document.body.appendChild(script);
  }, [symbol]);

  const handleSearch = () => {
    const formatted = input.trim().toUpperCase();
    if (formatted) {
      setSymbol(`BINANCE:${formatted}`);
      setLastTriedSymbol(formatted);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: BTCUSDT, ETHUSDT, DOGEUSDT"
          className="border px-4 py-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="text-white px-4 py-2 rounded bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 transition"
        >
          Caută simbol
        </button>
      </div>

      <div id="tv_chart" style={{ minHeight: "700px" }} />

      <div className="mt-4 text-sm text-gray-600 text-center max-w-xl mx-auto">
        ℹ️ Dacă simbolul <span className="font-bold">{lastTriedSymbol}</span> nu este listat pe Binance
        sau nu este suportat de TradingView, graficul nu va apărea. Asigură-te că ai introdus corect simbolul!
      </div>
    </div>
  );
}