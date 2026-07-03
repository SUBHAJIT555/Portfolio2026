"use client";

import { useEffect } from "react";

import { useSound } from "@/hooks/use-sound";

const INTERACTIVE_SELECTOR = 'button, a[href], [role="button"]';

export function GlobalInteractionSounds() {
  const playLinkClick = useSound("/audio/linkclick.wav");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const interactive = target.closest(INTERACTIVE_SELECTOR);

      if (!(interactive instanceof HTMLElement)) {
        return;
      }

      if (interactive.closest('[data-click-sound="off"]')) {
        return;
      }

      if (
        (interactive instanceof HTMLButtonElement && interactive.disabled) ||
        interactive.getAttribute("aria-disabled") === "true"
      ) {
        return;
      }

      playLinkClick(0.45);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [playLinkClick]);

  return null;
}
