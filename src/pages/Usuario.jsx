import { useEffect, useState } from "react";
import Card from "../components/CardImg";
//import Services from "../components/Services";
import "../styles/usuario.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function Usuario() {

  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/acompanhantes/${id}`)
      .then((res) => {
        console.log(res.data.info);
        setData(res.data.info);
        document.title = res.data.info.marca;
      }).catch(error => console.error(`Deu erro na hora de buscar dados no perfil ${error}`))
  }, [id]);

  return (
    <main>
      <section>
        <div className="container-usuario" key={data.id}>
          <div className="box-usuario">
            <div className="usuario-avatar">
              <img
                loading="lazy"
                src={`http://localhost:8080/upload/${data.avatar && data.avatar.length > 0 ? data.avatar[0] : ''}`}
                alt=""
              />
            </div>
            <div className="usuario-info">
              <div className="box-info">
                <div className="usuario-name">
                  <div className="">
                    <h2>{data.marca}</h2>
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
                    <h2>| {/*idade*/} anos</h2>
                  </div>
                </div>
                <div className="price-share">
                  <div className="usuario-follow">
                    <button>R$ {data.valor}/H</button>
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
                        <i className="ri-map-pin-line"></i>{/*estado*/}, {/*cidade*/} |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-women-line"></i>{/*genero*/} |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-open-arm-line"></i>{/*altura*/}Cm |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-scales-line"></i>{/*peso*/}Kg
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="usuario-descript">
                <p>
                  {/*Descricao*/}
                </p>
              </div>
              <div className="usuario-social-contato">
                <div className="usuario-contato">
                  <i className="ri-bank-line"></i>
                </div>
                <div className="usuario-social">
                  <nav>
                    <ul>
                      <li>Pix</li>
                      <li>| Dinheiro</li>
                      <li>| Cartão de Crédito</li>
                      <li>| Cartão de Debito</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      {/*<section>
        <Services />
      </section>*/}
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
