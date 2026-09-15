import type { DayItem } from "@/lib/site";

export default function Itinerary({ days }: { days: DayItem[] }) {
  return (
    <ol className="space-y-3">
      {days.map((d) => (
        <li
          key={d.day}
          className="flex gap-4 rounded-2xl border border-navy/8 bg-white p-4 shadow-sm md:p-5"
        >
          <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
            <span className="text-[10px] uppercase opacity-80">өдөр</span>
            <span className="text-lg font-bold leading-none">{d.day}</span>
          </div>
          <div>
            <h4 className="font-bold text-navy">{d.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{d.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
