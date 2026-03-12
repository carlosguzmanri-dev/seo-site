import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, SEOHead } from "./components";
import "./App.css";
import {
  About,
  Article,
  Blog,
  Contact,
  Home,
  NotFound,
  Product,
  Robots,
  Sitemap,
} from "./pages";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname.slice(1) || "home");
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* 
        HEAD SIMULADO - En producción esto iría en el <head> del documento
        Aquí mostramos ejemplos de lo que debería incluirse
      */}
      <SEOHead page={currentPage} />

      {/* HEADER - Navegación principal con estructura semántica */}
      <Header
        currentPage={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* MAIN CONTENT - Contenido principal con role="main" */}
      <main role="main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<Article />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* FOOTER - Información adicional y enlaces */}
      <Footer />
    </div>
  );
}

export default App;
