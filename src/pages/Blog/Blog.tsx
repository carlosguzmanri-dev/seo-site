import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components";
import { ChevronRight, Clock, Search, Tag } from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Technical SEO in 2025",
      excerpt:
        "Learn everything you need to know about technical SEO, from site structure to Core Web Vitals optimization.",
      category: "Technical SEO",
      date: "2025-01-10",
      readTime: "8 min read",
      image: "📊",
    },
    {
      id: 2,
      title: "How to Implement Schema.org Structured Data",
      excerpt:
        "Step-by-step guide to adding JSON-LD structured data to improve your search engine visibility.",
      category: "On-Page SEO",
      date: "2025-01-08",
      readTime: "6 min read",
      image: "🏗️",
    },
    {
      id: 3,
      title: "Mobile-First Indexing: What You Need to Know",
      excerpt:
        "Understanding Google's mobile-first approach and how to optimize your site for mobile devices.",
      category: "Mobile SEO",
      date: "2025-01-05",
      readTime: "5 min read",
      image: "📱",
    },
  ];

  return (
    <article>
      <Breadcrumbs
        items={[
          { name: "Home", page: "home" },
          { name: "Blog", page: "blog" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header del blog */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SEO Blog</h1>
          <p className="text-xl text-gray-600">
            Expert insights, tutorials, and best practices for search engine
            optimization
          </p>
        </header>

        {/* Barra de búsqueda (UI only - en producción sería funcional) */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search blog articles"
            />
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Imagen del artículo (en producción sería una imagen real con lazy loading) */}
              <div
                className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center text-6xl"
                aria-hidden="true"
              >
                {post.image}
              </div>

              <div className="p-6">
                {/* Categoría y metadatos */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 flex items-center">
                    <Tag size={14} className="mr-1" aria-hidden="true" />
                    {post.category}
                  </span>
                  <time
                    className="text-sm text-gray-500 flex items-center"
                    dateTime={post.date}
                  >
                    <Clock size={14} className="mr-1" aria-hidden="true" />
                    {post.readTime}
                  </time>
                </div>

                {/* Título del artículo */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <button
                    onClick={() => navigate("/article")}
                    className="text-left w-full"
                  >
                    {post.title}
                  </button>
                </h2>

                {/* Extracto */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Fecha de publicación */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <time className="text-sm text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <button
                    onClick={() => navigate("/article")}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read More
                    <ChevronRight
                      size={16}
                      className="ml-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Blog;
