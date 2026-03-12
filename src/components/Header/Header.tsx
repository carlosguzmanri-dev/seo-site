import { useNavigate } from "react-router-dom";
import { FileText, Home, Mail, Menu, Package, Users, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({
  currentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) => {
  const navigate = useNavigate();

  const navigation = [
    { id: "", name: "Home", icon: Home },
    { id: "blog", name: "Blog", icon: FileText },
    { id: "product", name: "Products", icon: Package },
    { id: "about", name: "About", icon: Users },
    { id: "contact", name: "Contact", icon: Mail },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo - Enlace a home con texto descriptivo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("")}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700"
              aria-label="Go to homepage"
            >
              SEO<span className="text-gray-800">Site</span>
            </button>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                  aria-current={currentPage === item.id ? "page" : undefined}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" role="menu">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-4 py-3 text-left ${
                    currentPage === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
