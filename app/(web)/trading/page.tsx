'use client';

export default function TradingPage() {
  return (
    <div className="p-6 space-y-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          🎉 Bine ai venit în Ghidul de Tranzacționare!
        </h1>
      </div>

      {/* Conținut */}
      <div className="space-y-10 text-gray-800 text-left leading-relaxed">
        
        {/* Secțiunea 1 */}
        <section className="bg-gray-50 p-5 rounded-md shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">✨ Dacă ai ajuns până aici, felicitări!</h2>
          <p>
            Curiozitatea ta te-a adus în acest punct. Nu am niciun interes să te forțez să înveți mai multe. 
            Dacă acest spațiu ți se pare promițător și interesant, îți voi demonstra mai jos că putem face și bani cu ajutorul lui.
          </p>
        </section>

        {/* Secțiunea 2 */}
        <section className="bg-gray-50 p-5 rounded-md shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">🧠 Cine sunt eu?</h2>
          <p>
            Sunt un curios care a cercetat la fel ca și tine, până am reușit să găsesc o oportunitate foarte bună pentru a mă ajuta pe mine și pe cei apropiați mie. 
            Vreau să o împărtășesc aici.
          </p>
          <p>
            Dacă pot ajuta măcar o persoană, înseamnă că munca mea a dat roade. Aici îți voi prezenta tranzacționarea cripto într-un mod simplificat, în urma căutărilor mele.
          </p>
          <p>
            Dacă acorzi un timp principiilor prezentate, vei vedea singur că funcționează. Poate, în timp, vei putea să creezi propria strategie — chiar mai bună decât ce voi prezenta eu aici.
          </p>
          <p>
            Este un proces pe termen lung dar care îți poate schimba viața cu totul!
          </p>
        </section>

        {/* Secțiunea 3 */}
        <section className="bg-gray-50 p-5 rounded-md shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">🛠️ De ce ai nevoie pentru început?</h2>
          <p>
            Pentru început ai nevoie de TradingView. Cu ajutorul ei vom face analizele graficelor.
          </p>

          <img 
            src="/images/TradingView.png" 
            alt="TradingView pic" 
            className="w-full rounded-lg shadow-md"
          />

          <p>
            O poți instala gratuit de pe 
            <a 
              href="https://www.tradingview.com/" 
              className="text-blue-600 underline ml-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              site-ul oficial TradingView
            </a>.
          </p>

          <p>
            Apoi ai nevoie de o platformă pe care vei putea face tranzacții.
            Binance este în prezent cea mai mare platformă de tranzacționare. Din fericire este disponibilă și la noi în România.
          </p>

          <img 
            src="/images/Binance.png" 
            alt="Binance pic" 
            className="w-full rounded-lg shadow-md"
          />

          <p>
            Îți poți face cont gratuit pe 
            <a 
              href="https://www.binance.com/" 
              className="text-blue-600 underline ml-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              site-ul oficial Binance
            </a>.
          </p>
        </section>

        {/* Secțiunea 4 */}
        <section className="bg-gray-50 p-5 rounded-md shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">⚠️ Înainte să continuăm</h2>
          <p>
            Acest ghid presupune că deja știi să folosești ambele aplicații la cel mai mic nivel.
            Dacă nu, după ce te familiarizezi puțin cu ele, revino înapoi aici. Ghidul meu se axează strict pe a înțelege piața și nu este pentru a te învăța cum să folosești aplicațiile.
          </p>
        </section>

        {/* Secțiunea 5 */}
        <section className="bg-gray-50 p-5 rounded-md shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold">🚀 Să începem!</h2>
          <p>
            Pentru cripto, cel mai important lucru pe care trebuie să îl știi este că Bitcoin dictează toate mișcările pieței.
            Dacă ai o idee cu ce va face el, vei ști ce fac și restul monedelor. Restul monedelor îl urmează pe el, dar mai exagerat.
          </p>
          <p>
            Adică dacă Bitcoin urcă 1%, o altă monedă poate urca 3% sau mai mult. Asta e o sabie cu două tăișuri, pentru că la fel de bine pot să și coboare mai mult.
          </p>
          <p>
            Dar fii fără griji, indiferent dacă piața urcă sau coboară, noi putem profita. Acesta este un aspect important de înțeles. Noi putem face bani indiferent dacă piața urcă sau coboară!
          </p>
        </section>
      </div>
    </div>
  );
}