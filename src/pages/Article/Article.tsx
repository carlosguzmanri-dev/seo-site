import { useNavigate } from "react-router-dom";
import { Clock, Facebook, Linkedin } from "lucide-react";
import { Breadcrumbs } from "../../components";

const Article = () => {
  const navigate = useNavigate();

  return (
    <article itemScope itemType="https://schema.org/Article">
      <Breadcrumbs
        items={[
          { name: "Home", page: "home" },
          { name: "Blog", page: "blog" },
          { name: "Article", page: "article" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header del artículo */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              Technical SEO
            </span>
            <time
              className="text-gray-500 flex items-center"
              dateTime="2025-01-10"
              itemProp="datePublished"
            >
              <Clock size={16} className="mr-1" aria-hidden="true" />8 min read
            </time>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            itemProp="headline"
          >
            Complete Guide to Technical SEO in 2025
          </h1>

          <p className="text-xl text-gray-600 mb-6" itemProp="description">
            Master the essential technical aspects of SEO to improve your site's
            search engine visibility and performance
          </p>

          {/* Información del autor */}
          <div
            className="flex items-center space-x-4 py-4 border-y"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold"
              aria-hidden="true"
            >
              JD
            </div>
            <div>
              <p className="font-semibold text-gray-900" itemProp="name">
                John Doe
              </p>
              <p className="text-sm text-gray-500">SEO Specialist</p>
            </div>
          </div>
        </header>

        {/* Imagen destacada (con lazy loading en producción) */}
        <figure className="mb-8">
          <div
            className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-lg flex items-center justify-center text-8xl"
            aria-hidden="true"
          >
            📊
          </div>
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Illustration of technical SEO concepts and best practices
          </figcaption>
        </figure>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none" itemProp="articleBody">
          <h2>Introduction to Technical SEO</h2>
          <p>
            Technical SEO refers to the process of optimizing your website for
            the crawling and indexing phase. It helps search engines access,
            crawl, interpret, and index your website without any problems.
          </p>

          <h2>Key Technical SEO Elements</h2>

          <h3>1. Site Structure and Navigation</h3>
          <p>
            A well-organized site structure helps both users and search engines
            understand your content hierarchy. Use a logical structure with
            clear categories and subcategories.
          </p>

          <h3>2. XML Sitemap</h3>
          <p>
            An XML sitemap is a file that lists all important pages of your
            website, helping search engines discover and index your content more
            efficiently.
          </p>

          <h3>3. Robots.txt File</h3>
          <p>
            The robots.txt file tells search engines which pages or sections of
            your site should not be crawled. This helps you control how search
            engines access your content.
          </p>

          <h3>4. Page Speed Optimization</h3>
          <p>
            Fast-loading pages provide a better user experience and are favored
            by search engines. Optimize images, minimize CSS/JavaScript, and
            leverage browser caching.
          </p>

          <h3>5. Mobile Optimization</h3>
          <p>
            With mobile-first indexing, Google predominantly uses the mobile
            version of content for indexing and ranking. Ensure your site is
            responsive and mobile-friendly.
          </p>

          <h2>Structured Data Implementation</h2>
          <p>
            Structured data helps search engines understand your content better
            and can lead to rich snippets in search results. Use Schema.org
            vocabulary with JSON-LD format for best results.
          </p>

          <h2>Conclusion</h2>
          <p>
            Technical SEO is the foundation of a successful SEO strategy. By
            implementing these best practices, you'll ensure that search engines
            can effectively crawl, index, and rank your content.
          </p>
        </div>

        {/* Compartir en redes sociales */}
        <aside className="mt-12 pt-8 border-t" aria-label="Share article">
          <h2 className="text-xl font-semibold mb-4">Share this article</h2>
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook size={20} />
            </button>
            <button
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={20} />
            </button>
          </div>
        </aside>

        {/* Artículos relacionados */}
        <aside className="mt-12" aria-labelledby="related-articles">
          <h2 id="related-articles" className="text-2xl font-bold mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "How to Implement Schema.org Structured Data",
                category: "On-Page SEO",
              },
              {
                title: "Mobile-First Indexing: What You Need to Know",
                category: "Mobile SEO",
              },
            ].map((article, idx) => (
              <article
                key={idx}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm text-blue-600 font-semibold">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  <button
                    onClick={() => navigate("/article")}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    {article.title}
                  </button>
                </h3>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
};

export default Article;
