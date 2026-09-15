import Image from "next/image";
import Link from "next/link";
import Itinerary from "@/components/Itinerary";
import type { Destination } from "@/lib/site";
import { site } from "@/lib/site";

export default function DestinationDetail({ dest }: { dest: Destination }) {
  return (
    <div>
      <section className="relative min-h-[320px] overflow-hidden bg-navy text-white md:min-h-[420px]">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 pb-10 pt-24 md:px-6 md:pb-14 md:pt-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky">{dest.subtitle}</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{dest.name}</h1>
          <p className="mt-3 max-w-2xl text-white/85">{dest.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {dest.brochure && (
              <a
                href={dest.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Brochure PDF татах
              </a>
            )}
            <a
              href={`${site.whatsappHref}?text=${encodeURIComponent(`Сайн байна уу! ${dest.name} аяллын талаар лавлаж байна.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp лавлагаа
            </a>
            <Link href="/contact" className="btn-secondary">
              Холбоо барих
            </Link>
          </div>
        </div>
      </section>

      {dest.sections && dest.sections.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="section-title">Үзэсгэлэнт газрууд</h2>
          <p className="mt-2 text-slate-600">Багцын гол хэсгүүд · brochure-той нийцсэн</p>
          <div className="mt-8 space-y-10">
            {dest.sections.map((sec) => (
              <div key={sec.title} className="rounded-2xl border border-navy/8 bg-white p-5 shadow-sm md:p-6">
                <div className="mb-4 flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold text-navy">{sec.title}</h3>
                  <span className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
                    {sec.days}
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-600">{sec.blurb}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sec.images.map((img) => (
                    <div key={img} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <Image src={img} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {dest.highlights.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
            <h2 className="section-title">Онцлох цэгүүд</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dest.highlights.map((h) => (
                <div key={h.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  {h.image && (
                    <div className="relative aspect-[16/10]">
                      <Image src={h.image} alt={h.title} fill className="object-cover" sizes="33vw" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-navy">{h.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">Өдөр тутмын хөтөлбөр</h2>
            <p className="mt-2 text-slate-600">
              {dest.days} өдөр{dest.nights ? ` / ${dest.nights} шөнө` : ""} · газар дээрх багц
            </p>
          </div>
          {dest.brochure && (
            <a
              href={dest.brochure}
              className="text-sm font-semibold text-sky hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Бүрэн brochure PDF →
            </a>
          )}
        </div>
        <Itinerary days={dest.daysItinerary} />
      </section>

      <section className="bg-sky">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 text-white md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="text-2xl font-bold">{dest.name} аяллын үнэ · суудал</h2>
            <p className="mt-1 text-white/90">Одоогийн үнэ, огноог зөвлөхтэй холбогдож лавлана уу.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.phoneHref} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy">
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
