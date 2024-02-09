import PropTypes from "prop-types";
function Cardizinho(props) {
  return (
    <div className="card_profile">
      <div className="avatar_profile">
        <img
          src={
            props.avatar ||
            "https://images.pexels.com/photos/6779485/pexels-photo-6779485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="foto"
        />
        <div className="selos_profile">
          {/*<div className="selos_list">
                        <nav>
                            <ul>
                                <li><i className="ri-verified-badge-fill"></i></li>
                                <li><i className="ri-flashlight-fill"></i></li>
                            </ul>
                        </nav>
                    </div>*/}
          <div className="gen_price">
            <nav>
              <ul>
                <li>{props.genero || "Gênero"}</li>
                <li>|</li>
                <li>R$ {props.cache || "Cachê"}/H</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="name_profile">
        <h2>
          {props.nome || "Nome"} {props.sobrenome || "Sobrenome"},{" "}
          {props.idade || "idade"}
        </h2>
        <span>
          {props.estado || "Estado"}, {props.cidade || "cidade"}
        </span>
      </div>
    </div>
  );
}

Cardizinho.propTypes = {
  avatar: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  cache: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  sobrenome: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
  estado: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
};

export default Cardizinho;
