import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description: "Schengen Gate Solution — Монголын аялагчдад зориулсан найдвартай аяллын хөтөч.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky">Компани</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Бидний тухай</h1>
          <p className="mt-3 max-w-2xl text-white/75">{site.tagline}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:items-center">
        <div>
          <Image
            src="/logo.png"
            alt={site.name}
            width={280}
            height={126}
            className="mb-6 h-20 w-auto"
          />
          <h2 className="text-2xl font-bold text-navy">Schengen Gate Solution</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Бид Монгол Улсад төвтэй аялал жуулчлалын компани бөгөөд гадаад улс орнууд руу
            аялах монгол аялагчдад зориулсан багц аялал, зөвлөгөө, зохион байгуулалтыг
            нэг дороос санал болгодог.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Испани (Газар дундын тэнгис), Вьетнам (хойд–өмнөд), Тайланд (Паттайя–Бангкок)
            зэрэг чиглэлүүдээр brochure-той тодорхой хөтөлбөр бэлтгэж, газар дээрх үйлчилгээ,
            үзвэр, зочид буудлыг нэгтгэн санал болгодог.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Манай зорилго — таны аяллыг найдвартай, ойлгомжтой, дурсамжтай болгох явдал юм.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/destinations" className="btn-primary">
              Аялал харах
            </Link>
            <Link href="/contact" className="btn-outline">
              Холбоо барих
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "/photos/spain/sagrada.jpg",
            "/photos/vietnam/halong.jpg",
            "/photos/thailand/grand_palace.jpg",
            "/photos/spain/formentera.jpg",
          ].map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
              <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="section-title text-center">Яагаад SGS?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Монгол-first үйлчилгээ",
                d: "Монгол хэлээр зөвлөгөө, brochure, холбоо барих — ойлгомжтой урсгал.",
              },
              {
                t: "Тодорхой хөтөлбөр",
                d: "Өдөр тутмын itinerary, үзвэр, PDF brochure-той багцууд.",
              },
              {
                t: "Шууд холбоо",
                d: "Утас, WhatsApp, Facebook, имэйл — аяллын зөвлөхтэй шууд ярина.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-navy/8 bg-white p-6 shadow-sm">
                <div className="mb-3 h-1 w-10 rounded-full bg-sky" />
                <h3 className="font-bold text-navy">{x.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
