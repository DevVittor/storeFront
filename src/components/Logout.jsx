import PropTypes from 'prop-types';
import '../styles/logout.css';
export default function Logout({ confirmLogout, modal }) {
    const removeData = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("userId");
        modal(false);
        confirmLogout();
    }

    return (
        <div className='modal_logout'>
            <div className="title_logou">
                <h2>Tem certeza ?</h2>
            </div>
            <div className="btns_logout">
                <button onClick={() => modal(false)}><i className="ri-close-circle-line"></i>Não</button>
                <button onClick={removeData}><i className="ri-door-open-fill"></i>Sim</button>
            </div>
            <div className='img_logout'>
                <img src="src/assets/logoutGif.gif" alt="" />
            </div>
        </div>
    );
}

Logout.propTypes = {
    confirmLogout: PropTypes.func.isRequired,
    modal: PropTypes.func.isRequired,
};
