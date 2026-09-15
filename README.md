# Schengen Gate Solution (SGS) — Вебсайт

Монгол-first аялал жуулчлалын компанийн веб: **ТАНЫ АЯЛЛЫН ХӨТӨЧ**

Brand: navy `#003366` · sky `#0099CC` · logo `public/logo.png`

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Static-friendly MVP (DB шаардлагагүй)

## Хуудсууд

| URL | Тайлбар |
|-----|---------|
| `/` | Нүүр — hero, онцлох аялал, CTA |
| `/destinations` | Чиглэлүүд (Испани, Вьетнам, Тайланд, Хайнань удахгүй) |
| `/destinations/spain` | Испани 12 өдөр + brochure PDF |
| `/destinations/vietnam` | Вьетнам 7 өдөр + brochure PDF |
| `/destinations/thailand` | Тайланд 7 өдөр + brochure PDF |
| `/about` | Бидний тухай |
| `/contact` | Холбоо барих + mailto/WhatsApp form |

Brochure PDF: `public/brochures/SGS_{Spain,Vietnam,Thailand}_Brochure.pdf`

## Ажиллуулах

```bash
cd /workspace/sgs-web
npm install
npm run dev
```

Browser: [http://localhost:3000](http://localhost:3000)

## Production build

```bash
npm run build
npm start
```

## Холбоо барих

- Утас: +976 94061666
- WhatsApp: +976 60086001 → https://wa.me/97660086001
- Имэйл: schengengatesolution@gmail.com
- Facebook: https://www.facebook.com/sgs.aylal
- Хаяг: УБ хот, Баянзүрх дүүрэг 4-р хороо, Жанжин Лхагвасүрэнгийн гудамж, Норжин худалдааны төв, 4-р давхар, 401 тоот
