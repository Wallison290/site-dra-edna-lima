import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedLink } from "@/components/TrackedLink";
import { whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cursos e MasterClasses",
  description:
    "Conheça as formações em tricologia e protocolos capilares do Instituto Elos.",
};

export default function CursosPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow">Cursos e MasterClasses</span>
            <h1>Conhecimento técnico para decisões clínicas mais conscientes.</h1>
            <p>
              Formações coordenadas pela Dra. Edna Lima para profissionais da
              saúde e estética em diferentes momentos da carreira.
            </p>
            <TrackedLink
              className="button"
              href={whatsappLinks.institute}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_cursos_hero"
            >
              Consultar turmas disponíveis
            </TrackedLink>
          </div>
          <div className="inner-hero-image">
            <Image
              unoptimized
              src="/images/instituto-elos-turma.png"
              alt="Turma do Instituto Elos"
              width={549}
              height={692}
              priority
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background-alt" to="background" />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Formações confirmadas"
            title="Escolha o próximo passo da sua formação."
            description="Links de checkout e datas de novas turmas serão atualizados assim que confirmados."
          />
          <div className="course-grid reveal">
            <article className="course-card">
              <span>MasterClass · Instituto Elos</span>
              <h2>REGENERA</h2>
              <p>
                Uma formação de aprofundamento em tratamentos do couro cabeludo
                com recursos contemporâneos.
              </p>
              <ul>
                <li>Exossomas</li>
                <li>Fatores de crescimento</li>
                <li>PDRN</li>
                <li>Bioestimulação capilar</li>
              </ul>
              <TrackedLink
                className="button"
                href={whatsappLinks.institute}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_curso_regenera"
              >
                Quero informações
              </TrackedLink>
            </article>

            <article className="course-card">
              <span>Curso · 100% online</span>
              <h2>Raciocínio Clínico para Protocolos Capilares</h2>
              <p>
                Formação para organizar avaliação, recursos e elaboração de
                condutas capilares com mais clareza.
              </p>
              <ul>
                <li>Raciocínio clínico</li>
                <li>Exames e recursos</li>
                <li>Alopecias e casos clínicos</li>
                <li>Protocolos e associação de tecnologias</li>
              </ul>
              <TrackedLink
                className="button"
                href={whatsappLinks.institute}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_curso_raciocinio"
              >
                Quero informações
              </TrackedLink>
            </article>
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background" to="background-alt" />

      <section className="section section-alt">
        <div className="container content-narrow">
          <SectionHeading
            eyebrow="Outros formatos"
            title="Uma agenda educacional em constante atualização."
            description="Além das formações apresentadas, o Instituto Elos desenvolve capacitações em estética e saúde e pode abrir turmas de imersões práticas."
            align="center"
          />
          <div className="center-action">
            <TrackedLink
              className="button"
              href={whatsappLinks.institute}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_agenda_cursos"
            >
              Consultar agenda de formações
            </TrackedLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
