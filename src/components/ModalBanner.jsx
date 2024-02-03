import { useState } from "react";
import "../styles/ModalBanner.css";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import axios from "axios";
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
  const [nameBanner,setNameBanner] = useState("");
  const [bannerImg,setBannerImg] = useState("");
  const [linkBanner,setLinkBanner] = useState("");

  useEffect(() => {
    if (bannerInput) {
      const megabytes = bannerInput.size / (1024 ** 2);
      if (megabytes < 2) {
        setViewBanner(URL.createObjectURL(bannerInput));
      } else {
        console.log("Imagem muito grande. Limite de 2MB.");
        setBannerInput(null);
      }
    }
  }, [bannerInput]);



  function submitBanner(e){
    e.preventDefault();
    const formData = {
      title:nameBanner,
      banner:bannerImg,
      link:linkBanner
    }
    axios.post("http://localhost:8080/publicidade/create",formData)
    .then(()=>{
      console.log(`Banner criado com sucesso!`);
    })
  }

  return (
    <div  className='modal_banner_anunciante'>
      <form onSubmit={submitBanner}> 
        <div className="file_banner_anunciante">
          <input type="file" name="" accept='image/jpg, image/webp, image/jpeg' id="file_anunciante" 
          onChange={(e)=>setBannerInput(e.target.files[0])}/>
          <label htmlFor="file_anunciante">
            <h1>{bannerInput === null 
              ? `Banner Carregado`
              : `Enviar Banner`}
            </h1>  
          </label>
        </div>
      {bannerInput && (
        <div className="preview_banner_anunciante">
          <img src={viewBanner}alt="" onChange={(e)=>setBannerImg(e.target.files[0])}/>
        </div>
      )}
      {bannerInput && 
        <div className="">
          <input type="text" name="name" id="" placeholder="Name" onChange={(e)=>setNameBanner(e.target.value)}/>
          <input type="url" name="link" id="" pattern="https://.*" required
          placeholder="https://example.com" onChange={(e)=>setLinkBanner(e.target.value)}/>
        </div>
      }
      </form>
      <div className="obs_banner_anunciante">
        <span>Resolução de até 800px x 500px com o tamanho de até 2mb com o tipos de .JPG, .WEBP, .JPEG</span>
      </div>
    </div>
  )
}
ModalBanner.propTypes = {
  isOpen: PropTypes.func
}