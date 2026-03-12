import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <article>
      {/* Breadcrumbs para navegación jerárquica */}
      <Breadcrumbs items={[{ name: "Home", page: "home" }]} />

      {/* Hero Section - Sección principal con h1 único */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to SEO Optimized Site
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your complete guide to implementing best SEO practices in modern web
            development
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/blog")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              aria-label="Read our blog articles"
            >
              Read Our Blog
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-white"
              aria-label="Contact us"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Características principales */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Key SEO Features Implemented
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Semantic HTML",
              description:
                "Proper use of semantic tags like header, nav, main, article, section, and footer for better structure.",
              icon: "🏗️",
            },
            {
              title: "Meta Tags",
              description:
                "Complete meta tags including Open Graph, Twitter Cards, and structured data for rich snippets.",
              icon: "🏷️",
            },
            {
              title: "Performance",
              description:
                "Optimized images with lazy loading, minimal JavaScript, and fast rendering for better Core Web Vitals.",
              icon: "⚡",
            },
            {
              title: "Accessibility",
              description:
                "ARIA labels, keyboard navigation, and semantic structure for inclusive user experience.",
              icon: "♿",
            },
            {
              title: "Mobile First",
              description:
                "Responsive design that works perfectly on all devices, from mobile to desktop.",
              icon: "📱",
            },
            {
              title: "Crawlability",
              description:
                "Proper robots.txt, sitemap.xml, and canonical URLs for optimal search engine indexing.",
              icon: "🤖",
            },
          ].map((feature, idx) => (
            <article
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section - Llamado a la acción */}
      <section className="bg-gray-50 py-16" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Optimize Your Site?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our blog for in-depth guides and best practices
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Visit Blog</span>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </section>
    </article>
  );
};

export default Home;
