"use client";

import { PhoneIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type PhoneItemProps = {
  phoneNumber?: string;
  phoneNumbers?: string[];
};

export function PhoneItem({ phoneNumber, phoneNumbers }: PhoneItemProps) {
  const isClient = useIsClient();

  // Use phoneNumbers array if available, otherwise fall back to single phoneNumber
  const numbers =
    phoneNumbers && phoneNumbers.length > 0
      ? phoneNumbers
      : phoneNumber
        ? [phoneNumber]
        : [];

  if (numbers.length === 0) {
    return null;
  }

  return (
    <IntroItem>
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent>
        {numbers.map((num, index) => {
          const decoded = decodePhoneNumber(num);
          const formatted = isClient
            ? formatPhoneNumber(decoded)
            : "[Phone protected]";
          const telHref = isClient ? `tel:${decoded.replace(/\s/g, "")}` : "#";

          return (
            <span key={index}>
              <IntroItemLink
                href={telHref}
                aria-label={isClient ? `Call ${formatted}` : "Phone number"}
              >
                {formatted}
              </IntroItemLink>
              {index < numbers.length - 1 && (
                <span className="text-muted-foreground" aria-hidden="true">
                  {" / "}
                </span>
              )}
            </span>
          );
        })}
      </IntroItemContent>
    </IntroItem>
  );
}
