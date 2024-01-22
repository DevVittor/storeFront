import { useState } from "react";
import "../styles/ModalBanner.css";
import PropTypes from 'prop-types';
import { useEffect } from "react";
export default function ModalBanner({isOpen}){

  useEffect(()=>{
    if(isOpen){
      window.addEventListener("click",(event)=>{
        if(!event.target.closest(".modal_banner_anunciante") &&
          !event.target.closest(".component_button") &&
          !event.target.closest("#btn_profile")){
            isOpen(false);
          }
      })
    }
  },[isOpen]);

  const [bannerInput,setBannerInput] = useState("");
  const [viewBanner,setViewBanner] = useState("");
  const [prevBanner,setPrevBanner] = useState(false);
  const [backBanner, setBackBanner] = useState(true);

  useEffect(() => {
    if (bannerInput) {
      const megabytes = bannerInput.size / (1024 ** 2);
      if (megabytes < 2) {
        setViewBanner(URL.createObjectURL(bannerInput));
      } else {
        console.log("Imagem muito grande. Limite de 2MB.");
        setBannerInput(null);
        setViewBanner("");
      }
    }
  }, [bannerInput]);

  function handleBanner(){
    setBackBanner(!backBanner);
    setPrevBanner(!prevBanner);
  }

  return (
    <div  className='modal_banner_anunciante'>
      {backBanner && 
        <div className="file_banner_anunciante">
          <input type="file" name="" accept='image/jpg, image/webp, image/jpeg' id="file_anunciante" onChange={(e)=>setBannerInput(e.target.files[0])}/>
          <label htmlFor="file_anunciante">
            <h1>{bannerInput === null 
              ? "Enviar Banner" 
              : `Banner Carregado`}
            </h1>  
          </label>
        </div>
      }
      {prevBanner && !backBanner &&
        <div className="preview_banner_anunciante">
          <img src={viewBanner} alt="" />
        </div>
      }
      {bannerInput && 
        <div className="btn_preview_anunciante">
          <button className={prevBanner ? "close_preview" : "open_preview"} onClick={handleBanner}><i className="ri-picture-in-picture-fill"></i>{prevBanner ? "Fechar Visualização" : "Visualizar Banner"}</button>
        </div>
      }
      
      <div className="obs_banner_anunciante">
        <span>Resolução de até 800px x 500px com o tamanho de até 2mb com o tipos de .JPG, .WEBP, .JPEG</span>
      </div>
    </div>
  )
}
ModalBanner.propTypes = {
  isOpen: PropTypes.func
}