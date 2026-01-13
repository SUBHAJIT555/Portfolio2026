import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://subhajit-dhali.vercel.app/",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
];

export const GITHUB_USERNAME = "SUBHAJIT555";
export const SOURCE_CODE_GITHUB_REPO = "subhajit555/Portfolio2026";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/SUBHAJIT555/Portfolio2026";

export const SPONSORSHIP_URL = "https://github.com/SUBHAJIT555";

export const UTM_PARAMS = {
  utm_source: "https://subhajit-dhali.vercel.app/",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
