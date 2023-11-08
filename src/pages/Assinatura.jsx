//import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/planos.css";
import CardPlanos from "../components/CardPlanos";
import { Link } from "react-router-dom";
export default function Assinatura() {
  const [toggle, setToggle] = useState(false);
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

  function alterToggle() {
    setToggle(!toggle);
  }

  return (
    <main>
      <section>
        <div className="container-planos">
          <div className="box-planos">
            <div className="box-title">
              <h1>Escolha um dos nossos planos</h1>
              <h3>faça o seu perfil se destacar e passar confiança</h3>
            </div>
            <div className="btn-toggle">
              <span>Mensal</span>
              <div className={toggle ? "endToggle" : "toggle"}>
                <div className="modeToggle" onClick={alterToggle}></div>
              </div>
              <span>Anual</span>
            </div>
            <div>
              <span>Obs: Assinatura Anual tem 30% de desconto</span>
            </div>
            <div className="card-planos">
              <CardPlanos
                emblema="ri-verified-badge-fill"
                planos="Verificada"
                price={toggle ? "41,74" : "4,97"}
                tempo={toggle ? "ano" : "mês"}
                icon={[
                  "ri-close-line",
                  "ri-close-line",
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
                price={toggle ? "419,74" : "49,97"}
                tempo={toggle ? "ano" : "mês"}
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
                price={toggle ? "83,74" : "9,97"}
                tempo={toggle ? "ano" : "mês"}
                icon={[
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-check-fill",
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
