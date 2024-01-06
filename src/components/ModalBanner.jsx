import {useState} from 'react';
import PropTypes from 'prop-types';
export default function ModalBanner({isOpen,onClose}){
  if(!isOpen) return null;


  function alterBanner() {
    onClose();
  }
  

  const modalBanner = {
    display: isOpen ? 'flex' : 'none',
    justifyContent:"center",
    alignItems:"center", 
    position:"fixed",
    inset:"0",
    height:"100%",
    width:"100%",
    zIndex:9999,
    background:"transparent"
  }

  const centralBanner = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"20px",
    flexDirection:"column",
    background:"white",
    height:"400px",
    width:"700px",
    borderRadius:"12px"
  }

  return (
    <div style={modalBanner} >
      <div style={centralBanner}>
        <i onClick={alterBanner} style={{color:"red",display:"inline-flex",alignItems:"center",justifyContent:"flex-end",width:"100%",fontSize:"24px",cursor:"pointer"}} className="ri-close-circle-fill"></i>    
        <h1>Create in Banner</h1> 
        <button>Criar Anúncio</button>  
      </div>
    </div>
  )
}

ModalBanner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
