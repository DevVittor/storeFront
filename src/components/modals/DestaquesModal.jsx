import "../../styles/DestaquesModal.css";
import {useRef,useEffect} from 'react';
function DestaquesModal({setDestaque,destaqueRef,menuRef,nameRef,iconRef}){
    useEffect(()=>{
        window.addEventListener("click", (event) => {
            if (event.target !== destaqueRef.current &&
                event.target !== menuRef.current &&
                event.target !== nameRef.current &&
                event.target !== iconRef.current
                ){
                setDestaque(true);
            }
        });
    },[setDestaque])
    return(
            <div ref={destaqueRef}  className="modal_destaque" >
                <div className="destaque_info">
                    <div className="destaque_title_price">
                        <h2><i className="ri-flashlight-fill"></i>Destaque</h2>
                        <h2>R$ 4,97/mês</h2>
                    </div>
                    <p>There are no monthly charges for ecommerce features, and we only take a small cut of each sale so that you keep the majority of what you earn.</p>              
                </div>
                <hr style={{border:"2px solid #212121"}}/>
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
                    <button>Cancel</button> 
                    <button><i className="ri-flashlight-fill"></i>Destacar</button> 
                </div>
            </div>
    );
}
export default DestaquesModal;