import { Breadcrumbs } from "../../components";

const Product = () => {
  return (
    <article itemScope itemType="https://schema.org/Product">
      <Breadcrumbs
        items={[
          { name: "Home", page: "home" },
          { name: "Products", page: "product" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Galería de imágenes del producto */}
          <div>
            <div
              className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg h-96 flex items-center justify-center text-9xl mb-4"
              aria-hidden="true"
            >
              📦
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="bg-gray-100 rounded-lg h-20 flex items-center justify-center text-3xl hover:ring-2 hover:ring-blue-500 transition-all"
                  aria-label={`View product image ${i}`}
                >
                  📦
                </button>
              ))}
            </div>
          </div>

          {/* Información del producto */}
          <div>
            <header>
              <h1
                className="text-3xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                Premium SEO Toolkit Pro
              </h1>

              {/* Rating con schema agregateRating */}
              <div
                className="flex items-center mb-4"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <div
                  className="flex text-yellow-400 mr-2"
                  aria-label="Rating: 4.8 out of 5"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  <span itemProp="ratingValue">4.8</span>(
                  <span itemProp="reviewCount">324</span> reviews)
                </span>
              </div>
            </header>

            {/* Precio con schema offers */}
            <div
              className="mb-6"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <div className="flex items-baseline space-x-3">
                <span
                  className="text-4xl font-bold text-gray-900"
                  itemProp="price"
                  content="199.99"
                >
                  $199.99
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  $299.99
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  33% OFF
                </span>
              </div>
              <meta itemProp="priceCurrency" content="USD" />
              <link itemProp="availability" href="https://schema.org/InStock" />
              <p className="text-green-600 font-semibold mt-2">
                In Stock - Ready to Ship
              </p>
            </div>

            {/* Descripción del producto */}
            <div className="mb-6" itemProp="description">
              <h2 className="text-xl font-semibold mb-3">
                Product Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Premium SEO Toolkit Pro is a comprehensive solution for
                optimizing your website's search engine performance. It includes
                advanced analytics, keyword research tools, technical SEO
                audits, and competitor analysis features.
              </p>
            </div>

            {/* Características del producto */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {[
                  "Advanced keyword research and tracking",
                  "Technical SEO audit and monitoring",
                  "Competitor analysis dashboard",
                  "Backlink analysis and monitoring",
                  "Content optimization suggestions",
                  "Mobile and desktop performance tracking",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                Add to Cart
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Add to Wishlist
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-8 pt-8 border-t space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="font-semibold" itemProp="sku">
                  SEO-TOOLKIT-PRO-001
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold">SEO Software</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span
                  className="font-semibold"
                  itemProp="brand"
                  itemScope
                  itemType="https://schema.org/Brand"
                >
                  <span itemProp="name">SEO Optimized</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción detallada y especificaciones */}
        <div className="mt-16">
          <div className="border-b mb-8">
            <nav
              className="flex space-x-8"
              aria-label="Product information tabs"
            >
              <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-semibold">
                Description
              </button>
              <button className="pb-4 text-gray-600 hover:text-gray-900">
                Specifications
              </button>
              <button className="pb-4 text-gray-600 hover:text-gray-900">
                Reviews
              </button>
            </nav>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Complete SEO Solution</h2>
            <p>
              Our Premium SEO Toolkit Pro provides everything you need to
              dominate search engine rankings. With powerful analytics,
              intuitive interfaces, and actionable insights, you'll be able to
              optimize your website like a professional SEO expert.
            </p>
            <p>
              The toolkit includes real-time monitoring, comprehensive
              reporting, and integrations with major search engines and
              analytics platforms. Perfect for agencies, in-house teams, and
              solo marketers who demand the best tools available.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
