import { useEffect, useState } from "react";
import "../../styles/TypeAccount.css";
export const TypeAccount = ()=>{

  const [selectedType,setSelectedType] = useState("");
  const [alturaAtual,setAlturaAtual] = useState(window.innerHeight - 65);
 useEffect(()=>{
  setAlturaAtual(window.innerHeight - 65);
  console.log("Altura",alturaAtual);
 },[alturaAtual]);
  function handleClick(typeName){
    setSelectedType(typeName);
  }

  const Selected = {
    background:"rgba(230, 62, 33, 1)",
    color:"#fff",
    transition:"all ease .3s"
  }
  const divSelected = {
    border:"2px solid rgba(230, 62, 33, 1)",
    borderRadius:"5px",
    transition:"all ease .3s"
  }

  const AlturaAtt = {
    minHeight:`${alturaAtual}px`
  }

  return(
    <div className="modal_type_account" style={AlturaAtt}>
      <div className="box_type_account">
        <div className="title_type">
          <h1><i className="ri-team-fill"></i>Quem eu sou ?</h1>
          <span>Cada tipo tem suas funções dentro da plataforma</span>
        </div>
        <div className="list_type_account">
          <div style={selectedType === "Cliente" ? divSelected : {} } className="select_type">
            <button style={selectedType === "Cliente" ? Selected : {} } onClick={()=>handleClick("Cliente")}><i className="ri-user-fill"></i>Cliente</button>
            <span>Para quem procura um serviço com segurança e praticidade.</span>
          </div>
          <div style={selectedType === "Acompanhante" ? divSelected : {} } className="select_type">
            <button style={selectedType === "Acompanhante" ? Selected : {} } onClick={()=>handleClick("Acompanhante")}><i className="ri-empathize-fill"></i>Acompanhante</button>
            <span>Mostre seus serviços para milhares de pessoas interessadas.</span>
          </div>
          <div style={selectedType === "Anunciante" ? divSelected : {} } className="select_type">
            <button style={selectedType === "Anunciante" ? Selected : {} } onClick={()=>handleClick("Anunciante")}><i className="ri-megaphone-fill"></i>Anunciante</button>
            <span>Para quem deseja divulgar a sua marca ou empresa para os milhares de pessoas.</span>
          </div>
        </div>
        {selectedType && (
          <div className="type_btn">
            <button>Criar Conta</button>
          </div>
        )}
  </div>
 
    </div>
  )
}
