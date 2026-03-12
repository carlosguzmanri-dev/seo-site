import { getPageMetadata } from "./getPageMetadata";

/**
 * Simula la actualización de meta tags en el <head> del documento
 * En producción, esto se haría con react-helmet, next/head o similar
 */
export const updateDocumentMeta = (page: string) => {
  const metadata = getPageMetadata(page);

  // En producción real, aquí actualizarías el <head> del documento
  if (typeof document !== "undefined") {
    document.title = metadata.title;
  }

  console.log("SEO Meta Tags Updated:", {
    page,
    title: metadata.title,
    description: metadata.description,
    canonical: metadata.canonical,
  });
};
