import "../../styles/EtapaTres.css";
import PropTypes from 'prop-types';
export default function EtapaTres({ numero,children }) {

    const service = [
        "Anal",
        "Beijo na Boca",
        "Casal",
        "Namoradinha",
        "Fantasias",
        "Massagem erótica",
        "Chuva Dourada",
        "Chuva Negra",
        "Striptease",
        "Festas",
        "Eventos",
        "Viagens",
        "Anal Giratório",
    ];

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 0{numero}|03</h2>
            <div className="service_acomp_row">
                {service.map((item,index)=>{
                    return (
                        <div className="box_service_acomp" key={index}>
                            <input type="checkbox" name="" id={`service_checkout_acomp_${index}`} />
                            <label htmlFor={`service_checkout_acomp_${index}`}>
                                {item}
                            </label>
                        </div>
                    ); 
                })};   
            </div>
            {children}
        </div>
    )
}
EtapaTres.propTypes ={
    numero: PropTypes.func,
    children: PropTypes.node,
}