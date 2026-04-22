import { image } from "framer-motion/client";
import { Atom, Server, Database, Palette, GitBranch, Shield, Zap, Workflow, Gem, Coffee } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const SITE_CONFIG = {
  name: "Shivam Sharma",
  logoText: "ShivamSharma",
  role: "Full Stack Developer",
  email: "shivamsharma23jan@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

export const HERO_DATA = {
  greet: "Hi, I'm",
  title: "Shivam Sharma",
  generalBtn: [
    { label: "Full Stack Developer" },
    { label: "Open Source" }
  ],
  techStack: "{ JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, Tailwind CSS }",
  description: "Specializing in React & Next.js. I leverage cutting-edge technologies to build highly interactive and performant web projects.",
  ctaPrimary: { label: "See my dev work", href: "#portfolio" },
  ctaSecondary: { label: "Download CV", href: "https://drive.google.com/file/d/1tPQb-6kfv02RjB0uTsHR5xbttSHKmuAJ/view?usp=sharing" },
  social: [
    { label: "GitHub", href: "https://github.com/shivsh01", icon: <FaGithub size={28} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivam-sharma-859891250", icon: <FaLinkedin size={28} /> },
    { label: "Twitter", href: "https://x.com/S41130082", icon: <FaXTwitter size={28} /> }
  ]
};

export const ABOUT_DATA = {
  experiences: [
    {
      title: "B.Tech in Computer Science and Engineering (AI).",
      description: "Graduating from KIET Group of Institutions (Exp. 2026)."
    },
    {
      title: "Specializing in React & Next.js.",
      description: "My expertise spans across React, Next.js, Node.js, and Web3 technologies. I'm passionate about building scalable applications and contributing to open-source projects."
    },
    {
      title: "Love working in team.",
      description: "I enjoy working in a team environment to deliver scalable applications, but I can also work independently."
    },
    {
      title: "Hands-on Experience.",
      description: "Built real-world applications at Credible, Decharge, Swyftin and Kajkarma leveraging modern full-stack web architectures."
    }
  ],
  
};

export const TECH_STACK_DATA = {
  heading: "(SKILLS)",
  title: "Tech",
  titleHighlight: "Stack",
  categories: [
    {
      name: "Languages",
      items: [
        { name: "JavaScript", icon: <div className="flex items-center justify-center w-5 h-5 bg-[#f7df1e] text-black text-[10px] font-bold rounded-sm">JS</div> },
        { name: "TypeScript", icon: <div className="flex items-center justify-center w-5 h-5 bg-[#3178c6] text-white text-[10px] font-bold rounded-sm">TS</div> },
        { name: "Java", icon: <div className="flex items-center justify-center w-5 h-5 text-[#f89820] text-sm"><Coffee size={14}/></div> },
        { name: "C", icon: <div className="flex items-center justify-center w-5 h-5 bg-[#00599c] text-white text-[12px] font-bold rounded-full">C</div> },
        { name: "HTML5", icon: <div className="flex items-center justify-center w-5 h-5 bg-[#e34f26] text-white text-[10px] font-bold rounded-sm">5</div> }
      ]
    },
    {
      name: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <Atom size={18} className="text-[#61dafb]" /> },
        { name: "Next.js", icon: <div className="flex items-center justify-center w-5 h-5 bg-foreground text-background text-[10px] font-bold rounded-full">N</div> },
        { name: "Node.js", icon: <div className="flex items-center justify-center w-5 h-5 text-[#339933]"><Server size={18}/></div> },
        { name: "Express.js", icon: <div className="flex items-center justify-center w-5 h-5 text-secondary text-[10px] font-bold">ex</div> },
        { name: "Tailwind CSS", icon: <Palette size={18} className="text-[#38b2ac]" /> },
        { name: "GSAP", icon: <div className="flex items-center justify-center w-5 h-5 bg-green-500 text-black text-[10px] font-bold rounded-sm">G</div> },
        { name: "TanStack", icon: <div className="flex items-center justify-center w-5 h-5 text-red-500 bg-red-500/10 rounded-full"><Database size={12}/></div> },
        { name: "Zustand", icon: <div className="flex items-center justify-center w-5 h-5 text-yellow-600 text-[18px]">🐻</div> }
      ]
    },
    {
      name: "Databases",
      items: [
        { name: "MongoDB", icon: <div className="flex items-center justify-center w-5 h-5 text-[#47a248]"><Database size={18}/></div> },
        { name: "MySQL", icon: <div className="flex items-center justify-center w-5 h-5 text-[#4479a1]"><Database size={18}/></div> }
      ]
    },
    {
      name: "Tools",
      items: [
        { name: "Git", icon: <GitBranch size={18} className="text-[#f34f29]" /> },
        { name: "GitHub", icon: <div className="flex items-center justify-center w-5 h-5 bg-foreground text-background rounded-full"><FaGithub size={12}/></div> },
        { name: "Docker", icon: <div className="flex items-center justify-center w-5 h-5 text-[#2496ed] text-[18px]">🐳</div> },
        { name: "AWS", icon: <div className="flex items-center justify-center w-5 h-5 text-[#ff9900] text-[10px] font-bold">AWS</div> },
        { name: "Vercel", icon: <div className="flex items-center justify-center w-5 h-5 text-foreground text-[14px]">▲</div> }
      ]
    }
  ]
};

export const WORK_EXPERIENCE_DATA = [
  {
    id: "01",
    company: "Credible Finance",
    role: "Full Stack Developer",
    type: "Part-time",
    date: "Dec 2025 - Present",
    link: "https://x.com/crediblefin",
    logoBg: "bg-blue-500/20",
    logoColor: "text-blue-500",
    icon: <Workflow size={24} />,
    responsibilities: [
      "Integrated Web3 wallets and smart contracts with backend APIs.",
      "Designed and developed the entire website to significantly improve user experience (UX)."
    ],
    tags: ["Solana", "Next.js", "TypeScript", "TanStack Query", "Shadcn"]
  },
  {
    id: "02",
    company: "DECHARGE NETWORK",
    role: "Frontend Dev",
    type: "Freelance",
    date: "Oct 2025",
    link: "#",
    logoBg: "bg-blue-500/20",
    logoColor: "text-blue-500",
    icon: <Workflow size={24} />,
    responsibilities: [
      "Integrated Web3 wallets and Solana smart contracts on the frontend.",
      "Redesigned the complete website to enhance UX and performance."
    ],
    tags: ["Solana", "Next.js", "TypeScript", "TanStack Query", "Shadcn"]
  },
  {
    id: "03",
    company: "SWYFTIN",
    role: "Full Stack Intern",
    type: "Internship",
    date: "Apr 2025 – Dec 2026",
    link: "#",
    logoBg: "bg-orange-500/20",
    logoColor: "text-orange-500",
    icon: <Zap size={24} />,
    responsibilities: [
      "Designed and developed responsive frontend applications using Next.js and Shadcn.",
      "Implemented robust API integrations utilizing TanStack Query for data fetching and Zod for type-safe schema validation.",
      "Integrated payment gateways like Razorpay, PayU, and Stripe to enable secure transaction processing."
    ],
    tags: ["Next.js", "TanStack Query", "Zustand", "Razorpay"]
  },
  {
    id: "04",
    company: "KAJKARMA",
    role: "Backend Developer",
    type: "Full-time",
    date: "Sept 2025",
    link: "#",
    logoBg: "bg-emerald-500/20",
    logoColor: "text-emerald-500",
    icon: <Gem size={24} />,
    responsibilities: [
      "Designed and implemented the backend for a Diamond Inventory Management system, managing CRUD operations and stock tracking.",
      "Integrated Stripe for seamless payment processing and automated transaction handling.",
      "Improved system reliability and maintainability by writing modular, well-documented code."
    ],
    tags: ["Node.js", "Express", "MongoDB", "Stripe"]
  },
  // {
  //   id: "05",
  //   company: "CBS ERP PLATFORM",
  //   role: "Backend Developer",
  //   type: "Contract",
  //   date: "Dec 2025",
  //   link: "#",
  //   logoBg: "bg-purple-500/20",
  //   logoColor: "text-purple-500",
  //   icon: <Shield size={24} />,
  //   responsibilities: [
  //     "Built a multi-tenant SaaS ERP system with database-per-tenant isolation and JWT-based tenant resolution.",
  //     "Implemented bitwise RBAC, payroll automation via cron jobs, audit logs, and real-time updates using SSE.",
  //     "Integrated AWS S3 for secure document storage and implemented scalable service-based backend architecture."
  //   ],
  //   tags: ["Node.js", "TypeScript", "Express", "MongoDB", "AWS"]
  // }
];

export const PROJECTS_FILTERS = ["All", "Apps", "Websites", "Games"];

export const PROJECTS_DATA = [
  {
    title: "Store-Env",
    tech: "Next.js • TypeScript • CryptoJS ",
    description: "Developed a secure platform for managing and encrypting environment variables using CryptoJS.",
    github: "https://github.com/shivsh01/StoreEnv",
    live: "https://store-env-lilac.vercel.app/",
    type: "Websites",
    image: "/store-env.png"
  },
  {
    title: "The Rankers",
    tech: "React.js • Express • MongoDB",
    description: "Built a dynamic web app using Octokit API to visualize GitHub data in real-time with leaderboard ranking.",
    github: "https://github.com/shivsh01/THE_RANKERS",
    live: "https://the-rankers.vercel.app/",
    type: "Websites",
    image: "/rankers.png"
  },
  {
    title: "Multi-Tenant ERP",
    tech: "Node.js • Express • AWS",
    description: "Built a SaaS ERP system with database-per-tenant isolation, bitwise RBAC, and real-time updates.",
    github: "https://github.com/shivsh01/CBS-Backend",
    live: "#",
    type: "Websites",
    image: "/image.png"
  }
];

export const CONTACT_DATA = {
  titlePrefix: "Let's",
  titleHighlight: "[work]",
  titleSuffix: "together",
  subtitle: "Open to full time, remote jobs or freelance projects.",
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your message",
    buttonText: "Send Message"
  }
};
export const ABOUT_TYPOGRAPHY = {
  sectionTitle: "(ABOUT ME)",
  line1: "I DESIGN",
  line2: { text1: "SYSTEMS", highlight: true, text2: ", NOT JUST" },
  line3: "FEATURES — WITH",
  line4: { text1: "PERF", text2: "RMANCE," }, // We'll inject the icon between these
  line5: { text1: "SCALABILITY", highlight: true, text2: ", AND" },
  line6: { text1: "REAL-WORLD ", text2: "IMPACT.", highlight: true }
};
