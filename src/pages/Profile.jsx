import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Profile() {
  const {id} = useParams();
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/${id}`)
    .then(res=>{
      document.title = res.data.infoData[0].marca;
      setData(res.data.infoData);
    }).catch(error=>{
      console.error(error);
    });
  },[id]);
  return (
    <div>
      {data.map(info=>(
          <div key={info.id}>
            <img src={`http://localhost:5000/upload/${info.logo}`} alt="" />
            <h2>Marca: {info.marca}</h2>
            <h3>Preço: R$ {info.preco}</h3>
          </div>
        ))
      }
    </div>
  )
}
