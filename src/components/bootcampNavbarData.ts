export interface BootcampCategory {
  category: string;
  items: { name: string; href: string }[]; 
}

export const bootcampData: BootcampCategory[] = [
  {
    category: "Information Technology",
    items: [
      { name: "UI/UX for Web & App Project", href: "/pdfViewer/ui&ux" },
      {
        name: "Back End Developer Advance Level",
        href: "/pdfViewer/back-end-advance",
      },
      {
        name: "Front End Developer for Advance Level",
        href: "/pdfViewer/front-end-advance",
      },
      { name: "IT QA Engineer", href: "/pdfViewer/it-qa" },
      {
        name: "Flutter Multi Platform App Development",
        href: "/pdfViewer/flutter",
      },
    ],
  },
  {
    category: "AI & Data Science",
    items: [
      {
        name: "Aplikasi AI untuk Industri Perbankan, Multifinance, Asuransi, dan Fintech",
        href: "/pdfViewer/terapan-ai",
      },
      {
        name: "Data Science dan Data Analist di Industri Perbankan, Pembiayaan, dan Fintech AI",
        href: "/pdfViewer/datascience&analytics",
      },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "3D Bootcamp", href: "/pdfViewer/3d" },
      { name: "Photography Bootcamp", href: "#" },
      {
        name: "Video Editing & Animation Bootcamp",
        href: "/pdfViewer/video-editor-content-creator",
      },
      {
        name: "Videografer & Sinematografer Bootcamp",
        href: "/pdfViewer/videografer-sinematografer",
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
        href: "/pdfViewer/cyber-security",
      },
      {
        name: "Keamanan Jaringan Cyber, Analisis Malware & Penanganan Insiden Keamanan",
        href: "#",
      },
    ],
  },
  {
    category: "Leadership",
    items: [
      {
        name: "Digital Leadership & Team Management",
        href: "/bootcamps/digital-leadership",
      },
      {
        name: "Analytics & Decision Making for Leader",
        href: "/bootcamps/analytics-decision",
      },
      {
        name: "Managing Team Creativity & Innovation for Leaders",
        href: "/bootcamps/team-creativity",
      },
      {
        name: "Strategic AI Skills: Generative AI, Diagnostic AI & Projective AI",
        href: "/bootcamps/ai-strategy",
      },
    ],
  },
  {
    category: "Soft Skill",
    items: [
      {
        name: "Management Emosi, Tempramen & Kontrol Diri",
        href: "/bootcamps/emotion-management",
      },
      {
        name: "Komunikasi Personal & Interpersonal di Era Digital",
        href: "/bootcamps/communication-skills",
      },
      {
        name: "Manajemen konflik, networking dan hubungan baik",
        href: "/bootcamps/conflict-management",
      },
      {
        name: "Negosiasi untuk bisnis dan kemasyarakatan",
        href: "/bootcamps/negotiation-skills",
      },
    ],
  },
  {
    category: "IOT",
    items: [
      {
        name: "Perencanaan IoT: Ide, Solusi, Perangkaian, Manajemen Proyek",
        href: "/bootcamps/iot-planning",
      },
      {
        name: "Keamanan IOT: Manajemen Identitas dan Akses IoT, Keamanan Sistem",
        href: "/bootcamps/iot-security",
      },
    ],
  },
  {
    category: "VR & Game",
    items: [
      {
        name: "Unreal Engine 5 Virtual Reality Development Bootcamp",
        href: "/bootcamps/ue5-vr",
      },
      {
        name: "Bootcamp Game Development: Tingkatkan kemampuanmu menuju karir di Industri Game",
        href: "/bootcamps/game-development",
      },
    ],
  },
  {
    category: "Bisnis",
    items: [
      {
        name: "Strategi Sponsorship & Penjualan Era Digital",
        href: "/bootcamps/sponsorship-strategy",
      },
      {
        name: "Digital Marketing dan Event Management",
        href: "/bootcamps/digital-marketing",
      },
      {
        name: "Financial Planning, Business Modeling, Scenario Testing & Analytics Dashboard",
        href: "/bootcamps/financial-planning",
      },
    ],
  },
];
