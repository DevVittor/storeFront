import PropTypes from 'prop-types';
import "../../styles/FilterModal.css";
import SearchProfile from '../SearchProfile';
function FilterModal({acomp,genero,setResult,setLoading,limit,setAcomp}){

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
        <div className="modal_filter">
            <div className='title_filter_acomp'>
                <h2><i className="ri-filter-line"></i>Filtro:</h2>
            </div>
            <div className="search_option_acomp">
                <i className="ri-search-line"></i>
                <SearchProfile acomp={acomp} genero={genero} setResult={setResult} setLoading={setLoading} limit={limit} setAcomp={setAcomp}/>
            </div>
            <div className="cache_filter_acomp">
                <span>R$</span>
                <input type="text" name="max_price" id="max_price_acomp" maxLength={5} pattern='^[0-9]+([,.][0-9]+)?$' placeholder="Preço/Hora"/>
            </div>
            <div className="idade_filter_acomp">
                <i className="ri-calendar-todo-fill"></i>
                <input type="text" name="idade_filter" id="max_price_acomp" maxLength={2} pattern='^[0-9]+([,.][0-9]+)?$' placeholder="Idade"/>
            </div>
            <details className='details_corpo_acomp'>
                <summary className='summary_corpo_acomp'>Corpo</summary>
                <div className="corpo_filter_acomp">
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_magra" />
                        <label htmlFor="check_filter_magra">
                            Magra
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_normal" />
                        <label htmlFor="check_filter_normal">
                            Normal
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_sarada" />
                        <label htmlFor="check_filter_sarada">
                            Sarada(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_gorda" />
                        <label htmlFor="check_filter_gorda">
                            Gorda(o)
                        </label>
                    </div>
                </div>
            </details>
            <details className='details_corpo_acomp'>
                <summary className='summary_corpo_acomp'>Etnia</summary>
                <div className="corpo_filter_acomp">
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_magra" />
                        <label htmlFor="check_filter_magra">
                            Branca(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_normal" />
                        <label htmlFor="check_filter_normal">
                            Morena(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_sarada" />
                        <label htmlFor="check_filter_sarada">
                            Parda(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_gorda" />
                        <label htmlFor="check_filter_gorda">
                            Negra(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_gorda" />
                        <label htmlFor="check_filter_gorda">
                            Asiática(o)
                        </label>
                    </div>
                    <div className='check_filter_corpo'>
                        <input type="checkbox" name="" id="check_filter_gorda" />
                        <label htmlFor="check_filter_gorda">
                            Indigêna
                        </label>
                    </div>
                </div>
            </details>
            <details className="details_corpo_acomp">
                <summary className='summary_corpo_acomp'>Serviços</summary>
                <div className='corpo_filter_acomp'>
                    {service.map((item,index)=>(
                        <div key={index} className="check_filter_corpo">
                            <input type="checkbox" name="" id="check_filter_magra" />
                            <label htmlFor="">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            </details>
        </div>
    )
}

FilterModal.propTypes = {
    acomp: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]).isRequired,
    genero: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]).isRequired,
    setResult: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]).isRequired,
    setLoading: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]).isRequired,
    limit: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number
    ]).isRequired,
    setAcomp: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool
    ]).isRequired,
}

export default FilterModal;