import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/inicio.css";
import { Link } from "react-router-dom";

export default function Inicio() {
  document.title = "Inicio";
  const [ordem, setOrdem] = useState("ASC"); // Valor inicial do estado do select
  const [data, setData] = useState([]);
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    fetchData(ordem); // Inicialmente, busca os produtos em ordem ascendente
  }, [ordem]);

  const fetchData = (ordem) => {
    axios
      .get(`http://localhost:8080/?ordem=${ordem}`)
      .then((res) => {
        setData(res.data.resultado);
        setImagem(res.data.localImg);
      })
      .catch((error) => console.error(`Deu ruim aqui ${error}`));
  };

  const handleOrdemChange = (e) => {
    setOrdem(e.target.value);
  };

  return (
    <main>
      <section>
        <form>
          <select name="ordem" value={ordem} onChange={handleOrdemChange}>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Decrescente</option>
          </select>
        </form>
      </section>
      <section>
        <div className="container-card">
          {data.map((item) => (
            <Link to={`/${item.id}`} key={item.id}>
              <div className="box-card">
                <div className="box-img">
                  <img src={`${imagem}${item.logo}`} alt="" />
                </div>
                <div className="box-name">
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
