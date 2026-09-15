import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationDetail from "@/components/DestinationDetail";
import { getDestination } from "@/lib/site";

export const metadata: Metadata = {
  title: "Вьетнам 7 өдөр",
  description: "Schengen Gate Solution — Вьетнам 7 өдөр аяллын багц, хөтөлбөр, brochure.",
};

export default function Page() {
  const dest = getDestination("vietnam");
  if (!dest) notFound();
  return <DestinationDetail dest={dest} />;
}
