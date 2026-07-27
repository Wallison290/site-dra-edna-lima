import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedLink } from "@/components/TrackedLink";
import { whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instituto Elos",
  description:
    "Cursos, MasterClasses e imersões em tricologia, saúde e estética coordenados pela Dra. Edna Lima.",
};

export default function InstitutoPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow">Instituto Elos</span>
            <h1>Formação continuada conectada à realidade clínica.</h1>
            <p>
              Capacitação para profissionais da saúde e estética que buscam
              ampliar sua segurança técnica em tricologia e protocolos
              capilares.
            </p>
            <div className="inline-actions">
              <Link className="button" href="/cursos">
                Conhecer os cursos
              </Link>
              <TrackedLink
                className="text-link"
                href={whatsappLinks.institute}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_whatsapp_instituto_hero"
              >
                Falar com o Instituto
              </TrackedLink>
            </div>
          </div>
          <div className="inner-hero-image">
            <Image
              unoptimized
              src="/images/instituto-elos-formacao.png"
              alt="Formação profissional do Instituto Elos"
              width={1089}
              height={1444}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Educação profissional"
            title="Aprendizado estruturado por quem vive a prática."
            description="O Instituto Elos é o braço educacional coordenado pela Dra. Edna Lima, reunindo conteúdo técnico, raciocínio clínico e experiências práticas."
            align="center"
          />
          <div className="fact-grid">
            <article>
              <strong>Online</strong>
              <span>Cursos para profissionais de todo o Brasil</span>
            </article>
            <article>
              <strong>MasterClasses</strong>
              <span>Temas atuais e aprofundamento técnico</span>
            </article>
            <article>
              <strong>Imersões</strong>
              <span>Experiências práticas em turmas específicas</span>
            </article>
            <article>
              <strong>Docência</strong>
              <span>Integração entre formação e experiência clínica</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container editorial-grid">
          <div className="editorial-image">
            <Image
              unoptimized
              src="/images/instituto-elos-turma.png"
              alt="Dra. Edna Lima com turma de formação profissional"
              width={549}
              height={692}
            />
            <span className="image-caption">Formação e imersão profissional</span>
          </div>
          <div className="editorial-copy">
            <SectionHeading
              eyebrow="Para quem é"
              title="Profissionais que desejam tomar decisões clínicas com mais clareza."
            />
            <p>
              As formações são direcionadas a fisioterapeutas, esteticistas,
              biomédicos e demais profissionais da saúde e estética, respeitando
              a área de atuação de cada participante.
            </p>
            <p>
              O objetivo é organizar o conhecimento para que exames, recursos,
              tecnologias e cosméticos sejam compreendidos dentro de um
              raciocínio clínico consistente.
            </p>
            <Link className="button" href="/cursos">
              Ver formações disponíveis
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <span className="eyebrow eyebrow-light">Instituto Elos</span>
          <h2>Receba informações sobre cursos, turmas e próximas imersões.</h2>
          <p>
            Entre em contato com a equipe e informe sua área de atuação e a
            formação de interesse.
          </p>
          <TrackedLink
            className="button button-light"
            href={whatsappLinks.institute}
            target="_blank"
            rel="noopener noreferrer"
            eventName="click_whatsapp_instituto_final"
          >
            Quero conhecer os cursos
          </TrackedLink>
        </div>
      </section>
    </PageShell>
  );
}
