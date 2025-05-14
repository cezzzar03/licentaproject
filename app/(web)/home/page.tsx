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
            <div key={index} className="bg-white p-4 rounded-md shadow flex gap-4">
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
        <h2 className="text-2xl font-bold mb-4 text-slate-800">💹 Top 10 Performing Coins of the Day</h2>
        <p>📊 Vom adăuga aici lista celor mai performante monede.</p>
      </motion.div>

    </main>
  );
}