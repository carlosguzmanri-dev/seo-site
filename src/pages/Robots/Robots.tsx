const Robots = () => {
  return (
    <article>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Robots.txt File
          </h1>
          <p className="text-xl text-gray-600">
            Understanding and configuring your robots.txt file for optimal
            crawling
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is robots.txt?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El archivo robots.txt es un archivo de texto que le indica a los
            robots de búsqueda qué páginas o secciones de tu sitio web pueden o
            no rastrear. Debe ubicarse en la raíz del dominio
            (carlosguzmanri-dev.github.io/seo-site/robots.txt).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Example Configuration
          </h2>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm">
            {`# robots.txt para SEO Optimized Site
# Permitir acceso a todos los bots
User-agent: *
Allow: /

# Bloquear directorios privados o administrativos
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /temp/

# Bloquear parámetros de URL que generan contenido duplicado
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=*&page=

# Permitir explícitamente archivos CSS y JS (buena práctica)
Allow: /css/
Allow: /js/
Allow: /images/

# Bloquear archivos específicos
Disallow: /search-results
Disallow: /cart
Disallow: /checkout

# Especificar ubicación del sitemap
Sitemap: https://carlosguzmanri-dev.github.io/seo-site/sitemap.xml

# Configuración específica para Googlebot
User-agent: Googlebot
Crawl-delay: 0

# Configuración específica para Bingbot
User-agent: Bingbot
Crawl-delay: 1

# Bloquear bots malintencionados (opcional)
User-agent: BadBot
Disallow: /

# Notas importantes:
# - El archivo robots.txt NO proporciona seguridad real
# - Los bots maliciosos pueden ignorar estas directivas
# - Para contenido sensible, usa autenticación o meta robots noindex
`}
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Directives
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 space-y-4">
            <div>
              <strong className="text-gray-900">User-agent:</strong>
              <p className="text-gray-700 mt-1">
                Especifica a qué robot se aplican las reglas (* para todos)
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Disallow:</strong>
              <p className="text-gray-700 mt-1">
                Indica qué rutas NO deben ser rastreadas
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Allow:</strong>
              <p className="text-gray-700 mt-1">
                Permite explícitamente el rastreo de rutas específicas
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Sitemap:</strong>
              <p className="text-gray-700 mt-1">
                Indica la ubicación del archivo sitemap.xml
              </p>
            </div>
            <div>
              <strong className="text-gray-900">Crawl-delay:</strong>
              <p className="text-gray-700 mt-1">
                Tiempo de espera en segundos entre peticiones (no soportado por
                Google)
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Testing Your Robots.txt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Puedes probar tu archivo robots.txt usando:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Google Search Console - Herramienta de prueba de robots.txt</li>
            <li>Bing Webmaster Tools - Verificador de robots.txt</li>
            <li>
              Navegador web - Visita directamente
              carlosguzmanri-dev.github.io/seo-site/robots.txt
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default Robots;
