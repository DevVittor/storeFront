import '../styles/nova.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ModalBanner from '../components/ModalBanner';
function ProfileBanner(props) {

  const [banner,setBanner] = useState(false);
  
  const abrirModal = () => {
    setBanner(true);
  };

  const fecharModal = () => {
    setBanner(false);
  }; 

  return(
    <div className="nova_components"> 
      <Link className="components_card" target="_blank" to="https://twitter.com/home">
        <img src={props.banner} alt={props.alt}/>
      </Link>
      <div className="component_button" onClick={abrirModal}><button><i className="ri-megaphone-line"></i>Anunciar</button></div>
      <ModalBanner isOpen={banner} onClose={fecharModal}/>
    </div>
  )
}

ProfileBanner.propTypes = {
  banner: PropTypes.string,
  alt: PropTypes.string
}

export default ProfileBanner;
