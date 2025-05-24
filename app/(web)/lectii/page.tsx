export default function LectiiPage() {
  return (    
    <div className="p-6 space-y-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">

      {/* CAPITOLUL 1 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 1: Ce este Cripto, de fapt?</h2>

        <p>
          Poate ai auzit deja de „Bitcoin” sau „monede digitale”, dar te-ai întrebat vreodată ce înseamnă de fapt cripto? Nu e vorba doar de bani virtuali sau investiții. Cripto înseamnă o nouă modalitate de a interacționa cu tehnologia și cu lumea financiară – complet diferită de sistemele clasice.
        </p>
        <p>
          <strong>Criptomonedele</strong> sunt forme digitale de bani care nu sunt emise sau controlate de o bancă centrală. Ele sunt <strong>decentralizate</strong> și funcționează pe o rețea numită <strong>blockchain</strong>. Asta înseamnă că nu există un server central sau o companie care să decidă cine ce deține. Totul este gestionat de cod și reguli transparente, verificate de comunitate.
        </p>
        <p>
          Gândește-te la cripto ca la un fel de „internet al banilor”. Poți trimite fonduri oricui, oricând, oriunde în lume – <em>fără bănci, fără PayPal, fără comisioane mari sau întârzieri</em>.
        </p>
        <p>
          Primul exemplu de criptomonedă a fost <strong>Bitcoin</strong>, creat în 2009 de un individ (sau grup anonim) sub pseudonimul <em>Satoshi Nakamoto</em>. Scopul său? Să ofere o alternativă la sistemele bancare tradiționale – un sistem în care utilizatorii controlează totul.
        </p>
        <p>
          De atunci, au apărut mii de alte criptomonede – fiecare cu scopuri diferite. Unele, precum <strong>Ethereum</strong>, nu sunt doar pentru plăți, ci oferă posibilitatea de a crea aplicații descentralizate, jocuri, piețe digitale, sisteme de vot și multe altele.
        </p>

        <p>
          Ce face cripto-ul atât de special?
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>✅ Nu ai nevoie de bancă – doar de internet și un wallet</li>
          <li>✅ Oricine poate participa – indiferent de țară sau statut</li>
          <li>✅ Totul este transparent – poți verifica tranzacțiile pe blockchain</li>
          <li>✅ Nu se pot „tipări” monede noi oricând – multe criptomonede au ofertă limitată</li>
        </ul>

        <p>
          În esență, cripto oferă <strong>libertate financiară</strong>. Nu e doar o tehnologie – e o mișcare. O idee că oamenii pot deține controlul asupra propriilor bani și date, fără să depindă de instituții centralizate.
        </p>

        <p className="italic text-gray-700">
          Dacă în trecut aveai nevoie de o bancă pentru orice plată sau transfer, azi poți face asta de pe telefonul tău în câteva secunde, fără ajutorul nimănui.
        </p>

        <p className="font-semibold">
          În următorul capitol vei înțelege cum funcționează „motorul” din spatele cripto: tehnologia blockchain.
        </p>
      </div>

      {/* CAPITOLUL 2 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 2: Cum funcționează Blockchain-ul?</h2>

        <p>
          Ca să înțelegi cum funcționează criptomonedele, trebuie să înțelegi tehnologia care le susține: <strong>blockchain-ul</strong>. Poate sună complicat, dar hai să o descompunem în pași simpli.
        </p>
        <p>
          Imaginează-ți un <strong>jurnal digital</strong>, în care sunt înregistrate toate tranzacțiile. Fiecare pagină din acest jurnal este un <strong>bloc</strong>. Când se umple o pagină, se trece la următoarea. Asta e ideea de bază din spatele blockchain-ului: o serie de blocuri, legate între ele, care stochează informații în mod sigur și transparent.
        </p>
        <p>
          Dar cum sunt „legate” aceste blocuri? Printr-un cod unic numit <strong>hash</strong>. Fiecare bloc conține:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>🔐 O listă cu tranzacțiile făcute</li>
          <li>🧩 Hash-ul blocului anterior (adică un fel de semnătură digitală)</li>
          <li>📝 Un timestamp (data și ora)</li>
        </ul>

        <p>
          Asta face blockchain-ul <strong>sigur</strong>. Dacă cineva încearcă să modifice o tranzacție dintr-un bloc mai vechi, atunci hash-ul acelui bloc se schimbă, ceea ce rupe „lanțul”. Iar rețeaua observă asta imediat și respinge modificarea.
        </p>
        <p>
          Toate blocurile sunt păstrate nu într-un singur loc, ci <strong>în mii de calculatoare din întreaga lume</strong>, numite <em>noduri</em>. Fiecare nod are o copie completă a blockchain-ului. Asta înseamnă că sistemul e <strong>decentralizat</strong> – nu depinde de un server central, și nici nu poate fi „închis” ușor.
        </p>
        <p>
          Atunci când o tranzacție e făcută (ex: tu trimiți 0.01 BTC unui prieten), ea este transmisă în rețea, verificată de noduri, validată și apoi adăugată într-un bloc nou. Odată ce blocul e plin, se adaugă la lanț și informația devine publică și permanentă.
        </p>

        <div>
          <p>Recapitulare rapidă:</p>
          <ul className="list-disc list-inside ml-4">
            <li>📄 Fiecare bloc = pagină cu tranzacții</li>
            <li>🔗 Blocurile sunt conectate prin hash-uri</li>
            <li>🧠 Rețeaua întreagă validează tranzacțiile</li>
            <li>🛡️ Orice modificare este detectată și respinsă</li>
          </ul>
        </div>

        <p className="italic text-gray-700">
          Blockchain-ul oferă un nivel de securitate și transparență nemaivăzut până acum. Nu mai ai nevoie să „ai încredere” într-o bancă. Ai încredere în cod și în matematică.
        </p>

        <p className="font-semibold">
          În următorul capitol vom vedea cum poți păstra aceste monede în siguranță: în portofelele cripto (wallet-uri).
        </p>
      </div>


      {/* CAPITOLUL 3 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 3: Ce este un Wallet (Portofel Cripto)?</h2>

        <p>
          Acum că știi ce sunt criptomonedele și cum funcționează blockchain-ul, probabil te întrebi: <strong>unde le ții?</strong> Cum îți păstrezi Bitcoin-ul sau Ethereum-ul în siguranță?
        </p>
        <p>
          Aici intră în scenă <strong>wallet-urile cripto</strong>, adică portofelele digitale. Ele nu stochează efectiv monedele tale, ci cheia care îți oferă acces la ele pe blockchain. Este ca și cum ai avea cheia unui seif, iar seiful e public (blockchain-ul), dar doar tu poți să-l deschizi.
        </p>
        <p>
          Fiecare wallet are două elemente esențiale:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li><strong>Cheia publică</strong> – adresa ta de wallet, pe care o poți trimite altora (ex: „contul” tău)</li>
          <li><strong>Cheia privată</strong> – parola secretă care îți oferă controlul asupra fondurilor</li>
        </ul>

        <p>
          Dacă pierzi cheia privată, pierzi accesul la fondurile tale. Nu există buton de „reset password”. Este 100% responsabilitatea ta.
        </p>
        <p>
          Wallet-urile pot fi de două feluri:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li><strong>Hot Wallet</strong>: conectate la internet. Ușor de folosit, perfecte pentru tranzacții rapide (ex: MetaMask, Trust Wallet)</li>
          <li><strong>Cold Wallet</strong>: offline, mult mai sigure pentru sume mari (ex: Ledger, Trezor, hârtie cu seed phrase scris)</li>
        </ul>

        <p>
          Un hot wallet e ca un portofel de zi cu zi – îl folosești ușor, dar dacă îl pierzi sau îți este furat, ai probleme.  
          Un cold wallet e ca un seif – greu de accesat, dar foarte sigur.
        </p>
        <p>
          La configurarea unui wallet, vei primi un „seed phrase” (12-24 de cuvinte). E vital să-l scrii pe hârtie și să nu-l salvezi digital – dacă cineva îl află, îți poate goli wallet-ul.
        </p>

        <div>
          <p>Recomandări pentru începători:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Folosește un hot wallet simplu, precum Trust Wallet</li>
            <li>Notează-ți seed phrase-ul pe hârtie și nu îl arăta nimănui</li>
            <li>Nu trimite cripto către adrese pe care nu le cunoști 100%</li>
          </ul>
        </div>

        <p className="italic text-gray-700">
          În lumea cripto, tu ești banca. Cu puterea vine responsabilitatea. Ai grijă de cheile tale!
        </p>

        <p className="font-semibold">
          Acum că știi cum se păstrează cripto-ul, hai să vedem de unde îl cumperi: în capitolul următor vorbim despre exchange-uri.
        </p>
      </div>

      {/* CAPITOLUL 4 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 4: Ce este un Exchange și cum funcționează?</h2>

        <p>
          Ai un portofel cripto și știi cum funcționează blockchain-ul, dar... <strong>de unde cumperi criptomonede?</strong> Cum transformi lei sau euro în Bitcoin sau Ethereum?
        </p>
        <p>
          Aici intră în joc <strong>exchange-urile</strong> – platforme prin care poți <strong>cumpăra, vinde sau schimba</strong> criptomonede. Sunt ca niște burse de valori, dar pentru monede digitale.
        </p>
        <p>
          Există două tipuri principale de exchange:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li><strong>CEX</strong> – Exchange Centralizat (ex: Binance, Coinbase, Kraken)</li>
          <li><strong>DEX</strong> – Exchange Descentralizat (ex: Uniswap, PancakeSwap, dYdX)</li>
        </ul>

        <p>
          <strong>Exchange-urile centralizate (CEX)</strong> sunt operate de companii și funcționează ca niște platforme clasice: îți faci cont, treci prin procesul de verificare (KYC – Know Your Customer), depui bani și cumperi cripto. Sunt mai ușor de folosit, dar compania respectivă deține temporar monedele tale până le retragi într-un wallet personal.
        </p>
        <p>
          <strong>Exchange-urile descentralizate (DEX)</strong>, pe de altă parte, nu cer cont, nu colectează date personale și nu păstrează fonduri pentru tine. Te conectezi cu wallet-ul tău (ex: MetaMask) și tranzacționezi direct de pe blockchain. Totul e controlat de smart contracts.
        </p>
        <p>
          DEX-urile oferă mai multă libertate și confidențialitate, dar pot fi puțin mai greu de înțeles la început și implică taxe de rețea (ex: gas fee pe Ethereum).
        </p>

        <div>
          <p>Pași simpli pentru a cumpăra cripto pe un CEX:</p>
          <ul className="list-decimal list-inside ml-4">
            <li>Îți creezi cont și îți verifici identitatea</li>
            <li>Depui bani (lei, euro, dolari) prin card sau transfer bancar</li>
            <li>Alegi ce monedă vrei să cumperi (ex: BTC, ETH)</li>
            <li>Cumperi și poți retrage monedele în wallet-ul tău</li>
          </ul>
        </div>

        <div>
          <p>Câteva diferențe importante:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>CEX:</strong> ușor de folosit, dar controlul e la companie</li>
            <li><strong>DEX:</strong> control total, dar trebuie să știi ce faci</li>
            <li>La CEX ai suport tehnic, la DEX ești pe cont propriu</li>
          </ul>
        </div>

        <p className="italic text-gray-700">
          Dacă ești începător, începe cu un exchange centralizat ca Binance sau Crypto.com. Când devii mai sigur pe tine, poți experimenta și cu DEX-uri.
        </p>

        <p className="font-semibold">
          În capitolul următor vorbim despre <strong>smart contracts</strong> – coduri care rulează singure și stau la baza aplicațiilor descentralizate.
        </p>
      </div>


      {/* CAPITOLUL 5 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 5: Ce este un Smart Contract?</h2>

        <p>
          Ai auzit de termenul <strong>smart contract</strong>, dar poate nu e clar ce înseamnă. Nu e un contract în format PDF, nu e un document legal și nu trebuie semnat de un avocat.
        </p>
        <p>
          Un <strong>smart contract</strong> este pur și simplu un <strong>program informatic care rulează automat pe blockchain</strong>. El conține reguli (condiții) care, odată îndeplinite, execută acțiuni automat – fără oameni, fără intermediari, fără greșeli.
        </p>
        <p>
          Imaginează-ți un automat de cafea: bagi o monedă, alegi cafeaua, primești produsul. Fără ca cineva să intervină. Așa funcționează și un smart contract.
        </p>

        <p>
          Un exemplu real:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>Dacă Alice trimite 1 ETH către un smart contract,</li>
          <li>Atunci Bob primește automat un NFT (bilet de concert, de exemplu)</li>
        </ul>

        <p>
          Codul acelui contract e public, vizibil pe blockchain și nu poate fi modificat după ce e lansat. Asta aduce un grad enorm de <strong>transparență și încredere</strong> – totul e verificabil.
        </p>
        <p>
          Smart contractele stau la baza a tot ce înseamnă aplicații descentralizate (<strong>dApps</strong>), platforme DeFi (decentralized finance), NFT-uri, jocuri pe blockchain, și chiar sisteme de vot online.
        </p>

        <div>
          <p>Avantajele smart contractelor:</p>
          <ul className="list-disc list-inside ml-4">
            <li>🔁 Automatizare – codul face treaba, nu oamenii</li>
            <li>🔒 Siguranță – nu pot fi modificate după lansare</li>
            <li>🌍 Accesibilitate – oricine poate interacționa cu ele</li>
            <li>📖 Transparență – codul e public și vizibil oricui</li>
          </ul>
        </div>

        <p>
          Platforma principală pentru smart contracts este <strong>Ethereum</strong>, dar există și altele: Solana, Avalanche, Polygon, Cardano etc.
        </p>
        <p className="italic text-gray-700">
          Viitorul internetului va fi construit pe astfel de contracte inteligente – unde totul e automat, descentralizat și sigur.
        </p>
        <p className="font-semibold">
          În ultimul capitol, discutăm despre <strong>cum te protejezi</strong> în lumea cripto. Libertate fără securitate = dezastru.
        </p>
      </div>

      {/* CAPITOLUL 6 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Capitolul 6: Securitate în Cripto – Cum te protejezi?</h2>

        <p>
          Criptomonedele îți oferă <strong>libertate totală</strong>. Poți trimite bani fără bănci, poți deține active fără permisiune, poți interacționa cu aplicații descentralizate. Dar cu această libertate vine și o mare responsabilitate: <strong>securitatea</strong> este 100% în mâinile tale.
        </p>
        <p>
          În sistemul bancar clasic, dacă uiți parola sau ți se fură cardul, suni la bancă și îți recuperezi fondurile. În cripto, <strong>nu există buton de resetare</strong>. Nu există suport tehnic care să-ți trimită banii înapoi.
        </p>

        <div>
          <p>Cele mai frecvente pericole în cripto:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Phishing</strong>: site-uri false care îți cer seed-ul sau parola</li>
            <li><strong>Scam-uri</strong>: proiecte fake care promit profituri garantate</li>
            <li><strong>Key leaks</strong>: îți salvezi cheia privată pe PC sau în cloud și e furată</li>
            <li><strong>Greșeli umane</strong>: trimiți fonduri la o adresă greșită – ireversibil</li>
          </ul>
        </div>

        <p>
          Cel mai important lucru de reținut: <strong>cine are cheia privată sau seed phrase-ul, deține tot</strong>. Dacă le pierzi sau le oferi altcuiva (chiar și din greșeală), ai pierdut controlul pe viață.
        </p>

        <div>
          <p>Reguli de bază pentru a fi în siguranță:</p>
          <ul className="list-disc list-inside ml-4">
            <li>💾 Scrie-ți seed phrase-ul pe hârtie, nu îl salva digital</li>
            <li>🔐 Activează 2FA (autentificare în doi pași) la exchange-uri</li>
            <li>🚫 Nu da click pe linkuri dubioase din e-mailuri sau Telegram</li>
            <li>🔍 Verifică mereu adresa site-ului sau contractului</li>
            <li>🧊 Folosește un cold wallet dacă ai sume mari</li>
          </ul>
        </div>

        <p>
          Dacă folosești un hot wallet ca Trust Wallet sau MetaMask, ai grijă să-l protejezi cu parolă și să nu conectezi wallet-ul la orice aplicație necunoscută. Mulți hackeri fac site-uri care arată identic cu cele reale doar ca să îți „drain-uie” fondurile.
        </p>
        <p className="italic text-gray-700">
          Cripto e ca un cuțit – poate fi o unealtă excelentă, dar dacă nu știi să-l folosești, te poți tăia singur. Educația și vigilența te țin în siguranță.
        </p>
        <p className="font-semibold">
          Ai ajuns la finalul lecțiilor! Dacă ai parcurs tot conținutul până aici, e momentul perfect să-ți testezi cunoștințele cu un quiz rapid. La finalul lui ai parte de un bonus! 🔎
        </p>
      </div>

    </div>
  );
}