"use client";

import Image from "next/image";
import { useState } from "react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Icon source mapping for technologies with alternative names or custom sources
const ICON_SOURCE_MAP: Record<string, { iconSet: string; iconName: string }> = {
  framer: { iconSet: "simple-icons", iconName: "framer" },
  visualstudiocode: { iconSet: "simple-icons", iconName: "visualstudiocode" },
  // Try alternative names for potentially missing icons
  cursor: { iconSet: "simple-icons", iconName: "cursor" },
  deepseek: { iconSet: "simple-icons", iconName: "deepseek" },
  shadcnui: { iconSet: "simple-icons", iconName: "shadcnui" },
};

function getIconUrl(key: string, isDark?: boolean): string {
  const mapping = ICON_SOURCE_MAP[key];
  const iconName = mapping?.iconName || key;
  const iconSet = mapping?.iconSet || "simple-icons";

  // In dark mode, use white color for better visibility
  if (isDark) {
    return `https://api.iconify.design/${iconSet}/${iconName}.svg?color=%23ffffff`;
  }

  // Use brand color from Simple Icons in light mode
  return `https://api.iconify.design/${iconSet}/${iconName}.svg`;
}

function TechIcon({
  tech,
  className,
}: {
  tech: { key: string; title: string; theme?: boolean };
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    // Fallback: show first letter of the tech name
    return (
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded bg-zinc-200 text-sm font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
          className
        )}
      >
        {tech.title.charAt(0)}
      </div>
    );
  }

  // Use brand colors in light mode, white icons in dark mode
  return (
    <>
      <Image
        src={getIconUrl(tech.key, false)}
        alt={`${tech.title} icon`}
        width={32}
        height={32}
        className={cn("block dark:hidden", className)}
        unoptimized
        onError={() => setError(true)}
      />
      <Image
        src={getIconUrl(tech.key, true)}
        alt={`${tech.title} icon`}
        width={32}
        height={32}
        className={cn("hidden dark:block", className)}
        unoptimized
        onError={() => setError(true)}
      />
    </>
  );
}

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <TooltipProvider>
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => {
              return (
                <li key={tech.key} className="flex">
                  <TooltipRoot>
                    <TooltipTrigger
                      render={
                        <a
                          href={tech.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={tech.title}
                        />
                      }
                    >
                      <TechIcon tech={tech} />
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>{tech.title}</p>
                    </TooltipContent>
                  </TooltipRoot>
                </li>
              );
            })}
          </ul>
        </TooltipProvider>
      </PanelContent>
    </Panel>
  );
}
