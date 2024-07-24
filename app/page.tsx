import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Starzbet Güncel Giriş</h1>
     <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/logo.png"
            alt="starzbet logo"
            width={540}
            height={111}
            priority
          />
        </a>
      </div>
      
      <div className="text-center">
        <p>
          Starzbet, geniş bahis seçenekleri sunan yenilikçi bir bahis platformudur. Kullanıcılarına spor bahislerinden canlı casino oyunlarına kadar birçok kategori sunarak, eğlenceli ve kazançlı bir deneyim sağlar. Starzbet, güvenli ödeme yöntemleri ve kullanıcı dostu arayüzü ile öne çıkar.
        </p>
        <p>
          Starzbet, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar. Starzbet, spor bahisleri ve casino oyunlarında eşsiz bir deneyim sunar.
        </p>
        <p>
          Starzbet, müşterilerine güvenilir ve kaliteli hizmet sunmayı hedefleyen bir bahis sitesidir. Özellikle yeni üyelere sunduğu hoş geldin bonusları ve düzenli promosyonlar ile kullanıcılarını memnun eder. Starzbet'in müşteri hizmetleri, kullanıcıların her türlü sorusuna hızlı ve etkili çözümler sunar.
        </p>
        <p>
          Starzbet, kullanıcılarına mobil uyumlu bir platform sunarak, bahis ve oyun keyfini her an her yerde yaşama imkanı verir. Mobil cihazlardan kolayca erişilebilen site, kullanıcı dostu tasarımı ve hızlı yükleme süreleri ile öne çıkar. Starzbet, kesintisiz ve güvenli bir bahis deneyimi sunar.
        </p>
        <p>
          Starzbet, kullanıcı güvenliğini ve veri korumasını ön planda tutan bir bahis sitesidir. Site, modern şifreleme teknolojileri ile kullanıcı bilgilerini korur ve güvenli bir oyun ortamı sağlar. Starzbet, sorumlu oyun ilkelerine bağlı kalarak, kullanıcılarına adil ve şeffaf bir oyun deneyimi sunar.
        </p>
      </div>

    </main>
  );
}
