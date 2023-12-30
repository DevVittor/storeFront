import { useParams } from "react-router-dom";
import axios from 'axios';
import "../styles/services.css";
import { useEffect, useState } from "react";
function Services() {

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/${id}`)
      .then(res => {
        setData(res.data.infoData[0]);
      }).catch(error => console.error(error));
  }, [id])

  if (Object.keys(data).length === 0) {
    return <div style={{color:"white"}}>Loading...</div>;
  }

  // Obtém os serviços especiais e normais do produto
  const servicosNormais = data.servicosNormais || {};
  const servicosEspeciais = data.servicosEspeciais || {};

  // Combina as chaves de ambos os objetos
  const allServices = { ...servicosNormais, ...servicosEspeciais };

  return (
    <div className="container-slider">
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <nav>
              <ul>
                {Object.entries(allServices).map(([servico, valor]) => {
                  if (valor === 'true') {
                    return <li key={servico}>{servico}</li>;
                  }
                  return null;
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services; 
