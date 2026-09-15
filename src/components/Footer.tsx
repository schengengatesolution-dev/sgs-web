import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <Image
            src="/logo.png"
            alt={site.name}
            width={180}
            height={80}
            className="mb-4 h-14 w-auto brightness-0 invert"
          />
          <p className="text-sm font-semibold tracking-wide text-sky">{site.tagline}</p>
          <p className="mt-3 text-sm text-white/70">
            Монголын аялагчдад зориулсан найдвартай аяллын хөтөч — Schengen Gate Solution.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-sky">Холбоос</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white">Нүүр</Link></li>
            <li><Link href="/destinations" className="hover:text-white">Аялал</Link></li>
            <li><Link href="/about" className="hover:text-white">Бидний тухай</Link></li>
            <li><Link href="/contact" className="hover:text-white">Холбогдох</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-sky">Холбоо барих</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-white">Утас: {site.phone}</a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-white break-all">{site.email}</a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook · sgs.aylal
              </a>
            </li>
            <li className="pt-2 text-white/60 leading-relaxed">{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </footer>
  );
}
