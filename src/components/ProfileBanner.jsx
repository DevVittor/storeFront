import '../styles/nova.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function ProfileBanner(props) {
  return(
    <div className="nova_components"> 
      <Link className="components_card" target="_blank" to="https://twitter.com/home">
        <img src={props.banner} alt={props.alt}/>
      </Link>
      <div className="component_button"><button><i className="ri-megaphone-line"></i>Anunciar</button></div> 
    </div>
  )
}

ProfileBanner.propTypes = {
  banner: PropTypes.string,
  alt: PropTypes.string
}

export default ProfileBanner;
