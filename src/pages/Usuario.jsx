import { useEffect, useState } from "react";
import Card from "../components/CardImg";
import Services from "../components/Services";
import "../styles/usuario.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function Usuario() {

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/${id}`)
      .then((res) => {
        document.title = res.data.infoData[0].nome;
        setData(res.data.infoData);
      }).catch(error => console.error(`Deu erro na hora de buscar dados no perfil ${error}`))
  }, [id])


  return (
    <main>
      <section>
        {data.map((item, index) => (
          <div className="container-usuario" key={index}>
            <div className="box-usuario">
              <div className="usuario-avatar">
                <img
                  loading="lazy"
                  src={`http://localhost:8080/upload/${item.avatar}`}
                  alt=""
                />
              </div>
              <div className="usuario-info">
                <div className="box-info">
                  <div className="usuario-name">
                    <div className="">
                      <h2>{item.nome}</h2>
                    </div>
                    <div className="usuario-selo">
                      <nav>
                        <ul className="">
                          <li>
                            <i className="ri-verified-badge-fill"></i>
                          </li>
                          <li>
                            <i className="ri-flashlight-fill"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="">
                      <h2>| {item.idade} anos</h2>
                    </div>
                  </div>
                  <div className="price-share">
                    <div className="usuario-follow">
                      <button>R$ {item.preco}/H</button>
                    </div>
                    <div className="usuario-share">
                      <button>
                        <i className="ri-error-warning-line"></i>Denunciar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="usuario-local-gen">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <i className="ri-map-pin-line"></i>{item.estado}, {item.cidade} |
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ri-women-line"></i>{item.genero} |
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ri-open-arm-line"></i>{item.altura}Cm |
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ri-scales-line"></i>{item.peso}Kg
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="usuario-descript">
                  <p>
                    {item.descricao}
                  </p>
                </div>
                <div className="usuario-social-contato">
                  <div className="usuario-contato">
                    <i className="ri-bank-line"></i>
                  </div>
                  <div className="usuario-social">
                    <nav>
                      <ul>
                        {item.pix && <li>Pix</li>}
                        {item.dinheiro && <li>| Dinheiro</li>}
                        {item.cartaoCredito && <li>| Cartão de Crédito</li>}
                        {item.cartaoDebito && <li>| Cartão de Debito</li>}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="usuario-status">
          <div className="box-status">
            <h2>
              <i className="ri-add-line"></i>Detalhes
            </h2>
            <h2>
              <i className="ri-p2p-line"></i>Contatos
            </h2>
            <h2>
              <i className="ri-map-pin-user-fill"></i>Local
            </h2>
            <h2>
              <i className="ri-24-hours-line"></i>Horários
            </h2>
          </div>
        </div>

      </section>
      <section>
        <Services />
      </section>
      <section>
        <div className="usuario-card">
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>

      </section>
    </main>
  );
}
