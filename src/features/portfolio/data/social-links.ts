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
    href: "https://facebook.com",
  },
  {
    icon: instagramIcon,
    title: "Instagram",
    description: "_ig.exe",
    href: "https://instagram.com",
  },
  {
    icon: xIcon,
    title: "X (formerly Twitter)",
    description: "@ttr_exe",
    href: "https://x.com",
  },
  {
    icon: linkedinIcon,
    title: "LinkedIn",
    description: "Subhajit Dhali",
    href: "https://linkedin.com",
  },
  {
    icon: githubIcon,
    title: "GitHub",
    description: "subhajit555",
    href: "https://github.com",
  },
  {
    icon: gmailIcon,
    title: "Gmail",
    description: "subhajitdhali0@gmail.com",
    href: "https://mail.google.com",
  },
];
