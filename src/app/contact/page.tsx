import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "Schengen Gate Solution — утас, WhatsApp, имэйл, хаяг.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky">Холбоо</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Холбоо барих</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Аяллын зөвлөхтэй холбогдож чиглэл, огноо, үнээ тодруулаарай.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy">Шууд холбоо</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-navy">Утас: </span>
                <a href={site.phoneHref} className="text-sky hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-navy">WhatsApp: </span>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:underline"
                >
                  {site.whatsapp}
                </a>
              </li>
              <li>
                <span className="font-semibold text-navy">Имэйл: </span>
                <a href={site.emailHref} className="text-sky hover:underline break-all">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-navy">Facebook: </span>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:underline"
                >
                  facebook.com/sgs.aylal
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy">Хаяг</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{site.address}</p>
          </div>
          <div className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-sm font-semibold text-sky">{site.tagline}</p>
            <p className="mt-2 text-sm text-white/80">
              Ажлын цагаар утас/WhatsApp-аар хариу өгнө. Лавлагаа үлдээгээд бид тантай холбогдоно.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
