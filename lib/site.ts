export const site = {
  name: "Dra. Edna Lima",
  phoneDisplay: "(83) 98634-2723",
  phoneE164: "+5583986342723",
  address:
    "Av. Nossa Senhora de Fátima, 1783, Torre, João Pessoa – PB",
  hours: "Segunda a sexta, das 8h às 18h",
  instagram: "https://www.instagram.com/draednalima/",
  institutoInstagram: "https://www.instagram.com/institutoelos/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Av.%20Nossa%20Senhora%20de%20F%C3%A1tima%2C%201783%2C%20Torre%2C%20Jo%C3%A3o%20Pessoa%20-%20PB",
};

const whatsapp = (message: string, campaign: string) =>
  `https://wa.me/5583986342723?text=${encodeURIComponent(
    message,
  )}&utm_source=site&utm_medium=botao&utm_campaign=${campaign}`;

export const whatsappLinks = {
  hero: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e gostaria de entender como funciona a avaliação capilar.",
    "hero",
  ),
  concerns: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima. Tenho uma queixa capilar e gostaria de saber como funciona a avaliação.",
    "queixas_capilares",
  ),
  assessment: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e quero agendar uma avaliação capilar.",
    "avaliacao_acompanhamento",
  ),
  proof: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e quero avaliar minha queixa capilar.",
    "resultados_pacientes",
  ),
  faq: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e ainda tenho uma dúvida antes de agendar minha avaliação.",
    "faq",
  ),
  final: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e quero agendar minha avaliação capilar. Quais horários estão disponíveis?",
    "cta_final",
  ),
  institute: whatsapp(
    "Olá! Vim pelo site do Instituto Elos e gostaria de informações sobre os cursos e MasterClasses.",
    "instituto_elos",
  ),
  fixed: whatsapp(
    "Olá! Vim pelo site da Dra. Edna Lima e gostaria de falar com a clínica.",
    "whatsapp_fixo",
  ),
};

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/atendimento", label: "Atendimento capilar" },
  { href: "/dra-edna", label: "Dra. Edna" },
  { href: "/instituto", label: "Instituto Elos" },
  { href: "/cursos", label: "Cursos" },
  { href: "/contato", label: "Contato" },
];

