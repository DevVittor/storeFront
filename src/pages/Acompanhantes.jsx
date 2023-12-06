import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Acomp.module.css';
import { Link } from 'react-router-dom';
function Acompanhantes() {

    const [info, setInfo] = useState([]);
    const upload = "http://localhost:8080/upload/";

    useEffect(() => {
        axios.get("http://localhost:8080/v1/api/acompanhantes")
            .then((res) => {
                console.log(res);
                setInfo(res.data.dados);
            }).catch((error) => console.error(`Deu ruim nesse error ${error}`));
    }, []);


    return (
        <div>
            <h1>Acompanhantes</h1>
            {info.map((items) => (
                <Link to={`/acompanhantes/${items._id}`} key={items._id}>
                    <div >
                        <img className={styles.imgTag} src={`${upload}${items.avatar[0]}`} alt={`${items.avatar}`} />
                        <h2>{items.marca}</h2>
                        <h3>R$ {items.valor}/mês</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Acompanhantes;
