import { getPageMetadata } from "../../utils/getPageMetadata";

const SEOHead = ({ page }: { page: string }) => {
  const pageData = getPageMetadata(page);

  return (
    <div className="hidden">
      {/* 
        NOTA IMPORTANTE: En producción real, estos elementos irían en el <head>
        Aquí los mostramos visualmente para propósitos educativos
      */}
      <div className="seo-metadata">
        <h3>Meta Tags para {page}:</h3>
        <code>
          {`
            <!-- TAGS FUNDAMENTALES -->
            <title>${pageData.title}</title>
            <meta name="description" content="${pageData.description}" />
            <meta name="keywords" content="${pageData.keywords}" />
            <meta name="author" content="${pageData.author}" />
            <meta name="robots" content="${pageData.robots}" />
            <link rel="canonical" href="${pageData.canonical}" />

            <!-- OPEN GRAPH (Facebook, LinkedIn) -->
            <meta property="og:type" content="${pageData.ogType}" />
            <meta property="og:title" content="${pageData.title}" />
            <meta property="og:description" content="${pageData.description}" />
            <meta property="og:url" content="${pageData.canonical}" />
            <meta property="og:image" content="${pageData.ogImage}" />
            <meta property="og:site_name" content="SEO Optimized Site" />

            <!-- TWITTER CARDS -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="${pageData.title}" />
            <meta name="twitter:description" content="${
              pageData.description
            }" />
            <meta name="twitter:image" content="${pageData.ogImage}" />

            <!-- VIEWPORT Y CHARSET -->
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <!-- STRUCTURED DATA (JSON-LD) -->
            <script type="application/ld+json">
            ${JSON.stringify(pageData.structuredData, null, 2)}
            </script>
          `}
        </code>
      </div>
    </div>
  );
};

export default SEOHead;
