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
            <SearchProfile acomp={acomp} genero={genero} setResult={setResult} setLoading={setLoading} limit={limit} setAcomp={setAcomp}/>
            <div className="cache_filter_acomp">
                <div className='max_min_cache'>
                    <div className="min_cache_acomp">
                        <input type="range" name="" id="" />
                        <label htmlFor="">
                            min
                        </label>
                    </div>
                    <div className="max_cache_acomp">
                        <input type="range" name="" id="" />
                        <label htmlFor="">
                            max
                        </label>
                    </div>
                </div>
            </div>
            <div className="idade_filter_acomp">
                <input type="range" name="" id="idade_filter" />
                <label htmlFor="idade_filter">
                    18
                </label>
            </div>
            <div className="corpo_filter_acomp">
                <div>
                    <input type="checkbox" name="" id="check_filter_corpo" />
                    <label htmlFor="check_filter_corpo">
                        Magra
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="check_filter_corpo" />
                    <label htmlFor="check_filter_corpo">
                        Normal
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="check_filter_corpo" />
                    <label htmlFor="check_filter_corpo">
                        Sarado
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="check_filter_corpo" />
                    <label htmlFor="check_filter_corpo">
                        Gorda
                    </label>
                </div>
            </div>
            <div className="etnia_filter_acomp">
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Branca(o)
                    </label>
                </div>
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Morena(o)
                    </label>
                </div>
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Parda(o)
                    </label>
                </div>
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Negra(o)
                    </label>
                </div>
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Asiática(o)
                    </label>
                </div>
                <div className='etnia_filter'>
                    <input type="checkbox" name="" id="check_filter_etnia" />
                    <label htmlFor="check_filter_etnia">
                        Indigêna
                    </label>
                </div>
            </div>
            <div className="services_filter_acomp">
                {service.map((item,index)=>(
                    <div key={index} className="">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">
                            {item}
                        </label>
                    </div>
                ))}
            </div>
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