import type { ReactNode } from "react";
import { ScrollFx } from "./ScrollFx";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TrackedLink } from "./TrackedLink";
import { whatsappLinks } from "@/lib/site";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollFx />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <TrackedLink
        className="floating-whatsapp"
        href={whatsappLinks.fixed}
        target="_blank"
        rel="noopener noreferrer"
        eventName="click_whatsapp_fixo"
        aria-label="Falar com a clínica pelo WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        <strong>Falar com a clínica</strong>
      </TrackedLink>
    </>
  );
}

