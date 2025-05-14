import "../globals.css";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
          <body className="flex">
              
        {/* am adaugat un sidebar pt paginile de pe site */}
        <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-blue-900 text-white p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-4 text-white transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">CryptoHub</h1>
          <nav className="flex flex-col gap-4">
            <a href="/home" className="hover:text-blue-400">🏠 Pagina principală</a>
            <a href="/lectii" className="hover:text-blue-400">📘 Lecții</a>
            <a href="/quiz" className="hover:text-blue-400">❓ Quiz-uri</a>
          </nav>
          <div className="mt-auto flex justify-center">
            <img
              src="/images/Logo.png"
              alt="CryptoHub Logo"
              className="w-14 h-14 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
          </div>
        </div>
        
        <main
          className="flex-1 p-6 pl-64"
          style={{
            backgroundImage: 'url("/images/websitebackground.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {children}
        </main>

      </body>
    </html>
  );
}