import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from 'react';
import "../styles/header.css";
export default function Header() {

  const [abrir,setAbrir] = useState(false);
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

  function clickMenu(){
    setAbrir(prevOpen=>!prevOpen);
  }
  //Solução
  const menuRef = useRef();
  const nameRef = useRef();
  const iconRef = useRef();

  window.addEventListener("click",(event)=>{
    if(event.target !== menuRef.current && event.target !== nameRef.current && event.target !== iconRef.current){
      setAbrir(false); 
    }
  });

  return (
    <header>
      <div className="container-header">
        <div className="container-logo">
          <Link to="/">
            <h1>ABRIME</h1>
          </Link>
        </div>
        <div className="box-acesso">
          {token ? (
            <>
              <button ref={menuRef} onClick={clickMenu}>
                <span ref={nameRef}>Jéssica</span>
                {abrir ? (
                  <i className="ri-close-line" ref={iconRef}></i>
                ) :(
                  <i className="ri-menu-fill"></i>
                )} 
              </button>
              {abrir ? (
                  <div className="popUpMenu" >
                    <nav>
                      <ul>
                        <li>
                          <Link to={`/:id`}><i className="ri-user-search-line"></i>Perfil</Link>
                        </li>
                        <li>
                          <Link><i className="ri-flashlight-fill"></i>Destacar</Link>
                        </li>
                        <li>
                          <Link><i className="ri-verified-badge-fill"></i>Verificar</Link>
                        </li>
                        <li>
                          <Link><i className="ri-user-settings-line"></i>Editar Perfil</Link>
                        </li>
                        <li>
                          <Link className="logout"><i className="ri-door-closed-line"></i>Sair</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : null}
            </>
          ) : (
            <>
              <Link className="btn_cadastrar" to="/#">Cadastrar</Link>
              <Link className="btn_acessar" to="/acessar">
                Acessar<i className="ri-arrow-right-up-line"></i>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
