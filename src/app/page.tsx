import Image from "next/image";
import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import { destinations, site } from "@/lib/site";

const featured = destinations.filter((d) => d.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/spain/barcelona_hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 md:px-6 md:py-28 lg:py-32">
          <Image
            src="/logo.png"
            alt={site.name}
            width={220}
            height={100}
            className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:h-20"
            priority
          />
          <p className="text-sm font-bold tracking-[0.2em] text-sky">{site.tagline}</p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            Дараагийн аяллаа эндээс эхлүүлээрэй
          </h1>
          <p className="max-w-xl text-base text-white/85 md:text-lg">
            Испани, Вьетнам, Тайланд болон бусад чиглэлийн бэлэн багцууд —
            зөвлөхтэй холбогдож огноо, суудал, үнээ тодруулаарай.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="btn-primary">
              Холбогдох
            </Link>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
            <Link href="/destinations" className="btn-secondary">
              Аялал харах
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-navy/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Найдвартай төлөвлөлт",
              text: "Газар дээрх багц, зочид буудал, үзвэрүүдийг нэг дороос зохион байгуулна.",
            },
            {
              title: "Сонгомол чиглэлүүд",
              text: "Испани 12 өдөр, Вьетнам 7 өдөр, Тайланд 7 өдөр — brochure-той дэлгэрэнгүй.",
            },
            {
              title: "Зөвлөх үйлчилгээ",
              text: "Утас, WhatsApp, имэйлээр шууд холбогдож асуултаа тодруулаарай.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy/8 bg-slate-50 p-6">
              <div className="mb-3 h-1 w-10 rounded-full bg-sky" />
              <h3 className="font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured destinations */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky">Чиглэлүүд</p>
            <h2 className="section-title mt-1">Онцлох аялалууд</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Brochure-той багцуудаас сонгоод дэлгэрэнгүй хөтөлбөрөө үзээрэй.
            </p>
          </div>
          <Link href="/destinations" className="btn-outline !py-2 !text-xs">
            Бүх аялал
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => (
            <DestinationCard key={d.slug} dest={d} />
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Төлөвлө. Сонго. Аяла.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
            Гурван алхамаар дараагийн аяллаа эхлүүлнэ.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Чиглэлээ сонго", d: "Испани, Вьетнам, Тайланд — brochure PDF татаж үзнэ." },
              { n: "2", t: "Хөтөлбөрөө харьцуул", d: "Өдөр тутмын itinerary, үзвэрүүдийг шалгана." },
              { n: "3", t: "Зөвлөхтэй холбогд", d: "WhatsApp / утас / имэйлээр суудал, үнэ тодруулна." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky text-lg font-bold">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sky">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 text-white md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Дараагийн аяллаа сонгоход бэлэн үү?</h2>
            <p className="mt-2 text-white/90">
              Аяллын зөвлөхтэй холбогдож огноо, хүний тоо, багцаа тохируулаарай.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/destinations"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow hover:bg-slate-50"
            >
              Аялал харах
            </Link>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp чат
            </a>
          </div>
        </div>
      </section>

      {/* Facebook */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky">Мэдээ · Facebook</p>
          <h2 className="mt-2 text-2xl font-bold text-navy">Шинэ аяллууд, хямдралын мэдээ</h2>
          <p className="mx-auto mt-2 max-w-lg text-slate-600">
            Манай Facebook хуудсыг дагаж цаг тухайд нь мэдээлэл авч байгаарай.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6"
          >
            Facebook · sgs.aylal
          </a>
        </div>
      </section>
    </>
  );
}
