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
    <main>
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
              <div className="box-avatar">
                <img src={`http://localhost:8080/upload/${info.logo}`} alt="" />
                <div className="box-selo">
                  <nav>
                    <ul className="">
                      <li>
                        <i className=" ri-verified-badge-fill"></i>
                      </li>
                      <li>
                        <i className=" ri-flashlight-fill"></i>
                      </li>
                      <li>
                        <i className="ri-shield-check-fill"></i>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="profile-name">
                <h2 className="">{info.marca}</h2>
              </div>
              <div className="profile-local-gen">
                <div className="profile-local">
                  <h4>
                    <i className="ri-map-pin-fill"></i>Rio de Janeiro, Rj |
                  </h4>
                </div>
                <div className="profile-gen">
                  <h4>Mulher</h4>
                </div>
              </div>
              <div className="profile-descript">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi ipsa officia doloremque laudantium, minima quaerat
                  cumque libero beatae accusamus labore quos, harum, dolore
                  voluptate quae non ullam voluptatem possimus ipsam.
                </p>
              </div>
              <div className="profile-details">
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Detalhes</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Corpo</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Serviços</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Serviços Especiais</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Local</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Atendimento</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
                <div className="detalhes">
                  <details>
                    <summary>
                      <h3>Formas de Pagamento</h3>
                      <i className="ri-add-circle-line"></i>
                    </summary>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, placeat totam. Perspiciatis fuga assumenda atque
                      provident ipsa, facere dolorem doloremque?
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container-profile-gallery">
          <div className="profile-service">
            <Services />
          </div>
          <div className="profile-slider">
            <ImageSlider />
          </div>
        </div>
      </section>
    </main>
  );
}
