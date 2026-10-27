"use client";

import { cn } from "@/lib/utils";

import { TECH_STACK, TECH_STACK_SECTIONS } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const ICON_SOURCE_MAP: Record<string, string> = {
  framer: "framer",
  visualstudiocode: "visualstudiocode",
  cursor: "cursor",
  shadcnui: "shadcnui",
  postgresql: "postgresql",
  supabase: "supabase",
  radixui: "radixui",
  baseui: "mui",
  gemini: "googlegemini",
  claude: "claude",
  css3: "css",
  gsap: "gsap",
  bootstrap: "bootstrap",
};

const ICON_VERSION: Record<string, string> = {
  visualstudiocode: "11",
};

const LOCAL_ICON_URL: Record<string, string> = {
  shaders: "/icon/shaders.svg",
};

function getIconUrl(key: string): string {
  if (LOCAL_ICON_URL[key]) return LOCAL_ICON_URL[key];
  const iconName = ICON_SOURCE_MAP[key] || key;
  const version = ICON_VERSION[key] ?? "15";
  return `https://cdn.jsdelivr.net/npm/simple-icons@${version}/icons/${iconName}.svg`;
}

function TechIcon({
  tech,
  className,
}: {
  tech: { key: string; title: string; theme?: boolean };
  className?: string;
}) {
  return (
    <img
      src={getIconUrl(tech.key)}
      alt=""
      width={14}
      height={14}
      className={cn("size-3.5 shrink-0 brightness-0 dark:invert", className)}
    />
  );
}

function TechChip({ tech }: { tech: (typeof TECH_STACK)[number] }) {
  return (
    <a
      href={tech.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tech.title}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.8rem] leading-none",
        "border-zinc-200 bg-white text-zinc-900",
        "shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        "transition-[box-shadow,border-color] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08)]",
        "dark:border-white/15 dark:bg-black/50 dark:text-white/95",
        "dark:shadow-[0_1px_3px_rgba(0,0,0,0.4)]",
        "dark:hover:border-white/25 dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
      )}
    >
      <TechIcon tech={tech} className="size-3.5 shrink-0" />
      <span className="font-medium whitespace-nowrap">{tech.title}</span>
    </a>
  );
}

export function TeckStack() {
  return (
    <Panel id="stack" className="border-b border-edge">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "p-0",
          "[--pattern-foreground:var(--color-zinc-950)]/8 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-background/95 dark:bg-zinc-950/75"
        )}
      >
        {TECH_STACK_SECTIONS.map((section, index) => {
          const items = TECH_STACK.filter((tech) =>
            tech.categories.includes(section)
          );

          if (items.length === 0) return null;

          return (
            <div
              key={section}
              className="grid gap-3 border-b border-edge px-4 py-4 last:border-b-0 sm:grid-cols-[11.5rem_1fr] sm:items-start"
            >
              <div className="flex items-baseline gap-2 font-mono text-sm text-muted-foreground">
                <span className="tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section}</span>
              </div>

              <ul className="flex flex-wrap gap-2 select-none">
                {items.map((tech) => (
                  <li key={tech.key} className="flex">
                    <TechChip tech={tech} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </PanelContent>
    </Panel>
  );
}
