import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
export default function Header() {

  const idClient = localStorage.getItem("userId");

  const location = useLocation();

  const pathToClassName = {
    "/": "Inicio",
    "/acompanhantes": "Acompanhantes",
    "/sobre": "Sobre",
    "/planos": "Planos",
  };

  const token = localStorage.getItem("Token");
  const currentRouteClass = pathToClassName[location.pathname] || "";

  return (
    <header>
      <div className="container-header">
        <div className="container-logo">
          <Link to="/">
            <h1>ABRIME</h1>
          </Link>
        </div>
        <div className="box-urls">
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  className={
                    currentRouteClass === "Inicio" ? "url-atual" : "urls"
                  }
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/acompanhantes"
                  className={
                    currentRouteClass === "Acompanhantes" ? "url-atual" : "urls"
                  }
                >
                  Acompanhantes
                </Link>
              </li>
              <li>
                <Link
                  to="/planos"
                  className={
                    currentRouteClass === "Planos" ? "url-atual" : "urls"
                  }
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className={
                    currentRouteClass === "Sobre" ? "url-atual" : "urls"
                  }
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="box-acesso">
          {token ? (
            <Link to={`/${idClient}`}>Perfil</Link>
          ) : (
            <>
              <Link to="/#">Cadastrar</Link>
              <Link to="/acessar">
                Acessar<i className="ri-arrow-right-up-line"></i>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
