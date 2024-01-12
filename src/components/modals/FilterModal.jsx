import PropTypes from 'prop-types';
import "../../styles/FilterModa.css";
import SearchProfile from '../SearchProfile';
function FilterModal({acomp,genero,setResult,setLoading,limit,setAcomp}){
    return (
        <div className="modal_filter">
            <SearchProfile acomp={acomp} genero={genero} setResult={setResult} setLoading={setLoading} limit={limit} setAcomp={setAcomp}/>
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