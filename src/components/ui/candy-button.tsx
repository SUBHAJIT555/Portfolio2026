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
        "flex cursor-pointer items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]",
        "bg-linear-to-b from-[#3b82f6] to-[#2563eb] text-white",
        "shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset]",
        "ring ring-white/25 ring-inset ring-offset-2 ring-offset-[#2563eb]",
        "hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40",
        "w-full min-w-0 rounded-lg px-4 py-2.5 text-sm md:w-auto",
        "focus-visible:outline-none focus-visible:ring-white/40",
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
