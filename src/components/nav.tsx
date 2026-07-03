import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const hrefStr = String(href);
        const isHashLink = hrefStr.startsWith("/#");
        const hashId = isHashLink ? hrefStr.substring(2) : null;
        const hashHref = hashId ? `#${hashId}` : null;

        const active = isHashLink
          ? hashHref !== null && (activeId === hrefStr || activeId === hashHref)
          : activeId === hrefStr ||
            (hrefStr === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(hrefStr));

        return (
          <NavItem key={hrefStr} href={href} active={!!active}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

export function NavItem({
  active,
  href,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  const hrefStr = String(href);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hrefStr.startsWith("/#") || hrefStr.startsWith("#")) {
      e.preventDefault();
      const targetId = hrefStr.startsWith("/#")
        ? hrefStr.substring(2)
        : hrefStr.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${targetId}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
