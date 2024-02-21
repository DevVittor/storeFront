import styles from "./Verificar.module.css";
import WindowSize from "../WindowSize";
import PropTypes from "prop-types";
export default function Verificar({ setVerificado }) {
  const alturaAtual = WindowSize();

  return (
    <main>
      <section>
        <div
          className={styles.container_verificar}
          style={{ minHeight: `${alturaAtual}px` }}
        >
          <div className={styles.modal_verificado}>
            <div className={styles.verificado_info}>
              <div className={styles.verificado_title_price}>
                <h2>
                  <i className="ri-verified-badge-fill"></i>Verificada
                </h2>
                <h2>R$ 9,97/mês</h2>
              </div>
              <p>
                There are no monthly charges for ecommerce features, and we only
                take a small cut of each sale so that you keep the majority of
                what you earn.
              </p>
            </div>
            <div className={[styles.verificado_vencimento]}>
              <label htmlFor="checkbox_vencimento">
                <h3>Anual</h3>
                <input type="checkbox" id="checkbox_vencimento" />
              </label>
            </div>
            <div className={styles.verificado_features}>
              <h3>Features</h3>
              <nav>
                <ul>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Instantly accept
                    payments globally
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Fully automated
                    sales tax compliance
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>A.I fraud
                    protection with payment risk intelligence
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Access to
                    existing features+future releases each year
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.btn_verificado}>
              <button
                onClick={() => {
                  setVerificado(false);
                  console.log("Clicou no cancel");
                }}
              >
                Cancel
              </button>
              <button>
                <i className="ri-verified-badge-fill"></i>Verificar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
Verificar.propTypes = {
  setVerificado: PropTypes.func,
};
