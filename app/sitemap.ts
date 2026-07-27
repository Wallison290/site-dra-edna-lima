import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dra-edna-lima.quachquoc-199928.chatgpt.site";
  return ["", "/atendimento", "/dra-edna", "/instituto", "/cursos", "/contato"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }),
  );
}
