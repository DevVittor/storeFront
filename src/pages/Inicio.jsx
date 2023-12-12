import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import axios from 'axios';
function Inicio() {
  document.title = "Inicio";
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 113);

  useEffect(() => {
    function handleResize() {
      setAlturaDisponivel(window.innerHeight - 113);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const divPrincipalStyle = {
    minHeight: `${alturaDisponivel}px`,
  };
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/v1/api/acompanhantes")
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`));
  }, []);

  return (
    <main>
      <section>
        <div className="container_cards" style={divPrincipalStyle}>
          {result.length > 0 ? (
            result.map((item) => (
              <Link to={`/acompanhantes/${item._id}`} key={item._id}>
                <div className="card_profile" key={item._id}>
                  <div className="avatar_profile">
                    {/*<img src={`http://localhost:8080/upload/${item.avatar[0]}`} alt="" />*/}
                    <img src="https://images.pexels.com/photos/19283228/pexels-photo-19283228/free-photo-of-aventura-facanha-flutuando-voo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto" />
                    <div className="selos_profile">
                      <div className="selos_list">
                        <nav>
                          <ul>
                            <li><i className="ri-verified-badge-fill"></i></li>
                            <li><i className="ri-flashlight-fill"></i></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="gen_price">
                        <nav>
                          <ul>
                            <li>{item.genero}</li>
                            <li>|</li>
                            <li>R$ {item.caches}/H</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="name_profile">
                    <h2>{item.nome},{item.idade}</h2>
                    <span>Rio de Janeiro,RJ</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="fontResult">Sem resultados</h1>
          )}
        </div>
      </section>
    </main>
  )
}
export default Inicio;
