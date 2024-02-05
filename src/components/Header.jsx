import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {LoginModal} from "../components/modals/LoginModal";
import {VerificadoModal} from "../components/modals/VerificadoModal";
import {DestaquesModal} from "../components/modals/DestaquesModal";
import {EtapaType} from "./etapas/EtapaType";
import "../styles/header.css";
import MenuLogado from "./MenuLogado";
import MenuDeslogado from "./MenuDeslogado";
import Logout from "./Logout";
export const HeaderBar=()=> {

  const [type,setType] = useState(false);
  const [login, setLogin] = useState(false);
  const [verificado, setVerificado] = useState(false);
  const [destaque,setDestaque] = useState(false);
  const [abrir,setAbrir] = useState(false);

  const token = localStorage.getItem("Token");

  function clickMenu(){
    setAbrir(prevOpen=>!prevOpen);
  }
  //Solução);

  useEffect(()=>{
    if(verificado){
      setDestaque(false)
      setAbrir(false);
    }else{
      setVerificado(false);
      setAbrir(false);
    }
  },[verificado, destaque])

  useEffect(()=>{
    window.addEventListener("click", (event) => {
      if(abrir &&  !event.target.closest(".box-acesso")){
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

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(!logoutModalOpen);
  }

  return (
    <header>
      {type && <EtapaType />}
      {login && <LoginModal setLogin={setLogin} />}
      {verificado && <VerificadoModal setVerificado={setVerificado} />} 
      {destaque && <DestaquesModal setDestaque={setDestaque} />} 
      <div className="container-header">
        <div className="container-logo">
          <Link to="/">
            <h1>Acomp<b>X</b></h1>
          </Link>
        </div>
        <div className="box-acesso">
          {token ? (
            <>
              <MenuLogado clickMenu={clickMenu} abrir={abrir}/>
              {abrir ? (
                  <div className="popUpMenu" >
                    <nav>
                      <ul>
                        <li>
                          <Link to={`/#`}><i className="ri-user-search-line"></i>Perfil</Link>
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
                        <li onClick={() => handleLogout()}>
                          <i className="ri-door-closed-line"></i>Sair
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : null}
            </>
          ) : (
            <MenuDeslogado setType={setType} setLogin={setLogin}/>
          )}
        </div>
        {logoutModalOpen && (
          <Logout modal={setLogoutModalOpen} confirmLogout={handleLogout} />
        )}
      </div>
    </header>
  );
}