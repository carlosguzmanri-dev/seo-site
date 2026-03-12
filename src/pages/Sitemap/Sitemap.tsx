import { useNavigate } from "react-router-dom";

const Sitemap = () => {
  const navigate = useNavigate();

  const pages = [
    {
      id: "home",
      name: "Home",
      url: "/",
      priority: "1.0",
      changefreq: "daily",
    },
    {
      id: "blog",
      name: "Blog",
      url: "/blog",
      priority: "0.9",
      changefreq: "daily",
    },
    {
      id: "article",
      name: "Blog Articles",
      url: "/blog/article",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      id: "product",
      name: "Products",
      url: "/products",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      id: "about",
      name: "About Us",
      url: "/about",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      id: "contact",
      name: "Contact",
      url: "/contact",
      priority: "0.8",
      changefreq: "monthly",
    },
  ];

  return (
    <article>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HTML Sitemap
          </h1>
          <p className="text-xl text-gray-600">
            Complete list of all pages on our website for easy navigation
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Page
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  URL
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Update Freq
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate(page.url)}
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      {page.name}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{page.url}</td>
                  <td className="px-6 py-4 text-gray-600">{page.priority}</td>
                  <td className="px-6 py-4 text-gray-600">{page.changefreq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* XML Sitemap Example */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            XML Sitemap (sitemap.xml)
          </h2>
          <p className="text-gray-600 mb-4">
            El XML sitemap debe estar ubicado en la raíz del sitio
            (carlosguzmanri-dev.github.io/seo-site/sitemap.xml)
          </p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm">
            {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://carlosguzmanri-dev.github.io/seo-site/</loc>
        <lastmod>2025-01-13</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://carlosguzmanri-dev.github.io/seo-site/blog</loc>
        <lastmod>2025-01-13</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carlosguzmanri-dev.github.io/seo-site/products</loc>
        <lastmod>2025-01-12</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://carlosguzmanri-dev.github.io/seo-site/about</loc>
        <lastmod>2025-01-10</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://carlosguzmanri-dev.github.io/seo-site/contact</loc>
        <lastmod>2025-01-10</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
`}
          </pre>
        </section>
      </div>
    </article>
  );
};

export default Sitemap;
