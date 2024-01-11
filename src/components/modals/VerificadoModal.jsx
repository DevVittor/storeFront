import "../../styles/VerificadoModal.css";
//import {useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
function VerificadoModal({setVerificado}){

    return(
            <div className="modal_verificado" >
                <div className="verificado_info">
                    <div className="verificado_title_price">
                        <h2><i className="ri-verified-badge-fill"></i>Verificada</h2>
                        <h2>R$ 9,97/mês</h2>
                    </div>
                    <p>There are no monthly charges for ecommerce features, and we only take a small cut of each sale so that you keep the majority of what you earn.</p>              
                </div>
                <div className="verificado_vencimento">
                    <label htmlFor="checkbox_vencimento">
                        <h3>Anual</h3>
                        <input 
                            type="checkbox" 
                            id="checkbox_vencimento"
                        />
                    </label>
                </div>
                <div className="verificado_features">
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
                <div className="btn_verificado">
                    <button  onClick={() => {
                        setVerificado(false);
                        console.log("Clicou no cancel");
                    }}>Cancel</button> 
                    <button><i className="ri-verified-badge-fill"></i>Verificar</button> 
                </div>
            </div>
    );
}
VerificadoModal.propTypes = {
    setVerificado: PropTypes.func.isRequired
}
export default VerificadoModal;
