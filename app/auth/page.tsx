"use client";
import { useState } from "react";

export default function AuthPage() {
  // State care decide dacă suntem pe login sau sign up (momentan nu folosim toggle)
  const [isLogin, setIsLogin] = useState(true);

  return (
    // Container general pe toată pagina, cu fundal imagine
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4" 
      style={{ backgroundImage: "url('/images/CryptoBackground.png')" }}>
      
      {/* Wrapper pentru cele 2 coloane */}
      <div className="flex w-full max-w-5xl">

        {/* Coloana stângă - Prezentare aplicație */}
        <div className="w-1/2 bg-[#1a1a1a] text-white p-10 rounded-l-2xl">
          {
            <>
              {/* Titlu aplicație */}
              <h1 className="text-5xl font-extrabold tracking-widest text-white-400 uppercase">CryptoHub</h1>

              {/* Descriere / slogan aplicație */}
              <p className="text-sm text-gray-400 mt-4">
                Locul perfect pentru a învăța mai multe despre spațiul Crypto!
              </p>
            </>
          }
        </div>

        {/* Coloana dreaptă - Formular de autentificare */}
        {
          <div className="w-1/2 bg-white p-10 rounded-r-2xl">
            {/* Titlu formular login */}
            {/* Poți adăuga aici: <h2>Sign in to your account</h2> */}

            {/* Formular login */}
            <form className="space-y-5 mt-6">
              {/* Input Email */}
              
              {/* Input Password */}
              
              {/* Remember me + Forgot password */}
              
              {/* Buton Login */}
            </form>
          </div>
        }

      </div>
    </div>
  );
}