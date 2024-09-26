export interface DropdownItem {
  dropdownTitle: string;
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
      { dropdownTitle: "AI Sales Tools", href: "#" },
      { dropdownTitle: "Virtual Reality", href: "#" },
    ],
  },
  {
    title: "What We Do",
    href: "#",
    dropdown: [
      {
        dropdownTitle: "Public, In-House Training, Online Learning",
        href: "/whatWeDo/training",
      },
      {
        dropdownTitle: "Hybrid Officer Development Crash Program",
        href: "/whatWeDo/hybridOfficerDevelopment",
      },
      {
        dropdownTitle: "Asessment for Technical Competency",
        href: "/whatWeDo/atc",
      },
      {
        dropdownTitle: "Learning Management System",
        href: "/whatWeDo/lms",
      },
      {
        dropdownTitle: "Consulting Service",
        href: "/whatWeDo/consultingService",
      },
      {
        dropdownTitle: "Outbound & Gathering",
        href: "/whatWeDo/outbound",
      },
      {
        dropdownTitle: "Executive Coaching & Bussines Mentoring",
        href: "/whatWeDo/coaching",
      },
    ],
  },
  {
    title: "More",
    href: "#",
    dropdown: [
      { dropdownTitle: "About Us", href: "/more/aboutUs" },
      { dropdownTitle: "History", href: "/more/historyPage" },
      { dropdownTitle: "Vision & Mission", href: "/more/visiMisi" },
      { dropdownTitle: "Our Clients", href: "/more/ourClients" },
      { dropdownTitle: "Our Facilitator", href: "/more/ourFacilitator" },
      { dropdownTitle: "Contact Us", href: "/more/contactUs" },
    ],
  },
];
