import { useEffect } from "react";

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schema?: object;
}

export default function MetaTags({ title, description, canonicalUrl, schema }: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Update canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Update JSON-LD structured schema script block
    const existingSchema = document.getElementById("json-ld-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.setAttribute("id", "json-ld-schema");
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalUrl, schema]);

  return null;
}
