import React from "react";

import { FluidGradientText } from "@/components/fluid-gradient-text";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com & ui.shadcn.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          recreated by{" "}
          <a
            className="link"
            href="https://x.com/ttr_exe"
            target="_blank"
            rel="noopener"
          >
            subhajit
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            {SOCIAL_LINKS.map((social, index) => {
              const getIcon = () => {
                switch (social.title.toLowerCase()) {
                  case "instagram":
                    return <Icons.instagram className="size-4" />;
                  case "facebook":
                    return <Icons.facebook className="size-4" />;
                  case "linkedin":
                    return <Icons.linkedin className="size-4" />;
                  case "x (formerly twitter)":
                  case "x":
                    return <Icons.x className="size-4" />;
                  case "gmail":
                    return <Icons.gmail className="size-4" />;
                  case "github":
                    return <Icons.github className="size-4" />;
                  default:
                    return null;
                }
              };

              return (
                <React.Fragment key={social.title}>
                  <a
                    className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getIcon()}
                    <span className="sr-only">{social.title}</span>
                  </a>
                  {index < SOCIAL_LINKS.length - 1 && <Separator />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-b border-edge bg-background">
        <div className="relative h-40 w-full overflow-hidden text-foreground md:h-52">
          <FluidGradientText text="subhajit" />
        </div>
      </div>

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-15 md:h-30" />
      </div>
    </footer>
  );
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />;
}
