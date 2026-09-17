import { whatsappLink } from "@/lib/format";

export const CONTACT = {
  phoneDisplay: "+995 593 18 01 01",
  phoneTel: "+995593180101",
  email: "info@okyanus.ge",
  facebook: "https://www.facebook.com/Okyanusbatumi",
  lat: 41.655072,
  lng: 41.643124,
} as const;

export function getWhatsappHref(text?: string) {
  return whatsappLink(CONTACT.phoneTel, text);
}

export function getMapEmbedUrl() {
  const { lat, lng } = CONTACT;
  const delta = 0.012;
  const bbox = [lng - delta, lat - delta, lng + delta, lat + delta].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export function getMapLink() {
  return `https://www.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}`;
}

export const GALLERY = [
  {
    src: "/gallery/okeanus-3.jpg",
    key: "okyanus3",
    width: 1073,
    height: 1430,
  },
  {
    src: "/gallery/okeanus-1.jpg",
    key: "fleet",
    width: 564,
    height: 573,
  },
  {
    src: "/gallery/okeanus-2.jpg",
    key: "jetski",
    width: 616,
    height: 1269,
  },
  {
    src: "/gallery/batumi-main.jpg",
    key: "batumi",
    width: 1920,
    height: 1080,
  },
  {
    src: "/gallery/batumi-bg.jpg",
    key: "parasailing",
    width: 1920,
    height: 567,
  },
] as const;

export const SHIPS = [
  {
    id: "okyanus-3",
    image: "/gallery/okeanus-3.jpg",
    width: 1073,
    height: 1430,
    titleKey: "okyanus3Title",
    bodyKey: "okyanus3Body",
  },
  {
    id: "parasailing",
    image: "/gallery/okeanus-1.jpg",
    width: 564,
    height: 573,
    titleKey: "parasailingTitle",
    bodyKey: "parasailingBody",
  },
  {
    id: "jetski",
    image: "/gallery/okeanus-2.jpg",
    width: 616,
    height: 1269,
    titleKey: "jetskiTitle",
    bodyKey: "jetskiBody",
  },
] as const;

export const HOME_SERVICES = [
  { key: "trips", href: "/ships" },
  { key: "parasailing", href: "/ships" },
  { key: "jetski", href: "/ships" },
] as const;
