import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Subhajit",
  lastName: "Dhali",
  displayName: "Subhajit Dhali",
  username: "subhajitdhali",
  gender: "male",
  pronouns: "he/him",
  bio: "Building with code. Small details matter.",
  flipSentences: [
    "Building with code. Small details matter.",
    "Design Engineer",
    "Software Engineer",
    "Frontend Developer",
  ],
  address: "Kolkata, India",
  phoneNumber: "Kzk3MSA1MCA0NjAgMjYzMg==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  phoneNumbers: [
    "Kzk3MSA1MCA0NjAgMjYzMg==", // +971 50 460 2632
    "KzkxIDg0MyA2NDY0IDkzNw==", // +91 843 6464 937
  ],
  email: "c3ViaGFqaXRkaGFsaTBAZ21haWwuY29t", // base64 encoded
  website: "https://subhajit-dhali.vercel.app/",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Frontend Developer & UI Lead",
      company: "Baharnani Advertising LLC",
      website: "https://baharnani.com",
    },
    //
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
**Web Developer** specializing in **Frontend Development** with **2+ years of professional experience**. 

**Education:**
- **M.Tech** in Computer Science and Engineering (2021-2023)
- **B.Tech** in Computer Science and Engineering (2018-2021)


**Current Role:**
- **Frontend Developer** at **Baharnani Advertising LLC** — building modern, responsive web applications and user interfaces
- **Server maintenance** and infrastructure management
- **Mail services** administration and maintenance
- **Deployment and hosting** of web applications and services
- **Kiosk games** development for corporate events
- **3D interactive games** for exhibition stands and trade shows

**Technical Expertise:**
- **React**, **TypeScript**, **JavaScript**, **Node.js**, **Framer Motion**, **Three.js**, **Tailwind CSS**, **Shadcn/ui** and modern frontend libraries
- **Tools & Technologies**: **Git** / **GitHub**, **VS Code** / **Cursor**, **npm** / **yarn**, **Vite** / **Next.js**, **Docker**, **Postman**, **Chrome DevTools** , **▲Vercel** / **Netlify**
- Creating **responsive**, **performant**, and **visually engaging** web experiences
- Strong foundation in **computer science fundamentals** with advanced postgraduate knowledge

**Approach:**
- Focused on **continuous learning** and staying current with frontend technologies
- Passionate about solving **complex UI/UX challenges** and transforming designs into interactive applications
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "subhajitdhali",
    "subhajit dhali",
    "subhajit",
    "dhali",
    "subhajit dhali",
    "subhajit dhali",
  ],
  dateCreated: "2026-01-13", // YYYY-MM-DD
} satisfies User;
