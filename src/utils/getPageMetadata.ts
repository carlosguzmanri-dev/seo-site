/**
 * Retorna todos los metadatos y datos estructurados para cada página
 * Esto centraliza toda la información SEO en un solo lugar
 */
export const getPageMetadata = (page: string) => {
  const baseUrl = "https://carlosguzmanri-dev.github.io/seo-site";
  const siteName = "SEO Optimized Site";

  const metadata: Record<string, any> = {
    home: {
      title: `${siteName} - Complete SEO Best Practices Guide`,
      description:
        "Learn and implement SEO best practices with our comprehensive guide. Includes meta tags, structured data, semantic HTML, and more.",
      keywords:
        "SEO, search engine optimization, meta tags, structured data, web development",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/`,
      ogType: "website",
      ogImage: `${baseUrl}/images/og-home.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: baseUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
      },
    },
    blog: {
      title: `SEO Blog - Expert Tips and Guides | ${siteName}`,
      description:
        "Read our expert blog articles on SEO, digital marketing, and web optimization. Stay updated with the latest trends and best practices.",
      keywords:
        "SEO blog, digital marketing, optimization tips, search engine strategies",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/blog`,
      ogType: "website",
      ogImage: `${baseUrl}/images/og-blog.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "SEO Blog",
        description:
          "Expert insights and tutorials on search engine optimization",
        url: `${baseUrl}/blog`,
      },
    },
    article: {
      title: "Complete Guide to Technical SEO in 2025 | SEO Blog",
      description:
        "Master the essential technical aspects of SEO to improve your site's search engine visibility and performance. Complete guide with examples.",
      keywords:
        "technical SEO, site structure, XML sitemap, robots.txt, page speed",
      author: "John Doe",
      robots: "index, follow",
      canonical: `${baseUrl}/blog/technical-seo-guide-2025`,
      ogType: "article",
      ogImage: `${baseUrl}/images/og-technical-seo.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Complete Guide to Technical SEO in 2025",
        description:
          "Master the essential technical aspects of SEO to improve your site's search engine visibility and performance",
        image: `${baseUrl}/images/technical-seo-featured.jpg`,
        author: {
          "@type": "Person",
          name: "John Doe",
          jobTitle: "SEO Specialist",
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        datePublished: "2025-01-10",
        dateModified: "2025-01-10",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/blog/technical-seo-guide-2025`,
        },
      },
    },
    product: {
      title: "Premium SEO Toolkit Pro - Complete Optimization Suite",
      description:
        "Professional SEO toolkit with advanced analytics, keyword research, technical audits, and competitor analysis. Get 33% off today!",
      keywords:
        "SEO tools, keyword research, technical audit, competitor analysis, SEO software",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/products/seo-toolkit-pro`,
      ogType: "product",
      ogImage: `${baseUrl}/images/og-product.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Premium SEO Toolkit Pro",
        image: `${baseUrl}/images/seo-toolkit-pro.jpg`,
        description:
          "Professional SEO toolkit with advanced analytics and optimization features",
        sku: "SEO-TOOLKIT-PRO-001",
        brand: {
          "@type": "Brand",
          name: "SEO Optimized",
        },
        offers: {
          "@type": "Offer",
          url: `${baseUrl}/products/seo-toolkit-pro`,
          priceCurrency: "USD",
          price: "199.99",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: siteName,
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "324",
          bestRating: "5",
          worstRating: "1",
        },
      },
    },
    about: {
      title: `About Us - Our Mission and Team | ${siteName}`,
      description:
        "Learn about our mission to make professional SEO accessible to everyone. Meet our team of experts dedicated to your success.",
      keywords: "about us, company mission, SEO experts, team",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/about`,
      ogType: "website",
      ogImage: `${baseUrl}/images/og-about.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description:
          "Professional SEO services and tools for businesses of all sizes",
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 SEO Street",
          addressLocality: "Digital City",
          addressRegion: "DC",
          postalCode: "12345",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-123-456-7890",
          contactType: "customer service",
          email: "contact@seosite.com",
        },
        sameAs: [
          "https://facebook.com/seosite",
          "https://linkedin.com/company/seosite",
        ],
      },
    },
    contact: {
      title: `Contact Us - Get in Touch | ${siteName}`,
      description:
        "Have questions? Contact our team of SEO experts. We're here to help with your optimization needs. Call, email, or visit us.",
      keywords: "contact, get in touch, customer support, SEO help",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/contact`,
      ogType: "website",
      ogImage: `${baseUrl}/images/og-contact.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us",
        description: "Get in touch with our team",
        url: `${baseUrl}/contact`,
      },
    },
    sitemap: {
      title: `Sitemap - Site Navigation | ${siteName}`,
      description:
        "Complete sitemap of all pages on our website. Easy navigation to find exactly what you need.",
      keywords: "sitemap, site navigation, page list",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/sitemap`,
      ogType: "website",
      ogImage: `${baseUrl}/images/og-default.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Sitemap",
        url: `${baseUrl}/sitemap`,
      },
    },
    robots: {
      title: `Robots.txt Guide | ${siteName}`,
      description:
        "Learn how to properly configure your robots.txt file for optimal search engine crawling and indexing.",
      keywords: "robots.txt, crawling, indexing, search engines",
      author: "SEO Optimized Team",
      robots: "index, follow",
      canonical: `${baseUrl}/robots`,
      ogType: "article",
      ogImage: `${baseUrl}/images/og-default.jpg`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "Robots.txt Configuration Guide",
        url: `${baseUrl}/robots`,
      },
    },
  };

  return metadata[page] || metadata.home;
};
