import { Zap, Workflow, Gem } from "lucide-react";
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
  { label: "Writing", href: "https://medium.com/@shivamsharma23jan", external: true },
];

export const HERO_DATA = {
  greet: "Hi, I'm",
  title: "Shivam Sharma",
  generalBtn: [
    { label: "Full Stack Developer" },
    { label: "Web3" }
  ],
  techStack: "{ JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, Tailwind CSS }",
  description: "I build scalable, performant web products — from React/Next.js frontends to Node.js & NestJS backends, with a soft spot for Web3.",
  ctaPrimary: { label: "See my dev work", href: "#portfolio" },
  ctaSecondary: { label: "Download CV", href: "/Shivam_Sharma_Resume.pdf" },
  social: [
    { label: "GitHub", href: "https://github.com/shivsh01", icon: <FaGithub size={24} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivam-sharma-859891250", icon: <FaLinkedin size={24} /> },
    { label: "Twitter", href: "https://x.com/S41130082", icon: <FaXTwitter size={24} /> }
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
      description: "My expertise spans React, Next.js, Node.js, and Web3. I care about building scalable systems and shipping real products."
    },
    {
      title: "Comfortable across the stack.",
      description: "From typed API design and multi-tenant backends to polished, animated frontends — I enjoy owning features end to end."
    },
    {
      title: "Hands-on experience.",
      description: "Built and shipped real-world applications at Credible, Decharge, Swyftin and Kajkarma using modern full-stack architectures."
    }
  ],
};

// Big headline shown in the About section.
export const ABOUT_TYPOGRAPHY = {
  sectionTitle: "(ABOUT ME)",
};

export const WORK_EXPERIENCE_DATA = [
  {
    id: "01",
    company: "Fintech Company",
    role: "Full Stack Developer",
    type: "Freelance",
    date: "Dec 2025 - Present",
    link: "",
    logoBg: "bg-primary/15",
    logoColor: "text-primary",
    icon: <Workflow size={24} />,
    responsibilities: [
      "Authored the multi-chain wallet layer (Solana + EVM) — wallet connection, auth and network switching.",
      "Built NestJS KYB onboarding (Persona) and payout/offramp pipelines."
    ],
    tags: ["Solana", "EVM", "NestJS", "Next.js", "TypeScript"]
  },
  {
    id: "02",
    company: "DECHARGE NETWORK",
    role: "Frontend Dev",
    type: "Freelance",
    date: "Oct 2025",
    link: "#",
    logoBg: "bg-primary/15",
    logoColor: "text-primary",
    icon: <Workflow size={24} />,
    responsibilities: [
      "Built the wallet-connection and multi-wallet-linking UI on a Solana + Base wallet-adapter stack.",
      "Led the frontend for the EV-charging web app — maps, QR charging and OTP auth."
    ],
    tags: ["Solana", "Base", "Next.js", "TypeScript", "TanStack Query"]
  },
  {
    id: "03",
    company: "SWYFTIN",
    role: "Full Stack Intern",
    type: "Internship",
    date: "Apr 2025 – Dec 2025",
    link: "#",
    logoBg: "bg-primary/15",
    logoColor: "text-primary",
    icon: <Zap size={24} />,
    responsibilities: [
      "Led the guest web app: a dynamic check-in flow with document upload, e-signature and PDF generation.",
      "Integrated Razorpay payments and a resilient AWS S3 upload pipeline.",
      "Built a WhatsApp business-communications suite (chat, templates, broadcasts) on the staff app."
    ],
    tags: ["Next.js", "TanStack Query", "Zustand", "Razorpay"]
  },
  {
    id: "04",
    company: "KAJKARMA",
    role: "Backend Developer (Intern)",
    type: "Internship",
    date: "Oct 2025",
    link: "#",
    logoBg: "bg-primary/15",
    logoColor: "text-primary",
    icon: <Gem size={24} />,
    responsibilities: [
      "Solely built the backend for a diamond-inventory platform (TypeScript / Express / MongoDB).",
      "Implemented Stripe subscription payments and Excel bulk import for catalog management."
    ],
    tags: ["TypeScript", "Express", "MongoDB", "Stripe"]
  }
];

// Clean, uniform monospace tech tags — grouped, no mismatched icons.
export const TECH_STACK_DATA = {
  heading: "(SKILLS)",
  title: "Tech",
  titleHighlight: "Stack",
  categories: [
    {
      name: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "C"]
    },
    {
      name: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Express", "NestJS", "Tailwind CSS", "TanStack Query", "Zustand", "Redux Toolkit", "Framer Motion"]
    },
    {
      name: "Databases & Infra",
      items: ["MongoDB", "MySQL", "Redis", "AWS S3", "Docker", "RabbitMQ", "Git", "Vercel"]
    },
    {
      name: "Web3",
      items: ["Solana web3.js", "Wallet Adapter", "wagmi + viem", "Ethers.js"]
    },
    {
      name: "Familiar",
      items: ["Rust", "Anchor (Solana programs)"]
    }
  ]
};

export const PROJECTS_DATA = [
  {
    title: "Multi-Tenant ERP",
    tech: "Node.js • TypeScript • MongoDB • AWS",
    description: "SaaS ERP with database-per-tenant isolation, bitwise RBAC, JWT tenant resolution and real-time updates over SSE.",
    github: "https://github.com/shivsh01/CBS-Backend",
    image: "/image.png"
  },
  {
    title: "AyurConnect",
    tech: "MERN • Daily.co • Google OAuth",
    description: "Doctor–patient telemedicine platform with OTP auth, role-based panels, appointment booking and in-app video consultations.",
    github: "https://github.com/shivsh01/AyurConnect"
  },
  {
    title: "Teamboard",
    tech: "Next.js • Express • Zod",
    description: "Multi-tenant task manager in a typed monorepo — workspace isolation, role-based access control and shared Zod schemas.",
    github: "https://github.com/shivsh01/Teamboard-KNOW-AI"
  },
  {
    title: "Video Call",
    tech: "React • WebRTC • Socket.IO",
    description: "Peer-to-peer video calling with room-based joining, ICE negotiation and remote-track management.",
    github: "https://github.com/shivsh01/Video_call"
  },
  {
    title: "Store-Env",
    tech: "Next.js • TypeScript • CryptoJS",
    description: "Secure platform for managing and encrypting environment variables with client-side CryptoJS encryption.",
    github: "https://github.com/shivsh01/StoreEnv",
    live: "https://store-env-lilac.vercel.app/",
    image: "/store-env.png"
  },
  {
    title: "The Rankers",
    tech: "React.js • Express • MongoDB",
    description: "Dynamic web app using the Octokit API to visualize GitHub data in real time with a leaderboard ranking.",
    github: "https://github.com/shivsh01/THE_RANKERS",
    live: "https://the-rankers.vercel.app/",
    image: "/rankers.png"
  }
];

export const CONTACT_DATA = {
  titlePrefix: "Let's",
  titleHighlight: "[work]",
  titleSuffix: "together",
  subtitle: "Open to full-time, remote roles or freelance projects.",
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your message",
    buttonText: "Send Message"
  }
};
