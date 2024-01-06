import PropTypes from 'prop-types';
import '../styles/ProfileCard.css';
function ProfileCard(props){

  return(
    <div className="container_card_profile ">
      <div className="card_avatar_profile"> 
        <img src={props.avatar} alt={props.alt} />
        <div className="card_selos_profile">
          <div className="card_selos_list">
            <nav>
              <ul>
                <li><i className="ri-verified-badge-fill"></i></li>
                <li><i className="ri-flashlight-fill"></i></li>
              </ul>
            </nav>
          </div>
          <div className="card_gen_price">
            <nav>
              <ul>
                <li>{props.genero}</li>
                <li>|</li>
                <li>R$ {props.caches}/H</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="card_name_profile">
        <h2>{props.nome}, {props.idade}</h2>
        <span>{props.estado}, {props.cidade}</span>
      </div>
    </div>
  )

}

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  alt: PropTypes.string,
  genero: PropTypes.string,
  caches: PropTypes.string,
  nome: PropTypes.string,
  idade: PropTypes.string,
  estado: PropTypes.string,
  cidade: PropTypes.string
}

export default ProfileCard;
