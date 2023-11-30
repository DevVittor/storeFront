import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/inicio.css";
import { Link } from "react-router-dom";

export default function Inicio() {
  document.title = "Inicio";
  const [ordem, setOrdem] = useState("ASC"); // Valor inicial do estado do select
  const [inputBusca, setInputBusca] = useState("");
  const [data, setData] = useState([]);
  const [imagem, setImagem] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");

  useEffect(() => {
    fetchData(ordem, inputBusca, precoMin, precoMax); // Inicialmente, busca os produtos com base nos valores iniciais
  }, [ordem, inputBusca, precoMin, precoMax]);

  const fetchData = (ordem, inputBusca, precoMin, precoMax) => {
    axios
      .get(`http://localhost:8080/?ordem=${ordem}&inputBusca=${inputBusca}&precoMin=${precoMin}&precoMax=${precoMax}`)
      .then((res) => {
        setData(res.data.resultado);
        setImagem(res.data.localImg);
      })
      .catch((error) => console.error(`Deu ruim aqui ${error}`));
  };

  const handleOrdemChange = (e) => {
    setOrdem(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputBusca(e.target.value);
  };

  const handlePrecoMinChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setPrecoMin(value);
    }
  };

  const handlePrecoMaxChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setPrecoMax(value);
    }
  };

  return (
    <main>
      <section>
        <form>
          <div>
            <select name="ordem" value={ordem} onChange={handleOrdemChange}>
              <option value="ASC">Ascendente</option>
              <option value="DESC">Decrescente</option>
            </select>
          </div>
          <div>
            <input
              type="search"
              name="inputBusca"
              value={inputBusca}
              id=""
              onChange={handleInputChange} />
          </div>
          <div className="filter-price">
            <input
              type="number"
              name="precoMin"
              min={0}
              value={precoMin}
              id=""
              onChange={handlePrecoMinChange}
              placeholder="Preço Minimo"
            />
            <input
              type="number"
              name="precoMax"
              min={0}
              value={precoMax}
              id=""
              onChange={handlePrecoMaxChange}
              placeholder="Preço Máximo"
            />
          </div>
        </form>
      </section>
      <section>
        <div className="container-inicio">
          <div className="box-filter">

          </div>
          <div className="box-card-acomp">
            {data.map((item, index) => (
              <div className="card-acomp" key={index}>
                <div className="acomp-img">
                  <img loading="lazy" src={`${imagem}${item.avatar}`} alt={item.avatar} />
                  <div className="acomp-detalhes">
                    <div className="acomp-selos">
                      <nav>
                        <ul>
                          <li>
                            <i className="ri-verified-badge-fill"></i>
                          </li>
                          <li>
                            <i className="ri-fire-fill"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="acomp-price">
                      <h3>R$ {item.preco}/H</h3>
                      <span>|</span>
                      <h3>{item.genero}</h3>
                    </div>
                  </div>
                </div>
                <div className="acomp-info">
                  <div className="acomp-name-local">
                    <div className="acomp-name">
                      <h2>{item.nome}</h2>
                    </div>
                    <div className="acomp-local">
                      <span>{item.estado}, {item.cidade}</span>
                    </div>
                  </div>
                  <div className="acomp-url">
                    <Link to={`/${item.id}`}><i className="ri-empathize-fill"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}
