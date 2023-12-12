//import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/planos.css";
import CardPlanos from "../components/CardPlanos";
export default function Assinatura() {
  const [toggle, setToggle] = useState(false);
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
    minHeight: `${alturaDisponivel}px`
  };
  document.title = "Planos";

  function alterToggle() {
    setToggle(!toggle);
  }

  return (
    <main>
      <section>
        <div className="container-planos" style={divPrincipalStyle}>
          <div className="box-planos">
            <div className="box-title">
              <h1><i className="ri-fire-fill"></i>Destaque seu perfil<i className="ri-verified-badge-fill"></i></h1>
            </div>
            <div className="modeToggle" onClick={alterToggle}>
              <button className={toggle ? "offToggle" : "onToggle"}>
                Mensal
              </button>
              <button className={toggle ? "onToggle" : "offToggle"}>
                Anual <b>(30% OFF)</b>
              </button>
            </div>
            <div className="card-planos">
              <CardPlanos
                id="CardC"
                emblema="ri-fire-fill"
                planos="Destaque"
                price={toggle ? "41,74" : "4,97"}
                tempo={toggle ? "ano" : "mês"}
                icon={[
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-close-line",
                  "ri-check-fill",
                  "ri-check-fill",
                ]}
                priceId={
                  toggle
                    ? "price_1OAKkKIbcEgeFqaq4A1X8GBe"
                    : "price_1OAKhZIbcEgeFqaq9B9XK5SR"
                }
              />
              <span>Ou</span>
              <CardPlanos
                id="CardA"
                emblema="ri-verified-badge-fill"
                planos="Verificada"
                price={toggle ? "83,74" : "9,97"}
                tempo={toggle ? "ano" : "mês"}
                icon={[
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
                    ? "price_1OAKl1IbcEgeFqaqfaaD1KDF"
                    : "price_1OAKhCIbcEgeFqaq2HKROx4f"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
