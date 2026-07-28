import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/FinalCta";
import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedLink } from "@/components/TrackedLink";
import { whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Atendimento capilar",
  description:
    "Avaliação tricológica presencial para queda de cabelo, calvície e alterações do couro cabeludo em João Pessoa.",
};

export default function AtendimentoPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow">Atendimento capilar</span>
            <h1>Compreender a causa começa por uma avaliação cuidadosa.</h1>
            <p>
              Atendimento presencial para pessoas que percebem queda, redução de
              volume, calvície ou alterações no couro cabeludo.
            </p>
            <TrackedLink
              className="button"
              href={whatsappLinks.hero}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_atendimento_hero"
            >
              Agendar minha avaliação
            </TrackedLink>
          </div>
          <div className="inner-hero-image">
            <Image
              unoptimized
              src="/images/dra-edna-avaliacao-capilar.png"
              alt="Avaliação capilar com a Dra. Edna Lima"
              width={943}
              height={1667}
              priority
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background-alt" to="background" />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Queixas atendidas"
            title="Cada couro cabeludo apresenta uma história diferente."
            description="A avaliação não parte de uma resposta pronta. Ela considera a queixa, o histórico e os sinais observados."
          />
          <div className="concern-grid reveal">
            {[
              ["01", "Queda de cabelo", "Perda percebida no banho, ao pentear ou ao longo do dia."],
              ["02", "Calvície", "Redução progressiva de densidade e volume capilar."],
              ["03", "Alterações do couro cabeludo", "Sinais, desconfortos ou condições que exigem análise profissional."],
            ].map(([number, title, text]) => (
              <article className="lined-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background" to="background-alt" />

      <section className="section section-alt">
        <div className="container content-narrow">
          <SectionHeading
            eyebrow="Processo de cuidado"
            title="Avaliar, orientar e acompanhar."
          />
          <div className="steps reveal">
            <article>
              <span>01</span>
              <div>
                <h3>Escuta e histórico</h3>
                <p>
                  A consulta começa pela compreensão da queixa, do tempo de
                  evolução e das informações relevantes para o caso.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Avaliação tricológica</h3>
                <p>
                  O couro cabeludo e os fios são observados para organizar o
                  raciocínio clínico.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Orientação individualizada</h3>
                <p>
                  Os próximos passos são definidos de acordo com as necessidades
                  identificadas, sem fórmulas genéricas.
                </p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>Acompanhamento</h3>
                <p>
                  A evolução pode ser acompanhada e a condução ajustada quando
                  necessário.
                </p>
              </div>
            </article>
          </div>
          <TrackedLink
            className="button"
            href={whatsappLinks.assessment}
            target="_blank"
            rel="noopener noreferrer"
            eventName="click_whatsapp_atendimento_processo"
          >
            Agendar avaliação pelo WhatsApp
          </TrackedLink>
        </div>
      </section>

      <SectionDivider variant="straight" from="background-alt" to="background" />

      <section className="section">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="Antes da consulta"
            title="O que você precisa saber."
            description="A equipe pode orientar sobre horários e disponibilidade pelo WhatsApp."
          />
          <div className="faq-list reveal">
            <details>
              <summary>Preciso ter um diagnóstico antes de agendar?</summary>
              <p>
                Não. A avaliação serve para compreender sua queixa e orientar o
                caminho mais adequado.
              </p>
            </details>
            <details>
              <summary>O atendimento é presencial?</summary>
              <p>
                Sim. A clínica está localizada na Torre, em João Pessoa – PB.
              </p>
            </details>
            <details>
              <summary>Quais são os horários?</summary>
              <p>Segunda a sexta-feira, das 8h às 18h.</p>
            </details>
            <details>
              <summary>O tratamento é igual para todas as pessoas?</summary>
              <p>
                Não. A orientação depende do histórico, da avaliação e das
                necessidades identificadas em cada caso.
              </p>
            </details>
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" from="background" to="primary" />

      <FinalCta />
    </PageShell>
  );
}
