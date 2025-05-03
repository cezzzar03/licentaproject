export default function Home() { 
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/CryptoBackground.jpg')" }} 
    >
      {/* mai sus am adaugat un div cu imag de fundal si care are alte componente */}
      <div className="w-full max-w-3xl bg-white rounded-xl p-0 shadow-lg flex overflow-hidden h-[500px]">
          
          <div className="w-1/2 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 min-h-[400px] flex flex-col">
                <h2 className="text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] mb-20">CryptoHub</h2>
                <p className="text-base text-gray-200 leading-relaxed">
                   CryptoHub este locul ideal pentru a învăța, experimenta și înțelege ecosistemul criptomonedelor. 
                </p>
                <div className="mt-auto flex justify-center">
                  <img src="/images/logo.png" alt="CH Logo" className="w-16 h-16" />
                </div>
          </div>

          
          <div className="w-1/2 p-8 min-h-[400px]">
            
          </div>
      </div>
      {/* aici avem un div care are 2 divuri inauntru,unul pt text si celalalt pt formular */}

      </div>
  );
}