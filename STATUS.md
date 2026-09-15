# SGS Web — STATUS

**Path:** `/workspace/sgs-web`  
**Date:** 2026-09-15  
**Style ref:** https://global-travel.mn/ (layout pattern only; SGS brand kept)  
**Repo:** https://github.com/schengengatesolution-dev/sgs-web

## Done

- [x] Next.js 14 + TS + Tailwind scaffold
- [x] Logo `public/logo.png` (+ favicon PNGs from logo)
- [x] Brand colors navy `#003366` / sky `#0099CC`
- [x] Brochures in `public/brochures/` + destination itineraries from PDFs
- [x] Photos in `public/photos/{spain,vietnam,thailand}/`
- [x] Navbar (Нүүр, Аялал, Бидний тухай, Холбоо барих) + Footer + WhatsApp float
- [x] Pages: `/`, `/destinations`, `/destinations/{spain,vietnam,thailand}`, `/about`, `/contact`
- [x] Contact form → mailto + WhatsApp prefill
- [x] README.md
- [x] `npm run build` **SUCCEEDED** (11 static pages)
- [x] Pushed to GitHub `schengengatesolution-dev/sgs-web`

## Pages / URLs

- `/` — hero + logo + CTA + 3 featured destinations + trust/steps
- `/destinations` — Spain, Vietnam, Thailand (+ Hainan “Удахгүй”)
- `/destinations/spain` — 12-day Barcelona/Ibiza/Formentera/Valencia + PDF
- `/destinations/vietnam` — 7D North–South + PDF
- `/destinations/thailand` — 7D Pattaya–Bangkok + PDF
- `/about` — company story
- `/contact` — contacts + inquiry form

## Run

```bash
cd /workspace/sgs-web && npm run dev
```
