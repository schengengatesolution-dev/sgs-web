export const site = {
  name: "Schengen Gate Solution",
  shortName: "SGS",
  tagline: "ТАНЫ АЯЛЛЫН ХӨТӨЧ",
  phone: "+976 94061666",
  phoneHref: "tel:+97694061666",
  whatsapp: "+976 60086001",
  whatsappHref: "https://wa.me/97660086001",
  email: "schengengatesolution@gmail.com",
  emailHref: "mailto:schengengatesolution@gmail.com",
  facebook: "https://www.facebook.com/sgs.aylal",
  address:
    "УБ хот, Баянзүрх дүүрэг 4-р хороо, Жанжин Лхагвасүрэнгийн гудамж, Норжин худалдааны төв, 4-р давхар, 401 тоот",
};

export type DayItem = { day: number; title: string; detail: string };
export type Highlight = { title: string; image?: string };

export type Destination = {
  slug: string;
  name: string;
  nameEn: string;
  subtitle: string;
  days: number;
  nights?: number;
  summary: string;
  heroImage: string;
  href: string;
  brochure?: string;
  featured: boolean;
  comingSoon: boolean;
  highlights: Highlight[];
  daysItinerary: DayItem[];
  sections?: { title: string; days: string; blurb: string; images: string[] }[];
};

export const destinations: Destination[] = [
  {
    slug: "spain",
    name: "Испани",
    nameEn: "Spain",
    subtitle: "Газар дундын тэнгис · 12 өдөр / 11 шөнө",
    days: 12,
    nights: 11,
    summary:
      "Barcelona · Ibiza · Formentera · Valencia — Gaudí-гийн урлаг, Ibiza-гийн далай, Valencia-гийн орчин үе",
    heroImage: "/photos/spain/barcelona_hero.jpg",
    href: "/destinations/spain",
    brochure: "/brochures/SGS_Spain_Brochure.pdf",
    featured: true,
    comingSoon: false,
    highlights: [
      { title: "Sagrada Família", image: "/photos/spain/sagrada.jpg" },
      { title: "Park Güell", image: "/photos/spain/park_guell.jpg" },
      { title: "Camp Nou", image: "/photos/spain/camp_nou.jpg" },
      { title: "Ibiza · Dalt Vila", image: "/photos/spain/ibiza_dalt.jpg" },
      { title: "Formentera · Ses Illetes", image: "/photos/spain/formentera.jpg" },
      { title: "Valencia · CAC", image: "/photos/spain/valencia_cac.jpg" },
      { title: "Albufera нар жаргах", image: "/photos/spain/albufera.jpg" },
    ],
    sections: [
      {
        title: "Barcelona",
        days: "1–4-р өдөр",
        blurb: "Gaudí, Gothic Quarter, Camp Nou, Penedès cava туршлага",
        images: [
          "/photos/spain/sagrada.jpg",
          "/photos/spain/park_guell.jpg",
          "/photos/spain/camp_nou.jpg",
        ],
      },
      {
        title: "Ibiza & Formentera",
        days: "5–8-р өдөр",
        blurb: "David Guetta шоу, хувийн катамаран, Ses Illetes",
        images: ["/photos/spain/ibiza_dalt.jpg", "/photos/spain/formentera.jpg"],
      },
      {
        title: "Valencia",
        days: "9–12-р өдөр",
        blurb: "Урлаг, шинжлэх ухааны хот, Albufera завины аялал",
        images: ["/photos/spain/valencia_cac.jpg", "/photos/spain/albufera.jpg"],
      },
    ],
    daysItinerary: [
      { day: 1, title: "Barcelona-д ирэх", detail: "BCN нисэх буудал · зочид буудал бүртгэл · Sagardi оройн хоол" },
      { day: 2, title: "Gaudí · Gothic · La Pedrera шөнө", detail: "Passeig de Gràcia, Sagrada Família, Gothic Quarter, La Pedrera шөнийн үзвэр" },
      { day: 3, title: "Park Güell + Camp Nou", detail: "Park Güell · Gràcia дүүрэг · FC Barcelona / Camp Nou үзвэр" },
      { day: 4, title: "Penedès — cava туршлага", detail: "Codorníu дарсны үйлдвэр · cava амталт · Jeep аялал" },
      { day: 5, title: "Barcelona → Ibiza", detail: "Нислэг · далайн эрэг · UNVRS — David Guetta тоглолт" },
      { day: 6, title: "Хувийн катамаран", detail: "Далайд сэлэх · paella үдийн хоол · нар жаргах" },
      { day: 7, title: "Dalt Vila ба далайн эрэг", detail: "Ibiza хуучин хот · Cala · тусгай оройн хоол" },
      { day: 8, title: "Formentera — бүтэн өдөр", detail: "Ses Illetes · Cala Saona · сэлэлт · үдийн хоол" },
      { day: 9, title: "Ibiza → Valencia", detail: "Нислэг · түүхэн төв: Cathedral, La Lonja, Mercado Central" },
      { day: 10, title: "Урлаг, шинжлэх ухаан + Albufera", detail: "City of Arts and Sciences · Albufera завины аялал, нар жаргах" },
      { day: 11, title: "Valencia → Barcelona", detail: "Галт тэрэг · худалдаа · баяртай оройн хоол" },
      { day: 12, title: "Буцах нислэг", detail: "Өглөөний цай · BCN нисэх буудал · Монгол руу буцах" },
    ],
  },
  {
    slug: "vietnam",
    name: "Вьетнам",
    nameEn: "Vietnam",
    subtitle: "Хойдноос өмнөд хүртэл · 7 өдөр / 6 шөнө",
    days: 7,
    nights: 6,
    summary:
      "Hanoi · Halong · Hoi An · Ho Chi Minh · Mekong — Hanoi-гийн гудамж, Halong-ийн туман, Hoi An-ийн гэрэл",
    heroImage: "/photos/vietnam/halong.jpg",
    href: "/destinations/vietnam",
    brochure: "/brochures/SGS_Vietnam_Brochure.pdf",
    featured: true,
    comingSoon: false,
    highlights: [
      { title: "Hanoi — хуучин хот", image: "/photos/vietnam/hanoi_old.jpg" },
      { title: "Hoàn Kiếm нуур", image: "/photos/vietnam/hanoi_lake.jpg" },
      { title: "Halong булан", image: "/photos/vietnam/halong.jpg" },
      { title: "Hoi An", image: "/photos/vietnam/hoian.jpg" },
      { title: "Ho Chi Minh (Saigon)", image: "/photos/vietnam/saigon.jpg" },
      { title: "Mekong — Ben Tre", image: "/photos/vietnam/mekong.jpg" },
    ],
    sections: [
      {
        title: "Hanoi & Halong",
        days: "1–3-р өдөр",
        blurb: "Соёл, гудамжны хоол, Halong шөнийн круиз",
        images: [
          "/photos/vietnam/hanoi_old.jpg",
          "/photos/vietnam/hanoi_lake.jpg",
          "/photos/vietnam/halong.jpg",
        ],
      },
      {
        title: "Hoi An · Saigon · Mekong",
        days: "4–7-р өдөр",
        blurb: "Гэрэлт хот, Saigon тойрог, Mekong дельта",
        images: [
          "/photos/vietnam/hoian.jpg",
          "/photos/vietnam/saigon.jpg",
          "/photos/vietnam/mekong.jpg",
        ],
      },
    ],
    daysItinerary: [
      { day: 1, title: "Hanoi — угтах", detail: "Нисэх буудал · зочид буудал · угтах уулзалт · чөлөөт орой" },
      { day: 2, title: "Hanoi — соёлын өдөр", detail: "Хуучин хот · Ho Chi Minh бунхан/өргөө · нуур · гудамжны хоол" },
      { day: 3, title: "Halong — шөнийн круиз", detail: "Halong булан руу · завь/каяак · шөнийн круиз дээр хонох" },
      { day: 4, title: "Halong → Hoi An", detail: "Круизээс буух · нислэг/шилжилт · Hoi An хуучин хот" },
      { day: 5, title: "Hoi An → Ho Chi Minh", detail: "Өглөө Hoi An · нислэг HCMC · хотын тойрог үзвэр" },
      { day: 6, title: "Mekong — Ben Tre", detail: "Mekong дельта · кокос цэцэрлэг · завины аялал · орон нутгийн амттан" },
      { day: 7, title: "Буцах нислэг", detail: "Өглөөний цай · нисэх буудал руу · буцах нислэг" },
    ],
  },
  {
    slug: "thailand",
    name: "Тайланд",
    nameEn: "Thailand",
    subtitle: "Паттайя–Бангкок · EXP984 · 7 өдөр",
    days: 7,
    summary:
      "Pattaya · Bangkok — Coral Island, Nong Nooch, Grand Palace, Chao Phraya круиз",
    heroImage: "/photos/thailand/pattaya.jpg",
    href: "/destinations/thailand",
    brochure: "/brochures/SGS_Thailand_Brochure.pdf",
    featured: true,
    comingSoon: false,
    highlights: [
      { title: "Pattaya далайн эрэг", image: "/photos/thailand/pattaya.jpg" },
      { title: "Coral Island (Koh Larn)", image: "/photos/thailand/coral_island.jpg" },
      { title: "Grand Palace", image: "/photos/thailand/grand_palace.jpg" },
      { title: "Wat Arun", image: "/photos/thailand/wat_arun.jpg" },
      { title: "Wat Pho", image: "/photos/thailand/wat_pho.jpg" },
      { title: "Chao Phraya круиз", image: "/photos/thailand/chao_phraya.jpg" },
      { title: "Floating market", image: "/photos/thailand/floating_market.jpg" },
    ],
    sections: [
      {
        title: "Pattaya & Coral Island",
        days: "1–3-р өдөр",
        blurb: "Ёслол угталт, арал, Nong Nooch, Alcazar шоу",
        images: ["/photos/thailand/pattaya.jpg", "/photos/thailand/coral_island.jpg"],
      },
      {
        title: "Bangkok",
        days: "4–7-р өдөр",
        blurb: "Grand Palace, Wat Pho, Safari World, оройн круиз",
        images: [
          "/photos/thailand/grand_palace.jpg",
          "/photos/thailand/wat_arun.jpg",
          "/photos/thailand/chao_phraya.jpg",
        ],
      },
    ],
    daysItinerary: [
      { day: 1, title: "Bangkok → Pattaya", detail: "BKK-д ирэх · Pattaya руу · ёслол угтах оройн хөтөлбөр" },
      { day: 2, title: "Coral Island", detail: "Арал руу завиар · далайн эрэг · усны спорт · чөлөөт цаг" },
      { day: 3, title: "Nong Nooch + Alcazar", detail: "Nong Nooch цэцэрлэгт хүрээлэн · орой Alcazar шоу" },
      { day: 4, title: "Pattaya → Bangkok", detail: "Bangkok руу шилжих · зочид буудал · хотын тойрог / чөлөөт" },
      { day: 5, title: "Grand Palace ба Wat Pho", detail: "Grand Palace · Wat Pho (Хэвтээ Будда) · соёлын аялал" },
      { day: 6, title: "Safari World + оройн круиз", detail: "Safari World · Chao Phraya дээр оройн хоолны круиз" },
      { day: 7, title: "Нисэх буудал", detail: "Өглөөний цай · BKK нисэх буудал · буцах нислэг" },
    ],
  },
  {
    slug: "hainan",
    name: "Хайнань",
    nameEn: "Hainan",
    subtitle: "Удахгүй",
    days: 0,
    summary: "Хятадын халуун бүсийн арал — удахгүй нээгдэнэ",
    heroImage: "/photos/thailand/coral_island.jpg",
    href: "/destinations",
    featured: false,
    comingSoon: true,
    highlights: [],
    daysItinerary: [],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug && !d.comingSoon);
}
