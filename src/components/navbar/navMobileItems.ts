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
      {
        title: "Public, In-House Training, Online Learning",
        href: "/whatWeDo/training",
      },
      {
        title: "Hybrid Officer Development Crash Program",
        href: "/whatWeDo/hybridOfficerDevelopment",
      },
      {
        title: "Asessment for Technical Competency",
        href: "/whatWeDo/atc",
      },
      {
        title: "Learning Management System",
        href: "/whatWeDo/lms",
      },
      {
        title: "Consulting Service",
        href: "/whatWeDo/consultingService",
      },
      {
        title: "Outbound & Gathering",
        href: "/whatWeDo/outbound",
      },
      {
        title: "Executive Coaching & Bussines Mentoring",
        href: "/whatWeDo/coaching",
      },
    ],
  },
  {
    title: "More",
    href: "#",
    dropdown: [
      { title: "About Us", href: "/more/aboutUs" },
      { title: "History", href: "/more/historyPage" },
      { title: "Vision & Mission", href: "/more/visiMisi" },
      { title: "Our Clients", href: "/more/ourClients" },
      { title: "Our Facilitator", href: "/more/ourFacilitator" },
      { title: "Contact Us", href: "/more/contactUs" },
    ],
  },
];
