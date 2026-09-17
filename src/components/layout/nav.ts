export const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/batumi", key: "batumi" },
  { href: "/ships", key: "ships" },
  { href: "/contacts", key: "contacts" },
] as const;

export function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
