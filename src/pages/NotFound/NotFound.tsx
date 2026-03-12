import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <main className="not-found">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o fue eliminada.</p>

        <Link to="/" className="btn-home">
          Volver al inicio
        </Link>
      </main>
    </>
  );
};

export default NotFound;
