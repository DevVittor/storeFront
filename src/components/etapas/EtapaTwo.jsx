import "../../styles/EtapaTwo.css";
import PropTypes from 'prop-types';
export default function EtapaTwo({numero,children}) {

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 0{numero}|03</h2>
            <div className="modal_formas_pagamentos_acomp">
                    <div className="box_pagamento_acomp">
                        <input type="checkbox" id="input_dinheiro_acomp"/>
                        <label htmlFor="input_dinheiro_acomp">
                            Dinheiro
                        </label>
                    </div>
                    <div className="box_pagamento_acomp">
                        <input  type="checkbox" id="input_pix_acomp"/>
                        <label htmlFor="input_pix_acomp">
                            Pix
                        </label>
                    </div>
                    <div className="box_pagamento_acomp">
                        <input  type="checkbox" id="input_credito_acomp"/>
                        <label htmlFor="input_credito_acomp">
                            Cartão de crédito
                        </label>
                    </div>
                    <div className="box_pagamento_acomp">
                        <input  type="checkbox" id="input_debito_acomp"/>
                        <label htmlFor="input_debito_acomp">
                            Cartão de Débito
                        </label>
                    </div>
            </div>
            <div className="modal_zap_price_acomp">
                <input type="text" placeholder="Whatsapp"/>
                <input type="number" placeholder="Valor por hora"/>
            </div>
            <div className="modal_etnia_corpo_acomp">
                <div className="modal_etnia_acomp">
                    <select name="" id="">
                        <option value="" disabled hidden selected>Etnia</option>
                        <option value="">Branca(o)</option>
                        <option value="">Morena(o)</option>
                        <option value="">Parda(o)</option>
                        <option value="">Negra(o)</option>
                        <option value="">Asiática(o)</option>
                        <option value="">Indigêna</option> 
                    </select> 
                </div>
                <div className="modal_corpo_acomp">
                    <select name="" id="">
                        <option value="" selected hidden disabled>Corpo</option>
                        <option value="">Magro</option>
                        <option value="">Normal</option>
                        <option value="">Sarado</option>
                        <option value="">Gordo</option>
                    </select>
                </div>
            </div>
            <div className="modal_altura_peso_acomp">
                <div className="modal_altura_acomp">
                    <select name="" id="">
                        <option value="" selected hidden disabled>Altura</option>
                        <option value="">Magro</option>
                        <option value="">Normal</option>
                        <option value="">Sarado</option>
                        <option value="">Gordo</option>
                    </select>
                </div>
                <div className="modal_peso_acomp">
                    <select name="" id="">
                        <option value="" selected hidden disabled>Peso</option>
                        <option value="">Magro</option>
                        <option value="">Normal</option>
                        <option value="">Sarado</option>
                        <option value="">Gordo</option>
                    </select>
                </div>
            </div>
            {children}
        </div>
    )
}
EtapaTwo.propTypes = {
    numero: PropTypes.func,
    children: PropTypes.node
}