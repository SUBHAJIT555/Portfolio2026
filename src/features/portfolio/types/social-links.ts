import type { StaticImageData } from "next/image";

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) or imported StaticImageData shown beside the title. */
  icon: string | StaticImageData;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};
