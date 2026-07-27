"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string;
  children: ReactNode;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function TrackedLink({
  eventName,
  children,
  onClick,
  ...props
}: Props) {
  return (
    <a
      {...props}
      data-event={eventName}
      onClick={(event) => {
        if (eventName) {
          window.dataLayer?.push({ event: eventName });
          window.dispatchEvent(
            new CustomEvent("site:cta", { detail: { event: eventName } }),
          );
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

