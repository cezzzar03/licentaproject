"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function HomePage() {

  //aici preluam stirile prin API ul celor de la GNews
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNews(data.articles.slice(0, 5)); 
      } catch (err) {
        console.error("Eroare la preluarea știrilor:", err);
      }
    };

    fetchNews();
  }, []);

  //aici preluam cele mai bune monede prin coingecko API
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`http://localhost:3001/api/coins?_=${Date.now()}`);
      const data = await res.json();
      console.log("🧠 FETCH NOU:", new Date().toLocaleTimeString());
      console.log("💵 BTC:", data.data[0]?.current_price);
      setCoins((prev) =>
        JSON.stringify(prev) !== JSON.stringify(data.data) ? [...data.data] : prev
      );      
    };
    
    fetchCoins();
  
    const interval = setInterval(fetchCoins, 60000);
    return () => clearInterval(interval);
  }, []);
  
  

  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full p-6 gap-8">

      {/* Șțiri */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-4xl bg-white/80 p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-slate-800">📰 Știri relevante</h2>
        <div className="grid gap-4">
          {news.map((item: any, index: number) => (
            <div key={index} className="bg-zinc-100 border border-zinc-300 p-4 rounded-xl shadow-sm hover:shadow-md transition flex gap-4">
              <img
                src={item.image || "/images/fallback.jpg"}
                alt={`Știre ${index + 1}`}
                className="w-48 h-32 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Sursa: {item.source.name}</p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm mt-2"
                >
                  Citește articolul ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* COINS */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl bg-white/80 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-slate-800">💹 Cele mai actuale monede din Cripto</h2>

          <div className="grid gap-4">
            {coins.map((coin: any) => (
              <div
                key={coin.id}
                className="bg-zinc-100 border border-zinc-300 p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between"
              >
                
                <div className="flex items-center gap-4">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </p>
                  </div>
                </div>

                
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    💰 Capitalizare: ${coin.market_cap.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    💵 Preț: ${coin.current_price.toFixed(2)}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    📊 {coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

    </main>
  );
}