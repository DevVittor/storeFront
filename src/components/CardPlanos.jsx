import PropTypes from "prop-types";
import "../styles/cardPlanos.css";
export default function CardPlanos(props) {
  return (
    <div className="planoA">
      <div className="plano-price">
        <h3>
          <i className={props.emblema}></i>
          {props.planos}
        </h3>
        <h1>
          <h2>R$</h2> {props.price}/<h4>{props.tempo}</h4>
        </h1>
      </div>
      <div className="plano-vantagens">
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
              <i className={props.icon[3]}></i>Selo de Profissional
            </li>
            <li>
              <i className={props.icon[4]}></i>Selo de Destaque
            </li>
            <li>
              <i className={props.icon[5]}></i>Slider nas páginas
            </li>
            <li>
              <i className={props.icon[6]}></i>Lista de Destaques
            </li>
            <li>
              <i className={props.icon[7]}></i>Banner de Destaques
            </li>
          </ul>
        </nav>
      </div>
      <div className="renovar">
        <span>
          <i className="ri-checkbox-line"></i>Renovação Automática
        </span>
      </div>
      <div className="plano-assinar">
        <button>
          <input type="hidden" name="" />
          Assinar<i className="ri-checkbox-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}
CardPlanos.propTypes = {
  emblema: PropTypes.string.isRequired,
  planos: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tempo: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
};
