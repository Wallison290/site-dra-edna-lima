import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap:
      "https://dra-edna-lima.quachquoc-199928.chatgpt.site/sitemap.xml",
  };
}
