export interface BootcampCategory {
  category: string;
  items: { name: string; href: string }[]; // Setiap item sekarang berisi 'name' dan 'href'
}

export const bootcampData: BootcampCategory[] = [
  {
    category: "Information Technology",
    items: [
      { name: "UI/UX for Web & App Project", href: "/pdfViewer/ui&ux" },
      { 
        name: "Back End Developer Advance Level",
        href: "/bootcamps/backend-advance",
      },
      {
        name: "Front End Developer for Advance Level",
        href: "/bootcamps/frontend-advance",
      },
      { name: "IT QA Engineer", href: "/bootcamps/qa-engineer" },
      {
        name: "Flutter Multi Platform App Development",
        href: "/bootcamps/flutter",
      },
    ],
  },
  {
    category: "AI & Data Science",
    items: [
      {
        name: "Aplikasi AI untuk Industri Perbankan, Multifinance, Asuransi, dan Fintech",
        href: "/bootcamps/ai-fintech",
      },
      {
        name: "Data Science dan Data Analist di Industri Perbankan, Pembiayaan, dan Fintech AI",
        href: "/bootcamps/data-science",
      },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "3D Bootcamp", href: "/bootcamps/3d" },
      { name: "Photography Bootcamp", href: "/bootcamps/photography" },
      {
        name: "Video Editing & Animation Bootcamp",
        href: "/bootcamps/video-editing",
      },
      {
        name: "Videografer & Sinematografer Bootcamp",
        href: "/bootcamps/videography",
      },
    ],
  },
  {
    category: "Blockchain",
    items: [
      {
        name: "Solidity Bootcamp: Pemrograman untuk Blockchain & Smart Contract",
        href: "/bootcamps/solidity",
      },
      {
        name: "Simplicity Bootcamp: Pemrograman untuk Blockchain & Smart Contract",
        href: "/bootcamps/simplicity",
      },
      {
        name: "Python Bootcamp: Pemrograman untuk Blockchain & Smart Contract",
        href: "/bootcamps/python-blockchain",
      },
    ],
  },
  {
    category: "Cyber Security",
    items: [
      {
        name: "Cyber Security: Web Exploitation and Design",
        href: "/bootcamps/cyber-security",
      },
      {
        name: "Simplicity Bootcamp: Pemrograman untuk Blockchain & Smart Contract",
        href: "/bootcamps/simplicity",
      },
    ],
  },
  {
    category: "Leadership",
    items: [
      {
        name: "Digital Leadership & Team Management",
        href: "/pdfViewer/",
      },
      {
        name: "Analytics & Decision Making for Leader",
        href: "/pdfViewer/",
      },
      {
        name: "Managing Team Creativity & Innovation for Leaders",
        href: "/pdfViewer/",
      },
      {
        name: "Strategic AI Skills: Generative AI, Diagnostic AI & Projective AI",
        href: "/pdfViewer/",
      },
    ],
  },
  {
    category: "Soft Skill",
    items: [
      {
        name: "Management Emosi, Tempramen & Kontrol Diri",
        href: "/pdfViewer/",
      },
      {
        name: "Komunikasi Personal & Interpersonal di Era Digital",
        href: "/pdfViewer/",
      },
      {
        name: "Manajemen konflik, networking dan hubungan baik",
        href: "/pdfViewer/",
      },
      {
        name: "Negosiasi untuk bisnis dan kemasyarakatan",
        href: "/pdfViewer/",
      },
    ],
  },
  {
    category: "IOT",
    items: [
      {
        name: "Perencanaan IoT: Ide, Solusi, Perangkaian, Manajemen Proyek",
        href: "/pdfViewer/IoT",
      },
      {
        name: "Keamanan IOT: Manajemen Identitas dan Akses IoT, Keamanan Sistem",
        href: "/pdfViewer/",
      },
    ],
  },
  {
    category: "VR & Game",
    items: [
      {
        name: "Unreal Engine 5 Virtual Reality Development Bootcamp",
        href: "/pdfViewer/virtual-reality",
      },
      {
        name: "Bootcamp Game Development: Tingkatkan kemampuanmu menuju karir di Industri Game",
        href: "/pdfViewer/game-development",
      },
    ],
  },
  {
    category: "Bisnis",
    items: [
      {
        name: "Strategi Sponsorship & Penjualan Era Digital",
        href: "/pdfViewer/strategi-sponsorship",
      },
      {
        name: "Digital Marketing dan Event Management",
        href: "/pdfViewer/Digital-Marketing",
      },
      {
        name: "Financial Planning, Business Modeling, Scenario Testing & Analytics Dashboard",
        href: "/pdfViewer/financial-planning",
      },
    ],
  },
];
