"use client";
import { useState } from "react";

//pt ca sign up sa apara primul setam state fals
export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    //codul pt imaginea de fundal,div ul principal al paginii
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/CryptoBackground.jpg')" }} 
    >
    
      {/* partea stanga a formularului cu text si logo */}
      <div className="w-full max-w-3xl bg-white rounded-xl p-0 shadow-lg flex overflow-auto">
          
          <div className="w-1/2 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 min-h-[400px] flex flex-col">
                <h2 className="text-6xl font-bold mb-20 text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">CryptoHub</h2>
                <p className="text-base text-gray-200 leading-relaxed">
                   CryptoHub este locul ideal pentru a învăța, experimenta și înțelege ecosistemul criptomonedelor. 
                </p>
                <div className="mt-auto flex justify-center">
                  <img src="/images/logo.png" alt="CH Logo" className="w-16 h-16 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
                </div>
          </div>

        {/* partea dreapta a formularului cu sign up+log in */}
         <div className="w-1/2 p-8 min-h-[400px]">
          {isLogin ? (
            /* ───────── Login Form ───────── */
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // aici handleLogin()
              }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Conectează-te
              </h2>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="emailLogin" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="emailLogin"
                  name="email"
                  placeholder="exemplu@domeniu.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Parolă */}
              <div className="mb-5">
                <label htmlFor="parolaLogin" className="block text-sm font-medium text-gray-700">
                  Parolă
                </label>
                <input
                  type="password"
                  id="parolaLogin"
                  name="parola"
                  placeholder="Parola ta"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Texte pt conectare/intregistrare */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Conectare
              </button>

              <p className="text-sm text-center text-gray-500 mt-4">
                Nu ai cont?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Înregistrează-te
                </button>
              </p>
            </form>
          ) : (
            /* ───────── Sign Up Form ───────── */
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setIsLogin(true);
              }}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Creează un cont
              </h2>

              {/* Nume de familie */}
              <div className="mb-5">
                <label htmlFor="nume" className="block text-sm font-medium text-gray-700">
                  Nume de familie
                </label>
                <input
                  type="text"
                  id="nume"
                  name="nume"
                  placeholder="Popescu"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Prenume */}
              <div className="mb-5">
                <label htmlFor="prenume" className="block text-sm font-medium text-gray-700">
                  Prenume
                </label>
                <input
                  type="text"
                  id="prenume"
                  name="prenume"
                  placeholder="Ion"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemplu@domeniu.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Parolă */}
              <div className="mb-5">
                <label htmlFor="parola" className="block text-sm font-medium text-gray-700">
                  Parolă
                </label>
                <input
                  type="password"
                  id="parola"
                  name="parola"
                  placeholder="Alege o parolă"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

                {/* Texte pt conectare/inregistrare */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Înregistrează-te
              </button>

              <p className="text-sm text-center text-gray-500 mt-4">
                Ai deja cont?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Conectează-te
                </button>
              </p>
            </form>
          )}
        </div>

        
      </div>
    </div>
  );
}