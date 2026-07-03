"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import type { NavItem } from "@/types/nav";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(pathname);

  useEffect(() => {
    const syncActiveId = () => {
      setActiveId(window.location.hash || pathname);
    };

    syncActiveId();
    window.addEventListener("hashchange", syncActiveId);
    window.addEventListener("popstate", syncActiveId);

    return () => {
      window.removeEventListener("hashchange", syncActiveId);
      window.removeEventListener("popstate", syncActiveId);
    };
  }, [pathname]);

  return <Nav className="max-sm:hidden" items={items} activeId={activeId} />;
}
