import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCta } from "@/components/FinalCta";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { TrackedLink } from "@/components/TrackedLink";
import { site, whatsappLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tricologia em João Pessoa e formação profissional",
  description:
    "Avaliação tricológica com a Dra. Edna Lima em João Pessoa e cursos do Instituto Elos para profissionais da saúde e estética.",
};

const concerns = [
  {
    number: "01",
    title: "Queda de cabelo",
    text: "Investigação clínica cuidadosa para compreender a queixa e orientar os próximos passos.",
  },
  {
    number: "02",
    title: "Calvície",
    text: "Avaliação individualizada para homens e mulheres que percebem redução de volume ou densidade.",
  },
  {
    number: "03",
    title: "Couro cabeludo",
    text: "Atenção a alterações, desconfortos e sinais que precisam ser analisados de forma profissional.",
  },
];

const steps = [
  {
    number: "01",
    title: "Avaliação",
    text: "Escuta da queixa, histórico e análise cuidadosa do couro cabeludo.",
  },
  {
    number: "02",
    title: "Plano individualizado",
    text: "Definição de uma conduta coerente com as necessidades identificadas.",
  },
  {
    number: "03",
    title: "Acompanhamento",
    text: "Orientação contínua para observar a evolução e ajustar o cuidado.",
  },
];

const faqs = [
  {
    question: "Como funciona a avaliação capilar?",
    answer:
      "O atendimento começa pela compreensão da sua queixa e do histórico, seguida pela avaliação do couro cabeludo. A partir disso, a Dra. Edna orienta os próximos passos de forma individualizada.",
  },
  {
    question: "Preciso saber qual é o meu problema antes de agendar?",
    answer:
      "Não. A avaliação existe justamente para compreender os sinais percebidos e orientar a condução mais adequada para cada caso.",
  },
  {
    question: "O atendimento é presencial?",
    answer:
      "Sim. Os atendimentos clínicos são presenciais, na Torre, em João Pessoa – PB.",
  },
  {
    question: "Quais são os horários de atendimento?",
    answer: "De segunda a sexta-feira, das 8h às 18h.",
  },
  {
    question: "Os cursos do Instituto Elos são online ou presenciais?",
    answer:
      "O Curso de Raciocínio Clínico para Elaboração de Protocolos Capilares é 100% online. MasterClasses e imersões podem ter formatos específicos, informados em cada turma.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Tricologia e saúde capilar</span>
            <h1>
              Ciência e cuidado para compreender a{" "}
              <em>saúde dos seus cabelos.</em>
            </h1>
            <p>
              Avaliação tricológica presencial em João Pessoa, com uma
              trajetória de mais de duas décadas dedicada à saúde, à estética e
              à formação profissional.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button"
                href={whatsappLinks.hero}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_whatsapp_hero"
              >
                Falar no WhatsApp
              </TrackedLink>
              <Link className="text-link" href="#instituto">
                Sou profissional · conhecer o Instituto Elos
              </Link>
            </div>
            <div className="hero-meta">
              <span>Atendimento presencial</span>
              <span>João Pessoa · PB</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Dra. Edna Lima">
            <span className="hero-frame" aria-hidden="true" />
            <Image
              unoptimized
              src="/images/dra-edna-hero.png"
              alt="Dra. Edna Lima, fisioterapeuta dermatofuncional e tricologista"
              width={1098}
              height={1433}
              priority
            />
            <div className="hero-signature">
              <strong>Dra. Edna Lima</strong>
              <span>Fisioterapeuta Dermatofuncional e Tricologista</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Indicadores de confiança">
        <div className="container trust-grid">
          <div>
            <strong>20+</strong>
            <span>anos de atuação</span>
          </div>
          <div>
            <strong>2013</strong>
            <span>especialização em tricologia</span>
          </div>
          <div>
            <strong>4,7</strong>
            <span>avaliação no Google</span>
          </div>
          <div>
            <strong>UFPB</strong>
            <span>formação em Fisioterapia</span>
          </div>
        </div>
      </section>

      <section className="section" id="atendimento">
        <div className="container">
          <SectionHeading
            eyebrow="Quando procurar uma avaliação"
            title="Queixas capilares merecem uma análise individualizada."
            description="A percepção de queda, redução de volume ou alterações no couro cabeludo não deve ser tratada de forma genérica. O primeiro passo é compreender o seu caso."
          />
          <div className="concern-grid">
            {concerns.map((item) => (
              <article className="lined-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <TrackedLink
              className="button"
              href={whatsappLinks.concerns}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_queixas"
            >
              Quero avaliar meu caso
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container editorial-grid">
          <div className="editorial-image">
            <Image
              unoptimized
              src="/images/dra-edna-sobre.png"
              alt="Dra. Edna Lima em congresso de tricologia"
              width={520}
              height={691}
            />
            <span className="image-caption">Autoridade clínica e educacional</span>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">Sobre a Dra. Edna Lima</span>
            <h2>Mais de 20 anos de experiência clínica e educacional.</h2>
            <p>
              Fisioterapeuta formada pela UFPB, Dra. Edna atua na Estética e na
              Fisioterapia Dermatofuncional desde o início dos anos 2000 e se
              dedica à Tricologia desde 2013.
            </p>
            <p>
              Sua trajetória reúne atendimento clínico, docência em graduação e
              pós-graduação, educação vinculada à ABMED e participação em
              experiências e palestras internacionais.
            </p>
            <ul className="credential-list">
              <li>Fisioterapia · UFPB</li>
              <li>Tricologia desde 2013</li>
              <li>Docência e pós-graduação</li>
              <li>Atuação educacional e internacional</li>
            </ul>
            <Link className="text-link" href="/dra-edna">
              Conhecer sua trajetória
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div className="process-copy">
            <SectionHeading
              eyebrow="Como funciona"
              title="Um cuidado construído a partir das necessidades do seu couro cabeludo."
              description="A avaliação organiza o caminho: primeiro compreender, depois definir e acompanhar."
            />
            <div className="steps">
              {steps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <TrackedLink
              className="button"
              href={whatsappLinks.assessment}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_avaliacao"
            >
              Agendar avaliação pelo WhatsApp
            </TrackedLink>
          </div>
          <div className="process-image">
            <Image
              unoptimized
              src="/images/dra-edna-avaliacao-capilar.png"
              alt="Dra. Edna Lima realizando avaliação capilar"
              width={943}
              height={1667}
            />
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container">
          <SectionHeading
            eyebrow="Confiança construída no atendimento"
            title="Experiências que reforçam atenção, cuidado e presença."
            align="center"
          />
          <div className="rating">
            <strong>4,7</strong>
            <div>
              <span aria-label="5 estrelas">★★★★★</span>
              <small>Avaliação da clínica no Google</small>
            </div>
          </div>
          <div className="testimonial-grid">
            <blockquote>
              <p>“Excelente espaço e profissionais super atenciosos.”</p>
              <cite>Avaliação publicada no Google</cite>
            </blockquote>
            <blockquote>
              <p>“Ótimo atendimento.”</p>
              <cite>Avaliação publicada no Google</cite>
            </blockquote>
            <blockquote>
              <p>
                “Cuidado que continua depois da consulta, com atenção também no
                relacionamento.”
              </p>
              <cite>Compromisso da equipe</cite>
            </blockquote>
          </div>
          <div className="center-action">
            <TrackedLink
              className="button"
              href={whatsappLinks.proof}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_resultados"
            >
              Quero avaliar meu caso
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section institute-section" id="instituto">
        <div className="container institute-grid">
          <div className="institute-visual">
            <Image
              unoptimized
              src="/images/instituto-elos-formacao.png"
              alt="Instituto Elos — formação profissional em tricologia"
              width={1089}
              height={1444}
            />
          </div>
          <div>
            <span className="eyebrow eyebrow-light">Instituto Elos</span>
            <h2>Formação profissional conectada à prática clínica.</h2>
            <p>
              O braço educacional coordenado pela Dra. Edna Lima reúne formação
              continuada para profissionais da saúde e estética que desejam
              ampliar seu raciocínio clínico em tricologia e protocolos
              capilares.
            </p>
            <div className="course-mini-grid">
              <article>
                <span>MasterClass</span>
                <h3>REGENERA</h3>
                <p>
                  Exossomas, fatores de crescimento e PDRN aplicados aos
                  tratamentos do couro cabeludo.
                </p>
              </article>
              <article>
                <span>Curso 100% online</span>
                <h3>Raciocínio Clínico</h3>
                <p>
                  Elaboração de protocolos capilares, exames, recursos e casos
                  clínicos.
                </p>
              </article>
            </div>
            <div className="institute-actions">
              <Link className="button button-light" href="/cursos">
                Ver cursos e MasterClasses
              </Link>
              <TrackedLink
                className="text-link text-link-light"
                href={whatsappLinks.institute}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_whatsapp_instituto"
              >
                Pedir informações pelo WhatsApp
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          <div>
            <SectionHeading
              eyebrow="Clínica em João Pessoa"
              title="Atendimento presencial com localização acessível."
              description="Um espaço dedicado ao cuidado, com entrada e estacionamento acessíveis para cadeirantes."
            />
            <div className="location-details">
              <div>
                <small>Endereço</small>
                <strong>{site.address}</strong>
              </div>
              <div>
                <small>Funcionamento</small>
                <strong>{site.hours}</strong>
              </div>
              <div>
                <small>Contato</small>
                <strong>{site.phoneDisplay}</strong>
              </div>
            </div>
            <div className="inline-actions">
              <TrackedLink
                className="button"
                href={whatsappLinks.fixed}
                target="_blank"
                rel="noopener noreferrer"
                eventName="click_whatsapp_localizacao"
              >
                Falar com a clínica
              </TrackedLink>
              <a
                className="text-link"
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
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

      <section className="section section-alt" id="faq">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Informações antes de dar o próximo passo."
            description="Se ainda houver alguma dúvida, a equipe pode orientar você pelo WhatsApp."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            <TrackedLink
              className="text-link"
              href={whatsappLinks.faq}
              target="_blank"
              rel="noopener noreferrer"
              eventName="click_whatsapp_faq"
            >
              Tirar uma dúvida pelo WhatsApp
            </TrackedLink>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
