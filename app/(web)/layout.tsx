import "../globals.css";

export const metadata = {
  title: "CryptoHub",
  description: "Platformă educațională crypto",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
          <body className="flex">
              
        {/* am adaugat un sidebar pt paginile de pe site */}
        <div className="h-screen w-64 bg-gray-900 text-white p-6 flex flex-col gap-6">
          <h1 className="text-2xl font-bold mb-4">CryptoHub</h1>
          <nav className="flex flex-col gap-4">
            <a href="/home" className="hover:text-blue-400">🏠 Dashboard</a>
            <a href="/lectii" className="hover:text-blue-400">📘 Lecții</a>
            <a href="/quiz" className="hover:text-blue-400">❓ Quiz-uri</a>
            <a href="/conversie" className="hover:text-blue-400">💱 Conversie</a>
            <a href="/portofoliu" className="hover:text-blue-400">📊 Portofoliu</a>
            <a href="/profil" className="hover:text-blue-400 mt-auto">🙋‍♂️ Profil</a>
          </nav>
        </div>

        
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}