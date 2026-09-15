"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Испани");
  const [message, setMessage] = useState("");

  function buildBody() {
    return [
      `Сайн байна уу, SGS!`,
      ``,
      `Нэр: ${name || "—"}`,
      `Утас: ${phone || "—"}`,
      `Аялал: ${destination}`,
      `Зурвас: ${message || "—"}`,
    ].join("\n");
  }

  function onMailto(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`SGS аяллын лавлагаа — ${destination}`);
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  function onWhatsApp() {
    const text = encodeURIComponent(buildBody());
    window.open(`${site.whatsappHref}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onMailto} className="space-y-4 rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <h2 className="text-xl font-bold text-navy">Лавлагаа илгээх</h2>
      <p className="text-sm text-slate-600">
        Маягтыг бөглөж имэйл эсвэл WhatsApp-аар шууд холбогдоорой.
      </p>

      <div>
        <label className="mb-1 block text-sm font-medium text-navy">Таны нэр</label>
        <input
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Нэрээ бичнэ үү"
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-navy">Утас</label>
        <input
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+976 ..."
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-navy">Сонирхож буй аялал</label>
        <select
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option>Испани</option>
          <option>Вьетнам</option>
          <option>Тайланд</option>
          <option>Бусад / зөвлөгөө</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-navy">Зурвас</label>
        <textarea
          className="min-h-[110px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-sky focus:ring-2 focus:ring-sky/20"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Огноо, хүний тоо гэх мэт..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-primary flex-1">
          Имэйлээр илгээх
        </button>
        <button type="button" onClick={onWhatsApp} className="btn-outline flex-1">
          WhatsApp-аар илгээх
        </button>
      </div>
    </form>
  );
}
