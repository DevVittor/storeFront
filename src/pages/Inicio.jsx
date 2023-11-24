//import { useEffect, useState } from "react";
//import axios from "axios";
import { useState } from "react";
import "../styles/inicio.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Inicio() {
  document.title = "Inicio";
  const [ordem, setOrdem] = useState("ASC"); // Valor inicial do estado do select
  /*const [data, setData] = useState([]);
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
  };*/

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
          {/*{data.map((item) => (
            <Link to={`/${item.id}`} key={item.id}>*/}
          <Link to="/2">
            <div className="box-card">
              <div className="box-img">
                {/*<img src={`${imagem}${item.logo}`} alt="" />*/}
                <img src="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="card-price-selo">
                  <nav>
                    <ul className="">
                      <li>
                        <i className="ri-verified-badge-fill"></i>
                      </li>
                      <li>
                        <i className="ri-flashlight-fill"></i>
                      </li>
                      <li>
                        <i className="ri-shield-check-fill"></i>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="box-name">
                {/*<h2>{item.marca}</h2>
                <h3>R$ {item.preco}/H</h3>*/}
                <h2>Jéssica Gomes</h2>
                <h3>R$ 250/H</h3>
              </div>
            </div>
          </Link>
          {/*))}*/}
        </div>
      </section>
      <Footer />
    </main >
  );
}
