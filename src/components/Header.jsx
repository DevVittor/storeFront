import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
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
    setAbrir(!abrir);
  }

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
              <button onClick={clickMenu}>
                <span>Jéssica</span>
                <i className="ri-menu-fill"></i>
              </button>
              {abrir ? (
                  <div className="popUpMenu" >
                    <nav>
                      <ul>
                        <li>
                          <Link><i className="ri-user-search-line"></i>Perfil</Link>
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
                          <Link><i className="ri-door-closed-line"></i>Sair</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : null}
            </>
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
