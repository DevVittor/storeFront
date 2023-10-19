import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/inicio.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
    const [data, setData] = useState([]);
    const [imagem,setImagem] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(res => {
                setData(res.data.resultado);
                setImagem(res.data.localImg);
            })
            .catch(error => console.error(`Deu ruim aqui ${error}`));
    }, []);

    return (
        <main>
            <section>
                <div className='container-card'>
                    {data.map(item=>(
                            <Link to={`/${item.id}`} key={item.id}>
                                <div className="box-card" >
                                    <div className='box-img'>
                                        <img src={`${imagem}${item.logo}`} alt="" />
                                    </div>
                                    <div className='box-name'>
                                        <h2>{item.marca}</h2>
                                        <h3>R$ {item.preco}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </main>
    );
}
