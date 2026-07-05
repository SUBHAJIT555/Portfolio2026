import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";
import { CertificationItem } from "./certification-item";

export function CertificationList({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div className="relative pt-4">
      <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-edge" />
        <div className="border-l border-edge" />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <li
            key={`${certification.title}-${certification.issueDate}`}
            className={cn(
              "max-sm:screen-line-before max-sm:screen-line-after",
              "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
            )}
          >
            <CertificationItem certification={certification} />
          </li>
        ))}

        {certifications.length === 0 && (
          <li className="screen-line-before screen-line-after p-4">
            <p className="font-mono text-sm text-muted-foreground">
              No certifications found.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
