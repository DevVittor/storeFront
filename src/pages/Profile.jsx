import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/profile.css";
import Services from "../components/Services";
import ImageSlider from "../components/ImageSlider";
export default function Profile() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${id}`)
      .then((res) => {
        document.title = res.data.infoData[0].marca || "Abrime";
        setData(res.data.infoData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <section>
      {/*<div className="container-profile">
        {data.map((info) => (
          <div className="box-profile" key={info.id}>
            <img src={`http://localhost:8080/upload/${info.logo}`} alt="" />
            <h2>Marca: {info.marca}</h2>
            <h3>Preço: R$ {info.preco}</h3>
          </div>
        ))}
      </div>*/}
      {data.map((info) => (
        <div className="container-profile" key={info.id}>
          <div className="container-info-profile ">
            <div className="box-info-profile">
              <nav>
                <ul className="">
                  <li>
                    <i className="text-blue-500 ri-verified-badge-fill"></i>
                    Profissional
                  </li>
                  <li>
                    <i className="text-red-500 text-[20px] pr-1.5 ri-flashlight-fill"></i>
                    Destaque
                  </li>
                  <li>
                    <i className="text-green-500 ri-shield-check-fill"></i>
                    Perfil Verificado
                  </li>
                </ul>
              </nav>
            </div>
            <div className="container-local-phone">
              <h4 className="">Rio de Janeiro, Rj</h4>
              <hr className="" />
              <h4 className="">(21) 998742-102</h4>
            </div>
            <div className="container-name-gen-age">
              <div className="container-name">
                <h2 className="">{info.marca}</h2>
              </div>
              <div className="container-gen-age">
                <h4 className="">Mulher</h4>
                <hr className="" />
                <h4 className="">32 anos</h4>
              </div>
            </div>
            <div className="container-description">
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis placeat hic error, veniam natus ipsum labore vitae
                facilis aliquam harum cumque illum consectetur in. Quibusdam,
                est iure! Dolorum, molestiae quasi!
              </p>
            </div>
            <div className="container-price-horarios-pagamentos ">
              <div className="container-price">
                <h2 className="">
                  R$ {info.preco}/<span className="">Hora</span>
                </h2>
              </div>
              <div className="container-horarios">
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quam?
                </p>
              </div>
              <div className="container-pagamentos">
                <nav>
                  <ul className="">
                    <li>
                      <i className="fa-solid fa-money-bill"></i>Dinheiro
                    </li>
                    <li>
                      <i className="fa-brands fa-pix"></i>Pix
                    </li>
                    <li>
                      <i className="fa-regular fa-credit-card"></i>Cartão de
                      Crédito
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="container-patrocinadores">
              <h2 className="">Anunciante</h2>
            </div>
          </div>
          <div className="container-image-profile">
            <Services />
            <div className="box-image-profile">
              <ImageSlider />
            </div>
            <button>
              <i className="ri-play-circle-line"></i>Assistir o Vídeo
            </button>
            <Services />
          </div>
        </div>
      ))}
    </section>
  );
}
