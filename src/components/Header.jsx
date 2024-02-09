import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
        <div className={styles.logo_menu}>
          <div className={styles.logo}>
            <Link to="/">
              <h1>
                Acomp<b>X</b>
              </h1>
            </Link>
          </div>
          <div className={styles.menu}>
            <nav>
              <ul>
                <li>
                  <Link
                    to={`/`}
                    style={{
                      color:
                        rotaActive === "/" ? "var(--text-yellow)" : "white",
                    }}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/destacar`}
                    style={{
                      color:
                        rotaActive === "/destacar"
                          ? "var(--text-yellow)"
                          : "white",
                    }}
                  >
                    Destacar
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/verificar`}
                    style={{
                      color:
                        rotaActive === "/verificar"
                          ? "var(--text-yellow)"
                          : "white",
                    }}
                  >
                    Verificar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.acesso_register}>
          <Link className={styles.url_acesso} to={`/acessar`}>
            Acessar
          </Link>

          <Link className={styles.url_cadastro} to={`/cadastrar`}>
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  );
};
