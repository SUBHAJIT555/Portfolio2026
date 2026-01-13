import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
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
  {
    key: "html5",
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language", "Markup"],
  },
  {
    key: "css3",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language", "Styling"],
  },

  // Runtime Environment
  {
    key: "nodedotjs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  // Package Managers
  {
    key: "npm",
    title: "npm",
    href: "https://www.npmjs.com/",
    categories: ["Package Manager"],
  },
  {
    key: "yarn",
    title: "Yarn",
    href: "https://yarnpkg.com/",
    categories: ["Package Manager"],
  },
  {
    key: "pnpm",
    title: "pnpm",
    href: "https://pnpm.io/",
    categories: ["Package Manager"],
  },

  // Frameworks
  {
    key: "nextdotjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "electron",
    title: "Electron",
    href: "https://www.electronjs.org/",
    categories: ["Framework", "Desktop"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },

  // UI Libraries

  {
    key: "shadcnui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },

  // Animation Libraries
  {
    key: "framer",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },
  {
    key: "gsap",
    title: "GSAP",
    href: "https://gsap.com/",
    categories: ["Library", "Animation"],
  },

  // Navigation Libraries
  {
    key: "reactrouter",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
    theme: true,
  },

  // 3D Libraries
  {
    key: "threedotjs",
    title: "Three.js",
    href: "https://threejs.org/",
    categories: ["Library", "3D"],
  },

  // State Management
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
  },

  // Build Tools
  {
    key: "vite",
    title: "Vite",
    href: "https://vitejs.dev/",
    categories: ["Build Tool"],
  },

  // Version Control
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Platform", "Version Control"],
  },

  // Databases
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },

  // Containerization
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },

  // Hosting Platforms
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Platform", "Hosting"],
  },
  {
    key: "netlify",
    title: "Netlify",
    href: "https://www.netlify.com/",
    categories: ["Platform", "Hosting"],
  },

  // AI Tools
  {
    key: "openai",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
  {
    key: "githubcopilot",
    title: "GitHub Copilot",
    href: "https://github.com/features/copilot",
    categories: ["Tools", "AI"],
  },

  // Code Editors
  {
    key: "visualstudiocode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools", "Editor"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.sh/",
    categories: ["Tools", "Editor"],
  },
];
