import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Constellation } from "@/components/constellation";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/")({ component: Home });

const EMAIL = "hello@algoristic.my.id";
const WHATSAPP_PHONE = "6282387083188";
const WHATSAPP_TEXT = "Halo Algoristic, saya ingin berbicara lebih lanjut.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const PILLARS = [
  {
    index: "01",
    title: "Membangun",
    body: "AI tidak dimulai dari model. Ia dimulai dari pertanyaan yang belum dirumuskan dengan tepat.",
  },
  {
    index: "02",
    title: "Menghubungkan",
    body: "Ide yang terpisah jarang menjadi solusi. Kami merakitnya sampai pola itu kelihatan.",
  },
  {
    index: "03",
    title: "Mengomunikasikan",
    body: "Teknologi yang tidak bisa dijelaskan tidak akan dipakai. Kami membuatnya bisa diikuti.",
  },
] as const;

function Home() {
  return (
    <div className="bg-bg text-fg min-h-dvh">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#atas" className="text-fg hover:text-fg/90 transition-colors duration-150">
            <Logo />
          </a>
          <nav className="flex items-center gap-3 sm:gap-6 text-sm text-muted">
            <a href="#arah" className="hover:text-fg transition-colors duration-150">
              Arah
            </a>
            <a href="#dalam" className="hover:text-fg transition-colors duration-150">
              Lebih dalam
            </a>
            <a href="#hubungi" className="hover:text-fg transition-colors duration-150">
              Hubungi
            </a>
          </nav>
        </div>
      </header>

      <main id="atas">
        <section className="relative min-h-dvh overflow-hidden pt-14">
          <div className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[58%] opacity-70 md:block">
            <Constellation />
          </div>
          <div className="relative mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
            <p className="text-muted mb-8 text-[11px] tracking-[0.28em] uppercase">
              algoristic.my.id
            </p>
            <h1 className="font-serif max-w-3xl text-[2.65rem] leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Ide tidak hidup sendiri.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Kami membangun dan memanfaatkan AI dengan menghubungkan berbagai gagasan —
              lalu mengomunikasikan solusinya, tanpa membuatnya terdengar lebih rumit.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#arah">
                  Telusuri arah kerja
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#hubungi">Bicara dengan kami</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="arah" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 lg:grid-cols-3">
            {PILLARS.map((item, i) => (
              <article
                key={item.index}
                className={`border-border py-14 lg:py-20 ${
                  i < PILLARS.length - 1 ? "lg:border-r lg:pr-10" : "lg:pl-10"
                } ${i === 1 ? "lg:px-10" : ""} ${i > 0 ? "border-t lg:border-t-0" : ""}`}
              >
                <p className="font-mono text-[11px] tracking-[0.2em] text-subtle">{item.index}</p>
                <h2 className="font-serif mt-6 text-3xl tracking-[-0.02em] sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="dalam" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-muted uppercase">Yang belum kami sebut</p>
              <h2 className="font-serif mt-5 max-w-xl text-4xl leading-[1.1] tracking-[-0.03em] sm:text-5xl">
                Produk kami tidak dimulai dari daftar fitur.
              </h2>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-muted">
                Setiap karya Algoristic adalah jembatan: antara ide yang masih mentah, kecerdasan
                yang bisa dijalankan, dan bahasa yang bisa dipahami orang di luar ruangan.
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
                Itu sebabnya halaman ini tidak menumpuk janji. Yang kami tunjukkan dulu adalah
                cara berpikirnya — sisanya dibuka ketika percakapan sudah tepat.
              </p>
            </div>
            <aside className="flex flex-col justify-between border border-border bg-surface p-7 sm:p-9 rounded-xl">
              <p className="font-serif text-2xl leading-snug italic text-fg">
                "AI tanpa jembatan hanya menjadi kebisingan."
              </p>
              <div className="mt-12 space-y-4 text-sm text-muted">
                <p className="border-t border-border pt-4">
                  Studio untuk merakit ide menjadi sistem.
                </p>
                <p className="border-t border-border pt-4">
                  Bahasa untuk membawa sistem itu ke orang yang memakainya.
                </p>
                <p className="border-t border-border pt-4">
                  Ruang untuk yang ingin melihat lebih dekat — bukan sekadar menggulir.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="hubungi" className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.28em] text-muted uppercase">Langkah berikutnya</p>
              <h2 className="font-serif mt-5 text-4xl tracking-[-0.03em] sm:text-5xl">
                Kalau ini terasa dekat, buka percakapan.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">
                Ceritakan ide yang sedang Anda pegang. Kami akan menjawab dengan kejelasan —
                bukan dengan presentasi yang lebih panjang.
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-col items-stretch gap-3">
              <Button asChild size="lg">
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  WhatsApp
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${EMAIL}`}>
                  {EMAIL}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <p className="text-sm text-subtle">WhatsApp lebih cepat. Surat juga diterima.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Logo className="text-fg" />
          <span>algoristic.my.id</span>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors duration-150"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 0 0-6.993 6.99c0 1.231.254 2.437.736 3.577l-1.156 3.577 3.652-1.16c1.119.597 2.372.922 3.761.922h.003a6.97 6.97 0 0 0 6.992-6.99 6.947 6.947 0 0 0-2.052-4.94 6.947 6.947 0 0 0-4.94-2.036M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Z" />
    </svg>
  );
}
