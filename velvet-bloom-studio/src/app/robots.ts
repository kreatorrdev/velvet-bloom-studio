import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to read each page's noindex metadata for this demo.
  return { rules: { userAgent: "*", allow: "/" } };
}
