import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationDetail from "@/components/DestinationDetail";
import { getDestination } from "@/lib/site";

export const metadata: Metadata = {
  title: "Тайланд 7 өдөр",
  description: "Schengen Gate Solution — Тайланд 7 өдөр аяллын багц, хөтөлбөр, brochure.",
};

export default function Page() {
  const dest = getDestination("thailand");
  if (!dest) notFound();
  return <DestinationDetail dest={dest} />;
}
