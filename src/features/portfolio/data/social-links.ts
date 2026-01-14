import facebookIcon from "@/assets/socialicon/facebook.webp";
import githubIcon from "@/assets/socialicon/github.webp";
import gmailIcon from "@/assets/socialicon/gmail.webp";
import instagramIcon from "@/assets/socialicon/instagram.webp";
import linkedinIcon from "@/assets/socialicon/linkedin.webp";
import xIcon from "@/assets/socialicon/x.webp";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: facebookIcon,
    title: "Facebook",
    description: "Subhajit Dhali",
    href: "https://www.facebook.com/subhajit.dhali.7",
  },
  {
    icon: instagramIcon,
    title: "Instagram",
    description: "_ig.exe",
    href: "https://www.instagram.com/_ig.exe/",
  },
  {
    icon: xIcon,
    title: "X (formerly Twitter)",
    description: "@ttr_exe",
    href: "https://x.com/ttr_exe",
  },
  {
    icon: linkedinIcon,
    title: "LinkedIn",
    description: "Subhajit Dhali",
    href: "https://www.linkedin.com/in/subhajit-dhali-259a881a4/",
  },
  {
    icon: githubIcon,
    title: "GitHub",
    description: "subhajit555",
    href: "https://github.com/SUBHAJIT555",
  },
  {
    icon: gmailIcon,
    title: "Gmail",
    description: "subhajitdhali0@gmail.com",
    href: "mailto:subhajitdhali0@gmail.com",
  },
];
