import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//import "../styles/header.css";
import styles from "./Header.module.css";
export const HeaderBar = () => {
  const location = useLocation();
  const [rotaActive, setRotaActive] = useState("");

  useEffect(() => {
    setRotaActive(location.pathname);
  }, [location.pathname]);

  const [abrir, setAbrir] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (abrir && !event.target.closest(".box-acesso")) {
        setAbrir(false);
      }
    });
  }, [abrir]);

  return (
    <header>
      <div className={styles.container_header}>
        <div className={styles.container_logo}>
          <Link to="/">
            <h1>
              Acomp<b>X</b>
            </h1>
          </Link>
        </div>
        <div className={styles.box_acesso}>
          <nav>
            <ul>
              <li>
                <Link
                  to={`/`}
                  style={{ color: rotaActive === "/" ? "red" : "white" }}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={`/destacar`}
                  style={{
                    color: rotaActive === "/destacar" ? "red" : "white",
                  }}
                >
                  Destacar
                </Link>
              </li>
              <li>
                <Link
                  to={`/verificar`}
                  style={{
                    color: rotaActive === "/verificar" ? "red" : "white",
                  }}
                >
                  Verificar
                </Link>
              </li>
              <li>
                <Link
                  to={`/acessar`}
                  style={{
                    color: rotaActive === "/acessar" ? "red" : "white",
                  }}
                >
                  Acessar
                </Link>
              </li>
              <li>
                <Link
                  to={`/cadastrar`}
                  style={{
                    color: rotaActive === "/cadastrar" ? "red" : "white",
                  }}
                >
                  Cadastrar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
