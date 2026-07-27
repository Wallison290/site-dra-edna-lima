import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://dra-edna-lima.quachquoc-199928.chatgpt.site",
  ),
  title: {
    default: "Dra. Edna Lima | Tricologia em João Pessoa",
    template: "%s | Dra. Edna Lima",
  },
  description:
    "Avaliação tricológica em João Pessoa e formação continuada em saúde capilar pelo Instituto Elos.",
  keywords: [
    "tricologia João Pessoa",
    "queda de cabelo João Pessoa",
    "avaliação capilar",
    "calvície",
    "Instituto Elos",
    "cursos de tricologia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Dra. Edna Lima | Tricologia e Saúde Capilar",
    description:
      "Atendimento clínico em João Pessoa e formação profissional pelo Instituto Elos.",
    images: ["/images/dra-edna-sobre.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#162A4B",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Dra. Edna Lima | Tricologia e Saúde Capilar",
  description:
    "Avaliação tricológica e atendimento para queda de cabelo, calvície e alterações do couro cabeludo.",
  telephone: "+55 83 98634-2723",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Nossa Senhora de Fátima, 1783, Torre",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/draednalima/",
    "https://www.instagram.com/institutoelos/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
