import PropTypes from "prop-types";
import axios from "axios";
import styles from "./CardPlanos.module.css";
export const CardPlanos = (props) => {
  function pegarReq(event) {
    event.preventDefault();
    const data = {
      priceId: props.priceId, // Substitua pelo valor correto
    };

    axios.post("http://localhost:8080/v1/api/planos/checkoutstripe", data)
      .then((res) => {
        //console.log(res);
        window.location.href = res.data.url;
      })
      .catch((error) => console.error(`Deu ruim ${error}`));
  }

  return (
    <form onSubmit={pegarReq}>
      <div className={styles.planoA} id={props.id}>
        <div className={styles.plano_price}>
          <h3>
            <i className={props.emblema}></i>
            {props.planos}
          </h3>
        </div>
        <div className={styles.price_card}>
          <span>R$</span>
          <h1>{props.price}/</h1>
          <span>{props.tempo}</span>
        </div>
        <div className={styles.plano_assinar}>
          <button type="submit">Selecione</button>
        </div>
        <div className={styles.plano_vantagens}>
          <nav>
            <ul>
              <li>
                <i className={props.icon[0]}></i>Destaque por 30 dias
              </li>
              <li>
                <i className={props.icon[1]}></i>Grupo Vip Telegram
              </li>
              <li>
                <i className={props.icon[2]}></i>Selo de Verificado
              </li>
              <li>
                <i className={props.icon[3]}></i>Selo de Destaque
              </li>
              <li>
                <i className={props.icon[4]}></i>Slider nas páginas
              </li>
              <li>
                <i className={props.icon[5]}></i>Lista de Destaques
              </li>
              <li>
                <i className={props.icon[6]}></i>Banner de Destaques
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.renovar}>
          <span>
            <i className="ri-checkbox-line"></i>Renovação Automática
          </span>
        </div>
      </div>
    </form>
  );
};
CardPlanos.propTypes = {
  emblema: PropTypes.string.isRequired,
  planos: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceId: PropTypes.string.isRequired,
};
