import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationDetail from "@/components/DestinationDetail";
import { getDestination } from "@/lib/site";

export const metadata: Metadata = {
  title: "Испани 12 өдөр",
  description: "Schengen Gate Solution — Испани 12 өдөр аяллын багц, хөтөлбөр, brochure.",
};

export default function Page() {
  const dest = getDestination("spain");
  if (!dest) notFound();
  return <DestinationDetail dest={dest} />;
}
