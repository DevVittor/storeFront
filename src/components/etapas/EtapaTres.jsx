import "../../styles/EtapaTres.css";

export default function EtapaTres() {

    const service = [
        "Anal",
        "Beijo na Boca",
        "Casal",
        "Boquete",
        "Jantar Romântico",
        "Festas",
        "Eventos",
        "Viagens",
        "Massagem Erótica",
        "Anal Giratório",
        "Chuva Dourada",
        "Chuva Negra",
        "Fantasia",
    ];

    return (
        <div className="container_etapa_type">
            <h2><i className="ri-signpost-line"></i> 03|03</h2>
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
        </div>
    )
}
