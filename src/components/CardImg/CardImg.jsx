import { useEffect, useState } from "react";
import styles from "./CardImg.module.css";
import PropTypes from "prop-types";
export const CardImg = (props) => {
  const [modal, setModal] = useState(true);

  function alterModal() {
    setModal(!modal);
  }

  useEffect(() => {
    if (!modal) {
      // Remova a barra de rolagem lateral
      document.documentElement.style.overflow = "hidden";
    } else {
      // Restaure o comportamento padrão de rolagem
      document.documentElement.style.overflow = "auto";
    }
  }, [modal]);

  function handleKeyDown(event) {
    if (event.key === "Escape" && modal) {
      setModal(true);
    }
  }

  useEffect(() => {
    // Adicione um ouvinte de eventos de teclado ao elemento body
    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      // Remova o ouvinte de eventos quando o componente é desmontado
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {modal ? (
        <div className={styles.card_usuario}>
          <img src={props.urlImg} alt="" onClick={alterModal} />
        </div>
      ) : (
        <div className={styles.card_modal} onClick={alterModal}>
          <div className={styles.modal}>
            <i className="ri-close-fill" onClick={alterModal}></i>
            <img src={props.urlImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
CardImg.propTypes = {
  urlImg: PropTypes.string.isRequired,
};
