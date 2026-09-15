"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Нүүр" },
  { href: "/destinations", label: "Аялал" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Schengen Gate Solution"
            width={168}
            height={76}
            className="h-12 w-auto md:h-14"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold text-navy">{site.name}</span>
            <span className="text-[10px] font-semibold tracking-wider text-sky">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-navy text-white"
                    : "text-navy/80 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn-primary !py-2 !text-xs"
          >
            Зөвлөхтэй холбогдох
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/20 text-navy lg:hidden"
          aria-label="Цэс"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-navy hover:bg-navy/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Зөвлөхтэй холбогдох
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
