export interface DropdownItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const navMobileItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Bootcamp Program", href: "/bootcamp" },
  {
    title: "New Training",
    href: "#",
    dropdown: [
      { title: "AI Sales Tools", href: "#" },
      { title: "Virtual Reality", href: "#" },
    ],
  },
  {
    title: "What We Do",
    href: "#",
    dropdown: [
      { title: "Services", href: "/services" },
      { title: "Projects", href: "/projects" },
    ],
  },
  {
    title: "More",
    href: "#",
    dropdown: [
      { title: "FAQ", href: "/faq" },
      { title: "Contact", href: "/contact" },
    ],
  },
];
