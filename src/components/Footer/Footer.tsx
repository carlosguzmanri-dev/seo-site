import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1 - Sobre la empresa */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              SEO<span className="text-blue-400">Site</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in search engine optimization and digital
              marketing excellence.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { id: "", name: "Home" },
                  { id: "blog", name: "Blog" },
                  { id: "product", name: "Products" },
                  { id: "about", name: "About Us" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigate(link.id)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Columna 3 - Recursos */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { id: "sitemap", name: "Sitemap" },
                { id: "robots", name: "Robots.txt" },
                { id: "contact", name: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Redes sociales */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for SEO tips and updates.
            </p>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 SEO Optimized Site. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
