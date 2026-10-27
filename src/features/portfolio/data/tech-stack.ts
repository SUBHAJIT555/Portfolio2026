import type { TechStack } from "../types/tech-stack";

export const TECH_STACK_SECTIONS = [
  "Language",
  "Frontend",
  "Backend & Database",
  "Workflow & AI",
] as const;

export type TechStackSection = (typeof TECH_STACK_SECTIONS)[number];

export const TECH_STACK: TechStack[] = [
  // Language
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  // Frontend — core first
  {
    key: "nextdotjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Frontend"],
    theme: true,
  },
  {
    key: "vite",
    title: "Vite",
    href: "https://vitejs.dev/",
    categories: ["Frontend"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Frontend"],
  },
  {
    key: "html5",
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Frontend"],
  },
  {
    key: "css3",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Frontend"],
  },
  {
    key: "bootstrap",
    title: "Bootstrap",
    href: "https://getbootstrap.com/",
    categories: ["Frontend"],
  },
  {
    key: "shaders",
    title: "Shaders",
    href: "https://shaders.com/",
    categories: ["Frontend"],
  },
  {
    key: "baseui",
    title: "Base UI",
    href: "https://base-ui.com/",
    categories: ["Frontend"],
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Frontend"],
  },
  {
    key: "shadcnui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Frontend"],
    theme: true,
  },
  {
    key: "framer",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Frontend"],
  },
  {
    key: "gsap",
    title: "GSAP",
    href: "https://gsap.com/",
    categories: ["Frontend"],
  },
  {
    key: "reactrouter",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Frontend"],
    theme: true,
  },
  {
    key: "threedotjs",
    title: "Three.js",
    href: "https://threejs.org/",
    categories: ["Frontend"],
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["Frontend"],
  },
  {
    key: "electron",
    title: "Electron",
    href: "https://www.electronjs.org/",
    categories: ["Frontend"],
  },

  // Backend & Database — new tools first
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Backend & Database"],
  },
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Backend & Database"],
  },
  {
    key: "nodedotjs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Backend & Database"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Backend & Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Backend & Database"],
  },

  // Workflow & AI — tools first, then AI
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "visualstudiocode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "yarn",
    title: "Yarn",
    href: "https://yarnpkg.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "pnpm",
    title: "pnpm",
    href: "https://pnpm.io/",
    categories: ["Workflow & AI"],
  },
  {
    key: "npm",
    title: "npm",
    href: "https://www.npmjs.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Workflow & AI"],
    theme: true,
  },
  {
    key: "netlify",
    title: "Netlify",
    href: "https://www.netlify.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "gemini",
    title: "Gemini",
    href: "https://gemini.google.com/",
    categories: ["Workflow & AI"],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    categories: ["Workflow & AI"],
  },
  {
    key: "openai",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Workflow & AI"],
    theme: true,
  },
  {
    key: "githubcopilot",
    title: "GitHub Copilot",
    href: "https://github.com/features/copilot",
    categories: ["Workflow & AI"],
  },
];
