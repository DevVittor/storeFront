//import axios from "axios";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";

export default function Inicio() {
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 113);
  useEffect(() => {
    function handleResize() {
      setAlturaDisponivel(window.innerHeight - 113); // Atualiza a altura disponível ao redimensionar a janela
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const divPrincipalStyle = {
    minHeight: `${alturaDisponivel}px`,// Apenas para visualização, pode ser removido
  };
  document.title = "Inicio";
  /* const [info, setInfo] = useState([]);
   
   useEffect(() => {
     axios.get("http://localhost:8080/v1/api")
       .then((res) => {
         setInfo(res.data.mensagem);
       }).catch((error) => console.error(`Deu ruim nesse error ${error}`));
   }, []);*/

  return (
    <div className={styles.container} style={divPrincipalStyle}>
      <div className={styles.card} >
        <img src="https://images.pexels.com/photos/19260251/pexels-photo-19260251/free-photo-of-amsterda-amsterdam-apartamento-arquitetura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className={styles.card}>
        <img src="https://images.pexels.com/photos/19260251/pexels-photo-19260251/free-photo-of-amsterda-amsterdam-apartamento-arquitetura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className={styles.card}>
        <img src="https://images.pexels.com/photos/19260251/pexels-photo-19260251/free-photo-of-amsterda-amsterdam-apartamento-arquitetura.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}
