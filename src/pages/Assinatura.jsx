//import axios from "axios";
import "../styles/planos.css";
import { Link } from "react-router-dom";
export default function Assinatura() {
  /* function pegarReq(event) {
    event.preventDefault();
    const data = {
      priceId: "price_1NFK9rIbcEgeFqaqxYcwn244", // Substitua pelo valor correto
    };

    axios
      .post("http://localhost:8080/checkstripe", data)
      .then((res) => {
        console.log(res.data);
        window.location.href = res.data.url;
      })
      .catch((error) => console.error(`Deu ruim ${error}`));
  }
  
        <form onSubmit={pegarReq}>
          <input type="submit" value="Checkout" />
        </form>*/
  return (
    <main>
      <section>
        <div className="container-planos">
          <div className="box-planos">
            <div className="btn-toggle">
              <span>Mensal</span>
              <div className="toggle">
                <div className="modeToggle"></div>
              </div>
              <span>Anual</span>
            </div>
            <div className="card-planos">
              <div className="planoA">
                <div className="plano-price">
                  <h3>
                    <i className="ri-flashlight-fill"></i>Destaque
                  </h3>
                  <h1>
                    <h2>R$</h2> 4,97/<h4>mês</h4>
                  </h1>
                </div>
                <div className="plano-vantagens">
                  <nav>
                    <ul>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="plano-assinar">
                  <button>
                    Selecionar<i className="ri-checkbox-circle-fill"></i>
                  </button>
                </div>
              </div>
              <div className="planoA">
                <div className="plano-price">
                  <h3>
                    <i className="ri-shield-check-fill"></i>Profissional
                  </h3>
                  <h1>
                    <h2>R$</h2> 47,90/<h4>mês</h4>
                  </h1>
                </div>
                <div className="plano-vantagens">
                  <nav>
                    <ul>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 30 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="plano-assinar">
                  <button>
                    Selecionar<i className="ri-checkbox-circle-fill"></i>
                  </button>
                </div>
              </div>
              <div className="planoA">
                <div className="plano-price">
                  <h3>
                    <i className="ri-verified-badge-fill"></i>Verificada
                  </h3>
                  <h1>
                    <h2>R$</h2> 9,97/<h4>mês</h4>
                  </h1>
                </div>
                <div className="plano-vantagens">
                  <nav>
                    <ul>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 7 dias
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="plano-assinar">
                  <button>
                    Selecionar<i className="ri-checkbox-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="box-continuar">
              <Link to="/">
                {/*Colocar uma contagem regressiva de 5 segundos depois que 
                chegar no 1 aparecer o texto de continuar*/}
                Continuar Sem Vantagens<i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
