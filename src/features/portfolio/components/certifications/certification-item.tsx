import { format } from "date-fns";
import Image from "next/image";

import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  return (
    <a
      className={cn(
        "group/cert block p-4 transition-[background-color] ease-out hover:bg-accent2",
        className
      )}
      href={certification.credentialURL}
      target="_blank"
      rel="noopener"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-muted ring-1 ring-edge">
        {certification.imageURL ? (
          <Image
            src={certification.imageURL}
            alt={certification.title}
            fill
            className="object-cover transition-[filter] duration-300 max-md:grayscale-0 md:grayscale md:group-hover/cert:grayscale-0"
            sizes="(max-width: 640px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <div className="flex size-full items-center justify-center p-4 text-center">
            <span className="font-mono text-xs text-muted-foreground">
              Certification Image
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-base leading-snug font-semibold text-balance underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <p className="text-sm text-muted-foreground">{certification.issuer}</p>

        {certification.credentialID ? (
          <p className="font-mono text-xs text-muted-foreground">
            <span className="sr-only">Credential ID: </span>
            {certification.credentialID}
          </p>
        ) : null}

        <time
          className="block text-sm text-muted-foreground"
          dateTime={new Date(certification.issueDate).toISOString()}
        >
          {format(new Date(certification.issueDate), "dd.MM.yyyy")}
        </time>
      </div>
    </a>
  );
}
