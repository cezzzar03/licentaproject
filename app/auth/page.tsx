"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  //pt ca sign up sa apara primul setam state fals
  const [isLogin, setIsLogin] = useState(false);

  //obiect care retine valori introduse de utilizator in signup
  const [signupData, setsignupData] = useState({
    nume: "",
    prenume: "",
    email: "",
    parola: "",
  });

 //obiect care retine valori introduse de utilizator in signup
  const [loginData, setloginData] = useState({
    emailLogin: "",
    parolaLogin: "",
  });

  //obiecte pt erori/JWT router
  const [numeError, setNumeError] = useState("");
  const [prenumeError, setPrenumeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [parolaError, setParolaError] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  
  //functie care face legatura dintre frontend->backend
  const handleRegister = async () =>
  {
    //trimitem cerere de tip POST catre API
    const res = await fetch("http://localhost:3001/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
    });

    if (res.ok) 
      setIsLogin(true); 
  }

  //functie care verifica daca avem un cont valid in baza de date
  const handleLogin = async () => {
    setLoginError("");

    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.emailLogin,
        parola: loginData.parolaLogin,
      }),
    });

    const data = await res.json();
    console.log(data);

     if (res.ok && data.success) {
        localStorage.setItem("token", data.token); 
        setLoginError("");
        router.push("/home"); 
      } else {
        setLoginError("Email sau parolă incorecte.");
      }
   
  };

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
            /* ───────── Login ───────── */
            <form
              className="space-y-5"
              noValidate
              
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
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
                  name="emailLogin"
                  placeholder="exemplu@domeniu.com"
                  value={loginData.emailLogin}
                  onChange={(e) =>
                    setloginData((prev) => ({ ...prev, emailLogin: e.target.value }))
                  }
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
                  name="parolaLogin"
                  placeholder="Parola ta"
                  value={loginData.parolaLogin}
                  onChange={(e) =>
                    setloginData((prev) => ({ ...prev, parolaLogin: e.target.value }))
                  }
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {loginError && (
                  <p className="text-red-600 text-sm mt-2">{loginError}</p>
                )}
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
            /* ───────── Sign Up ───────── */
            <form
                className="space-y-5"
                noValidate

                onSubmit={(e) => {
                e.preventDefault();

                //verificare nume
                if (!/^[A-ZĂÂÎ][a-zăâî]+(?:\s[A-ZĂÂÎ][a-zăâî]+)*$/.test(signupData.nume)) {
                  setNumeError("Nume invalid.Trebuie să inceapă cu literă mare/să nu fie din cifre");
                  return;
                } else {
                  setNumeError("");
                }

                //verificare prenume
                if (!/^[A-ZĂÂÎ][a-zăâî]+(?:\s[A-ZĂÂÎ][a-zăâî]+)*$/.test(signupData.prenume)) {
                  setPrenumeError("Prenume invalid.Trebuie să inceapă cu literă mare/să nu fie din cifre");
                  return;
                } else {
                  setPrenumeError("");
                }     
                
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
                  setEmailError("Email invalid. Asigură-te că are un singur @ și un domeniu valid");
                  return;
                } else {
                  setEmailError("");
                }
                  
                const parola = signupData.parola;
                if (
                  parola.length < 8 ||
                  /\s/.test(parola) || 
                  (parola.match(/[^A-Za-z0-9]/g) || []).length < 2 
                ) {
                  setParolaError("Parola trebuie să aibă cel puțin 8 caractere, fără spații și minim 2 caractere speciale");
                  return;
                } else {
                  setParolaError("");
                }

                handleRegister();
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
                  value={signupData.nume}
                  onChange={(e) => {
                    const value = e.target.value;
                    setsignupData((prev) => ({ ...prev, nume: value }));

                    if (/^[A-ZĂÂÎ][a-zăâî]+(?:\s[A-ZĂÂÎ][a-zăâî]+)*$/.test(value)) {
                      setNumeError(""); 
                    }
                  }} 
                  />
                  {numeError && (
                    <p className="mt-1 text-sm text-red-600">{numeError}</p>
                  )}
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
                  value={signupData.prenume}
                  onChange={(e) => {
                    const value = e.target.value;
                    setsignupData((prev) => ({ ...prev, prenume: value }));

                    if (/^[A-ZĂÂÎ][a-zăâî]+(?:\s[A-ZĂÂÎ][a-zăâî]+)*$/.test(value)) {
                      setPrenumeError(""); 
                    }
                  }}  
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  {prenumeError && (
                    <p className="mt-1 text-sm text-red-600">{prenumeError}</p>
                  )}
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
                  value={signupData.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setsignupData((prev) => ({ ...prev, email: value }));

                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      setEmailError("");
                    }
                  }} 
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
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
                  value={signupData.parola}
                  onChange={(e) => {
                    const value = e.target.value;
                    setsignupData((prev) => ({ ...prev, parola: value }));

                    if (
                      value.length >= 8 &&
                      !/\s/.test(value) &&
                      (value.match(/[^A-Za-z0-9]/g) || []).length >= 2
                    ) {
                      setParolaError("");
                    }
                  }}     
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {parolaError && (
                    <p className="mt-1 text-sm text-red-600">{parolaError}</p>
                  )}
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