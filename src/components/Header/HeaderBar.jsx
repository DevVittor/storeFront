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
  const [theme,setTheme] = useState(null);


  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme('dark')
    }
  },[])
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const handleDarkMode = ()=>{
    setTheme(theme === "dark" ? "light" : "dark");
  }

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
    <header className="sticky top-0 z-50 dark:bg-dark bg-white" >
      <div className="flex items-center justify-between px-[30px] py-[10px] border-b-2 dark:border-zinc-800 border-zinc-100">
        <div className="">
          <Link to="/">
            <h1 className="dark:text-white font-bold text-3xl">
              Acomp<b className="text-red-600 font-bold text-3xl">X</b>
            </h1>
          </Link>
        </div>
        {logado ? (
          <Menu mode={handleDarkMode} atual={theme}/>
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
            <button className="dark:text-white" onClick={handleDarkMode}>Dark Mode</button>
          </div>
        )}
        
        {modalCadastrar && <Cadastrar />}
      </div>
    </header>
  );
}