import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";
function SearchProfile({acomp,genero,setResult,setLoading,limit,setAcomp}) {
    useEffect(()=>{
        if(acomp.trim() !== ""){
            axios.get(`http://localhost:8080/v1/api/acompanhantes?name=${acomp}&genero=${genero}&limit=0`)
            .then((res)=>{
                const axiosResponse = res.data.dados;
                const filterAxios = axiosResponse.filter(item => item.nome.toLowerCase().includes(acomp.toLowerCase()));
                setResult([...filterAxios]);
            }).catch((error)=>{
                console.error(error)
            })
            .finally(()=>setLoading(false));
        } else {
          // Se o campo de busca estiver vazio, exibir todos os resultados novamente
        axios.get(`http://localhost:8080/v1/api/acompanhantes?genero=${genero}&limit=${limit}`)
            .then((res) => {
                setResult(res.data.dados);
            }).catch((error) => {
                console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`);
            });
        }
    },[acomp, genero, limit,setResult,setLoading]);
    return (
        <div className="box_search">
            <input type="search" name="nome" value={acomp} onChange={(e) => setAcomp(e.target.value)} placeholder="Digite um nome" />
        </div>
    )
}

SearchProfile.propTypes ={
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

export default SearchProfile;