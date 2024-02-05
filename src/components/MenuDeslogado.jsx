import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function MenuDeslogado({setType,setLogin}) {
  return (
    <div>
        <Link onClick={()=>{setType(true)}} className="btn_cadastrar" to="/#">Cadastrar</Link>
        <Link 
        onClick={() => {
        setLogin(true);
        }}
        className="btn_acessar">
            Acessar<i className="ri-arrow-right-up-line"></i>
        </Link>
    </div>
  )
}
MenuDeslogado.propTypes = {
    setType: PropTypes.bool,
    setLogin: PropTypes.bool
}