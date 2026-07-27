import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import { FinalCta } from "@/components/FinalCta";
import { PageShell } from "@/components/PageShell";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Dra. Edna Lima",
  description:
    "Conheça a trajetória clínica e educacional da fisioterapeuta dermatofuncional e tricologista Dra. Edna Lima.",
};

export default function DraEdnaPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <span className="eyebrow">Trajetória profissional</span>
            <h1>Experiência clínica que também se transforma em ensino.</h1>
            <p>
              Mais de duas décadas de atuação em saúde e estética, com dedicação
              à Tricologia desde 2013.
            </p>
            <Link className="button" href="/atendimento">
              Conhecer o atendimento
            </Link>
          </div>
          <div className="inner-hero-image">
            <Image
              unoptimized
              src="/images/dra-edna-sobre.png"
              alt="Dra. Edna Lima em evento de tricologia"
              width={520}
              height={691}
              priority
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background-alt" to="background" />

      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-image reveal">
            <Image
              unoptimized
              src="/images/dra-edna-hero.png"
              alt="Retrato da Dra. Edna Lima"
              width={1098}
              height={1433}
            />
            <span className="image-caption">Dra. Edna Lima</span>
          </div>
          <div className="editorial-copy prose reveal reveal-delay-1">
            <SectionHeading
              eyebrow="Sobre"
              title="Uma carreira construída entre o cuidado e a formação."
            />
            <p>
              Dra. Edna Lima é fisioterapeuta formada pela Universidade Federal
              da Paraíba. Sua atuação em Estética e Fisioterapia
              Dermatofuncional começou no início dos anos 2000, consolidando uma
              experiência clínica de mais de duas décadas.
            </p>
            <p>
              Desde 2013, aprofundou sua atuação em Tricologia, com foco em
              calvície, queda de cabelo e alterações do couro cabeludo. Ao lado
              do trabalho clínico, construiu uma trajetória como docente de
              graduação e pós-graduação.
            </p>
            <p>
              Também atua como educadora vinculada à ABMED e palestrante
              internacional, conectando prática clínica, raciocínio técnico e
              educação continuada.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="straight" from="background" to="background-alt" />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Marcos da trajetória"
            title="Autoridade sustentada por prática, estudo e docência."
            align="center"
          />
          <div className="fact-grid reveal">
            <article>
              <strong>UFPB</strong>
              <span>Formação em Fisioterapia</span>
            </article>
            <article>
              <Counter to={20} suffix="+" />
              <span>Anos de atuação clínica e educacional</span>
            </article>
            <article>
              <Counter to={2013} />
              <span>Início da especialização em Tricologia</span>
            </article>
            <article>
              <strong>Brasil e exterior</strong>
              <span>Docência, educação e palestras</span>
            </article>
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" from="background-alt" to="primary" />

      <FinalCta />
    </PageShell>
  );
}
