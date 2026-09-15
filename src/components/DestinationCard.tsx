import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/site";

export default function DestinationCard({ dest }: { dest: Destination }) {
  const inner = (
    <article className="card group h-full">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy/10">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className={`object-cover transition duration-500 group-hover:scale-105 ${
            dest.comingSoon ? "opacity-70 grayscale-[30%]" : ""
          }`}
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        {dest.comingSoon ? (
          <span className="absolute left-3 top-3 rounded-full bg-sky px-3 py-1 text-xs font-bold text-white">
            Удахгүй
          </span>
        ) : (
          <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold text-white">
            {dest.days} өдөр
          </span>
        )}
        <h3 className="absolute bottom-3 left-3 right-3 text-xl font-bold text-white drop-shadow">
          {dest.name}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-slate-600 line-clamp-3">{dest.summary}</p>
        {!dest.comingSoon && (
          <span className="mt-4 inline-flex text-sm font-semibold text-sky group-hover:underline">
            Дэлгэрэнгүй →
          </span>
        )}
      </div>
    </article>
  );

  if (dest.comingSoon) {
    return <div className="cursor-default">{inner}</div>;
  }
  return <Link href={dest.href}>{inner}</Link>;
}
