import * as React from "react";

import { cn } from "@/lib/utils";

export type CandyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CandyButton({
  className,
  children = "Candy Button",
  type = "button",
  ...props
}: CandyButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl",
        "px-5 py-2.5 text-sm leading-[22px] font-medium tracking-[0.02em]",
        "text-primary-foreground transition-[filter,transform,opacity] duration-200 ease-out",
        "border border-[color-mix(in_oklab,var(--primary)_72%,var(--border))]",
        "bg-[radial-gradient(95%_60%_at_50%_75%,color-mix(in_oklab,var(--primary)_86%,var(--background))_0%,var(--primary)_100%)]",
        "after:pointer-events-none after:absolute after:top-px after:right-[10%] after:h-px after:w-[60%]",
        "after:bg-linear-to-r after:from-transparent after:via-primary-foreground/45 after:to-transparent",
        "hover:brightness-110 active:scale-95 active:rotate-[0.5deg]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default CandyButton;
