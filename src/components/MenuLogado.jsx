import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
export default function MenuLogado({clickMenu,abrir}) {

    const [nome,setNome] = useState("");

    const id = localStorage.getItem("userId");

    useEffect(()=>{
        if(!id) return;
        axios.get(`http://localhost:8080/v1/api/login/${id}`)
        .then((res)=>{
            const response = res.data.nome;
            const firstName = response.split(" ");
            setNome(firstName[0]);
        }).catch(error=>console.error(`Não me retornou nenhum nome de usuário esse get ${error}`))
    },[id]);

    return (
        <button id="btn_profile" onClick={clickMenu}>
            <span>{nome}</span>
                    {abrir ? (
                        <i className="ri-close-line"></i>
                    ) :(
                <i className="ri-menu-fill"></i>
            )} 
        </button>
    )
}
MenuLogado.propTypes = {
    clickMenu: PropTypes.func,
    abrir: PropTypes.bool
}