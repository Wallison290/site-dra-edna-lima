import Link from "next/link";
import { navigation, whatsappLinks } from "@/lib/site";
import { TrackedLink } from "./TrackedLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Dra. Edna Lima — início">
          <span className="monogram" aria-hidden="true">
            EL
          </span>
          <span className="brand-copy">
            <strong>Dra. Edna Lima</strong>
            <small>Tricologia &amp; Educação</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedLink
          className="button button-compact header-cta"
          href={whatsappLinks.hero}
          target="_blank"
          rel="noopener noreferrer"
          eventName="click_whatsapp_header"
        >
          Agendar avaliação
        </TrackedLink>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Navegação para dispositivos móveis">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <TrackedLink
              href={whatsappLinks.hero}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_mobile_menu"
            >
              Agendar avaliação
            </TrackedLink>
          </nav>
        </details>
      </div>
    </header>
  );
}

