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
                    className={
                      rotaActive === "/" ? styles.selected : styles.url
                    }
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/destacar`}
                    className={
                      rotaActive === "/destacar" ? styles.selected : styles.url
                    }
                  >
                    Destacar
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/verificar`}
                    className={
                      rotaActive === "/verificar" ? styles.selected : styles.url
                    }
                  >
                    Verificar
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/conta`}
                    className={
                      rotaActive === "/conta" ? styles.selected : styles.url
                    }
                  >
                    Conta
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
