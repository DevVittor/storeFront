//import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/planos.css";
import CardPlanos from "../components/CardPlanos";
import { Link } from "react-router-dom";
export default function Assinatura() {
  const [toggle, setToggle] = useState(false);
  document.title = "Planos";
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
            <div className="box-desconto">
              <span>Obs: Assinatura Anual tem 30% de desconto</span>
            </div>
            <div className="card-planos">
              <CardPlanos
                id="CardA"
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
                priceId={
                  toggle
                    ? "price_1OAKkKIbcEgeFqaq4A1X8GBe"
                    : "price_1OAKhZIbcEgeFqaq9B9XK5SR"
                }
              />
              <CardPlanos
                id="CardB"
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
                priceId={
                  toggle
                    ? "price_1OAKlTIbcEgeFqaqqt7qVFtA"
                    : "price_1OAKgoIbcEgeFqaqfEzxcfFU"
                }
              />
              <CardPlanos
                id="CardC"
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
                priceId={
                  toggle
                    ? "price_1OAKl1IbcEgeFqaqfaaD1KDF"
                    : "price_1OAKhCIbcEgeFqaq2HKROx4f"
                }
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
