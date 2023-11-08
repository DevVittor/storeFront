//import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/planos.css";
import { Link } from "react-router-dom";
export default function Assinatura() {
  document.title = "Assinaturas";
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 2000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer, setTimer]); // Adicione setTimer ao array de dependências

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
                    <h2>R$</h2> 49,97/<h4>mês</h4>
                  </h1>
                </div>
                <div className="plano-vantagens">
                  <nav>
                    <ul>
                      <li>
                        <i className="ri-check-fill"></i>Destaque por 30 dias
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Grupo Vip Telegram
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Selo de Verificado
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Selo de Profissional
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Selo de Destaque
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Slider nas páginas
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Borda Destacada
                      </li>
                      <li>
                        <i className="ri-check-fill"></i>Post no Instagram
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="renovar">
                  <span>
                    <i className="ri-checkbox-line"></i>Renovação Automática
                  </span>
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
            </div>
            <div className="box-continuar">
              {timer === 0 ? (
                <Link to="/">
                  Continuar Sem Vantagens
                  <i className="ri-arrow-right-s-line"></i>
                </Link>
              ) : (
                <h3>{timer}</h3>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
