import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import LoginModal from "../components/modals/LoginModal";
import VerificadoModal from "../components/modals/VerificadoModal";
import DestaqueModal from "../components/modals/DestaquesModal";
import "../styles/header.css";
export default function Header() {
  const [login, setLogin] = useState(false);
  const [verificado, setVerificado] = useState(false);
  const [destaque,setDestaque] = useState(false);
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
  //Solução);
   
  useEffect(()=>{},[])

  useEffect(()=>{
    if(verificado && destaque){
      setVerificado(false);
      setDestaque(true);
    }
    
  },[destaque]);
  useEffect(()=>{
    if(destaque && verificado){
      setDestaque(false); 
      setVerificado(true);
    }
    
  },[verificado])

  useEffect(()=>{
    if(abrir){
      setAbrir(false);
    }
  },[destaque]);  

  useEffect(()=>{
    window.addEventListener("click", (event) => {
      if(abrir && !event.target.closest(".box-acesso")){
        setAbrir(false);
      }
    });  
  },[abrir])

  useEffect(()=>{
    window.addEventListener("click", (event) => {
      if(!event.target.closest(".login_modal") &&
        !event.target.closest(".modal_verificado") &&
        !event.target.closest(".modal_destaque") &&
        !event.target.closest(".box-acesso")){
          setDestaque(false); 
          setVerificado(false);
          setLogin(false);
      }
    });
  },[abrir]);

  return (
    <header>
      {login && <LoginModal setLogin={setLogin} />}
      {verificado && <VerificadoModal setVerificado={setVerificado} />} 
      {destaque && <DestaqueModal setDestaque={setDestaque} />} 
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
                {abrir ? (
                  <i className="ri-close-line"></i>
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
                          <Link 
                            onClick={() => {
                              setDestaque(true);
                            }}
                          >
                          <i className="ri-flashlight-fill"></i>
                          Destacar
                          </Link>
                        </li>
                        <li>
                          <Link 
                            onClick={() => {
                              setVerificado(true);
                            }}
                          ><i className="ri-verified-badge-fill"></i>Verificar</Link>
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
              <Link 
                onClick={() => {
                  setLogin(true);
                }}
              className="btn_acessar">
                Acessar<i className="ri-arrow-right-up-line"></i>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}