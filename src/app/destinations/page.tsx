import type { Metadata } from "next";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Аялал · Чиглэлүүд",
  description: "Испани, Вьетнам, Тайланд болон удахгүй нээгдэх чиглэлүүд — SGS аяллын багц.",
};

export default function DestinationsPage() {
  const active = destinations.filter((d) => !d.comingSoon);
  const soon = destinations.filter((d) => d.comingSoon);

  return (
    <div>
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky">Аялал</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Чиглэлүүд</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Brochure-той багц аяллуудаас сонгоод өдөр тутмын хөтөлбөр, PDF татаж аваарай.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((d) => (
            <DestinationCard key={d.slug} dest={d} />
          ))}
          {soon.map((d) => (
            <DestinationCard key={d.slug} dest={d} />
          ))}
        </div>
      </section>
    </div>
  );
}
