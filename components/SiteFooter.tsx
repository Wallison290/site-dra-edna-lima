import Link from "next/link";
import { navigation, site, whatsappLinks } from "@/lib/site";
import { TrackedLink } from "./TrackedLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="monogram monogram-light" aria-hidden="true">
              EL
            </span>
            <div>
              <strong>Dra. Edna Lima</strong>
              <small>Fisioterapia Dermatofuncional e Tricologia</small>
            </div>
          </div>
          <p className="footer-summary">
            Experiência clínica e educação profissional conectadas pelo cuidado,
            pela ciência e pelo raciocínio individualizado.
          </p>
        </div>

        <div>
          <h2>Navegação</h2>
          <nav className="footer-links" aria-label="Navegação do rodapé">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2>Atendimento</h2>
          <address>
            {site.address}
            <br />
            {site.hours}
          </address>
          <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
        </div>

        <div>
          <h2>Redes e contato</h2>
          <div className="footer-links">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram · Dra. Edna
            </a>
            <a
              href={site.institutoInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram · Instituto Elos
            </a>
            <TrackedLink
              href={whatsappLinks.fixed}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_footer"
            >
              Chamar no WhatsApp
            </TrackedLink>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dra. Edna Lima.</span>
        <span>João Pessoa · Paraíba</span>
      </div>
    </footer>
  );
}

