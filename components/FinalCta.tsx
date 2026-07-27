import { whatsappLinks } from "@/lib/site";
import { TrackedLink } from "./TrackedLink";

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <span className="eyebrow eyebrow-light">Atendimento em João Pessoa</span>
        <h2>Dê o primeiro passo para compreender sua saúde capilar.</h2>
        <p>
          Converse com a equipe e solicite uma avaliação presencial com a Dra.
          Edna Lima.
        </p>
        <TrackedLink
          className="button button-light"
          href={whatsappLinks.final}
          target="_blank"
          rel="noopener noreferrer"
          eventName="click_whatsapp_final"
        >
          Quero agendar minha avaliação
        </TrackedLink>
      </div>
    </section>
  );
}

