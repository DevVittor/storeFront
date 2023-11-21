import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/profile.css";
//import Services from "../components/Services";
//import ImageSlider from "../components/ImageSlider";
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
            <div className="container-name">
              <div className="box-name">
                <h2 className="">{info.marca}</h2>
              </div>
            </div>
            <div className="detalhes">
              <details>
                <summary>
                  <h3>Serviços</h3>
                  <i className="ri-add-circle-line"></i>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  placeat totam. Perspiciatis fuga assumenda atque provident
                  ipsa, facere dolorem doloremque?
                </p>
              </details>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
