import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./HeaderBar.module.css";
import Acessar from "../pages/Acessar";
import Cadastrar from "../pages/Cadastrar";
export default function HeaderBar() {

  const location = useLocation();
  const [rotaActive, setRotaActive] = useState("");
  const [modalAcessar, setModalAcessar] = useState(false);
  const [modalCadastrar, setModalCadastrar] = useState(false);
  const userId = localStorage.getItem("userId");
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (userId != null) {
      setLogado(true)
    } else {
      setLogado(false)
    }
  }, [userId]);

  useEffect(() => {
    setRotaActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        modalCadastrar &&
        !e.target.closest("#cadastrar") &&
        !e.target.closest("#container_cadastrar")
      ) {
        setModalCadastrar(false);
      }
    });
  }, [modalCadastrar]);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        modalAcessar &&
        !e.target.closest("#acessar") &&
        !e.target.closest("#container_acessar")
      ) {
        setModalAcessar(false);
      }
    });
  }, [modalAcessar]);

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
                {logado && (
                  <>
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
                  </>
                )}
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
        {logado ? (
          <div>
            <h2>Logado</h2>
          </div>
        ) : (
          <div className={styles.acesso_register}>
            <button
              className={styles.url_acesso}
              id="acessar"
              onClick={() => setModalAcessar(!modalAcessar)}
            >
              Acessar
            </button>

            <button
              className={styles.url_cadastro}
              id="cadastrar"
              onClick={() => setModalCadastrar(!modalCadastrar)}
            >
              Cadastro Gratuito
            </button>
          </div>
        )}

        {modalAcessar && <Acessar />}
        {modalCadastrar && <Cadastrar />}
      </div>
    </header>
  );
}
