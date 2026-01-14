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
    "Kzk3MSA1MCA0NjAgMjYzMg==", // +971  base64 encoded
    "KzkxIDg0MyA2NDY0IDkzNw==", // +91 base64 encoded
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

  about: `
**Web Developer** specializing in **Frontend Development** with **2+ years of professional experience**. 

**Education:**
- **Master of Technology** in Computer Science and Engineering (2021-2023)
- **Bachelor of Technology** in Computer Science and Engineering (2018-2021)


**Current Role & Responsibilities:**
- **Web Developer** at **[Baharnani Advertising LLC](https://baharnani.com)** — building modern, responsive web applications, user interfaces, and event tech.
- **Server maintenance** and infrastructure management.
- **Mail services** administration and maintenance.
- **Deployment and hosting** of web applications and services.
- **Kiosk games** development for corporate events.
- **3D interactive games** for exhibition stands and trade shows.

**Technical Expertise:**
- React, TypeScript, JavaScript, Node.js, Framer Motion, Three.js, Tailwind CSS, Shadcn/ui, npm / yarn, Vite / Next.js, and modern frontend libraries.
- Tools & Technologies: Git / GitHub, VS Code / Cursor,  Docker, Postman, Chrome DevTools , ▲Vercel / Netlify.
- Creating **responsive**, **performant**, and **visually engaging** web experiences.
- Strong foundation in **computer science fundamentals** with advanced postgraduate knowledge.

**Approach:**
- Focused on **continuous learning** and staying current with frontend technologies.
- Passionate about solving **complex UI/UX challenges** and transforming designs into interactive applications.
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/hi.mp3",
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
