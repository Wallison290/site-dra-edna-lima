import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedLink } from "@/components/TrackedLink";
import { site, whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e localização",
  description:
    "Entre em contato com a clínica da Dra. Edna Lima em João Pessoa e consulte horários de atendimento.",
};

export default function ContatoPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container content-narrow inner-hero-copy">
          <span className="eyebrow">Contato e localização</span>
          <h1>Fale com a equipe da Dra. Edna Lima.</h1>
          <p>
            Solicite informações sobre avaliação capilar, horários de
            atendimento ou formações do Instituto Elos.
          </p>
          <TrackedLink
            className="button"
            href={whatsappLinks.fixed}
            target="_blank"
            rel="noopener noreferrer"
            eventName="click_whatsapp_contato_hero"
          >
            Falar no WhatsApp
          </TrackedLink>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          <div>
            <SectionHeading
              eyebrow="Clínica em João Pessoa"
              title="Atendimento presencial na Torre."
              description="A estrutura possui entrada e estacionamento acessíveis para cadeirantes."
            />
            <div className="contact-panel">
              <article>
                <small>Endereço</small>
                <address>{site.address}</address>
              </article>
              <article>
                <small>Horários</small>
                <strong>{site.hours}</strong>
              </article>
              <article>
                <small>WhatsApp e telefone</small>
                <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
              </article>
              <article>
                <small>Instagram</small>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @draednalima
                </a>
              </article>
            </div>
            <div className="inline-actions" style={{ marginTop: 32 }}>
              <TrackedLink
                className="button"
                href={whatsappLinks.fixed}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_whatsapp_contato"
              >
                Chamar no WhatsApp
              </TrackedLink>
              <a
                className="text-link"
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </a>
            </div>
          </div>
          <div className="map-card">
            <span className="map-line map-line-one" />
            <span className="map-line map-line-two" />
            <span className="map-line map-line-three" />
            <div className="map-pin" aria-hidden="true">
              <span />
            </div>
            <strong>Torre</strong>
            <small>João Pessoa · PB</small>
            <p>Av. Nossa Senhora de Fátima, 1783</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

