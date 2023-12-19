import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './Acomp.module.css';
import { Link, useParams } from 'react-router-dom';
function Acompanhantes() {
  const {id} = useParams();
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
      <Link to={`/acompanhantes/${id}`}>                
        {info.map((items) => (
          <div key={items._id}>
            <img className={styles.imgTag} src={`https://images.pexels.com/photos/8832540/pexels-photo-8832540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} alt={`${items.avatar}`} />
            <h2>{items.marca}</h2>
            <h3>R$ {items.valor}/mês</h3>
          </div>
        ))}
      </Link>
    </div>
  )
}

export default Acompanhantes;
