import type { Registry } from "shadcn/schema";

import { blocks } from "./registry-blocks";
import { components } from "./registry-components";
import { examples } from "./registry-examples";
import { hook } from "./registry-hook";
import { lib } from "./registry-lib";

export const registry = {
  name: "subhajit-dhali",
  homepage: "https://subhajit-dhali.vercel.app/",
  items: [
    ...lib,
    ...hook,
    ...components,
    ...blocks,

    // Internal use only
    ...examples,
  ],
} satisfies Registry;
