import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Profile() {
  const {id} = useParams();
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/${id}`)
    .then(res=>{
      document.title = res.data.infoData[0].marca || "Abrime";
      setData(res.data.infoData);
    }).catch(error=>{
      console.error(error);
    });
  },[id]);
  return (
    <div>
      {data.map(info=>(
          <div key={info.id}>
            <img src={`http://localhost:8080/upload/${info.logo}`} alt="" />
            <h2>Marca: {info.marca}</h2>
            <h3>Preço: R$ {info.preco}</h3>
          </div>
        ))
      }
    </div>
  )
}
