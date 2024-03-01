import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./HeaderBar.module.css";
import { Acessar } from "../../pages/Acessar/Acessar";
import { Cadastrar } from "../../pages/Cadastrar/Cadastrar";
import { Menu } from "../Menu/Menu";
export const HeaderBar = () => {

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
        !e.target.closest("#container_acessar") && !e.target.closest("#view") && !e.target.closest("#notview")
      ) {
        setModalAcessar(false);
      }
    });
  }, [modalAcessar]);

  return (
    <header>
      <div className="flex items-center justify-between px-[30px] py-[10px]">
        <div className={styles.logo}>
          <Link to="/">
            <h1 className="text-white font-bold text-3xl">
              Acomp<b className="text-red-600 font-bold text-3xl">X</b>
            </h1>
          </Link>
        </div>
        {logado ? (
          <Menu />
        ) : (
          <div className={styles.acesso_register}>
            <div className={styles.acesso}>
              <button
                className={styles.url_acesso}
                id="acessar"
                onClick={() => setModalAcessar(!modalAcessar)}
              >
                Acessar
              </button>
              {modalAcessar && <Acessar />}
            </div>

            <button
              className={styles.url_cadastro}
              id="cadastrar"
              onClick={() => setModalCadastrar(!modalCadastrar)}
            >
              Cadastro Gratuito
            </button>
          </div>
        )}


        {modalCadastrar && <Cadastrar />}
      </div>
    </header>
  );
}