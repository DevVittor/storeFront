import "../../styles/DestaquesModal.css";
//import {useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
function DestaquesModal({setDestaque}){

    return(
            <div className="modal_destaque" >
                <div className="destaque_info">
                    <div className="destaque_title_price">
                        <h2><i className="ri-flashlight-fill"></i>Destaque</h2>
                        <h2>R$ 4,97/mês</h2>
                    </div>
                    <p>There are no monthly charges for ecommerce features, and we only take a small cut of each sale so that you keep the majority of what you earn.</p>              
                </div>
                <div className="destaque_vencimento">
                    <label htmlFor="checkbox_vencimento">
                        <h3>Anual</h3>
                        <input 
                            type="checkbox" 
                            id="checkbox_vencimento"
                        />
                    </label>
                </div>
                <div className="destaque_features">
                    <h3>Features</h3>
                    <nav>
                        <ul>
                            <li><i className="ri-checkbox-circle-line"></i>Instantly accept payments globally</li>
                            <li><i className="ri-checkbox-circle-line"></i>Fully automated sales tax compliance</li>
                            <li><i className="ri-checkbox-circle-line"></i>A.I fraud protection with payment risk intelligence</li>
                            <li><i className="ri-checkbox-circle-line"></i>Access to existing features+future releases each year</li>
                        </ul>
                    </nav>
                </div>
                <div className="btn_destaques">
                    <button  onClick={() => {
                        setDestaque(false);
                        console.log("Clicou no cancel");
                    }}>Cancel</button> 
                    <button><i className="ri-flashlight-fill"></i>Destacar</button> 
                </div>
            </div>
    );
}
DestaquesModal.propTypes ={
    setDestaque: PropTypes.func.isRequired
}
export default DestaquesModal;
