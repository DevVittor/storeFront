//import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/planos.css";
import CardPlanos from "../components/CardPlanos";
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
              <CardPlanos
                emblema="ri-verified-badge-fill"
                planos="Verificada"
                price="4,97"
                icon={[
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-close-line",
                ]}
              />
              <CardPlanos
                emblema="ri-shield-check-fill"
                planos="Profissional"
                price="49,97"
                icon={[
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                ]}
              />
              <CardPlanos
                emblema="ri-flashlight-fill"
                planos="Destaque"
                price="9,97"
                icon={[
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-check-fill",
                  "ri-close-line",
                ]}
              />
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
