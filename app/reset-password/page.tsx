"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetareParola() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [nouaParola, setNouaParola] = useState("");
  const [confirmaParola, setConfirmaParola] = useState("");
  const [eroare, setEroare] = useState("");
  const [succes, setSucces] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validări
    if (nouaParola !== confirmaParola) {
      setEroare("Parolele nu coincid.");
      return;
    }
    if (
      nouaParola.length < 8 ||
      /\s/.test(nouaParola) ||
      (nouaParola.match(/[^A-Za-z0-9]/g) || []).length < 2
    ) {
      setEroare("Parola trebuie să aibă minim 8 caractere, fără spații și cel puțin 2 caractere speciale.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, parolaNoua: nouaParola }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSucces("Parola a fost resetată cu succes!");
        setEroare("");

        setTimeout(() => {
          router.push("/auth");
        }, 2500); // redirect după 2.5 secunde
      } else {
        setSucces("");
        setEroare(data.message || "Eroare la resetarea parolei.");
      }
    } catch (err) {
      setSucces("");
      setEroare("Eroare server.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/CryptoBackground.jpg')" }}
    >
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Setează o parolă nouă</h2>

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="password"
            placeholder="Noua parolă"
            value={nouaParola}
            onChange={(e) => setNouaParola(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirmă parola"
            value={confirmaParola}
            onChange={(e) => setConfirmaParola(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />

          {eroare && <p className="text-sm text-red-600">{eroare}</p>}
          {succes && <p className="text-sm text-green-600">{succes}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Resetează parola
          </button>
        </form>
      </div>
    </div>
  );
}