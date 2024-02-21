import styles from "./DestaquesModal.module.css";
import WindowSize from "../WindowSize";
import { RiFireFill } from "react-icons/ri";
export default function DestaquesModal() {
  const alturaAtual = WindowSize();

  return (
    <main>
      <section>
        <div
          className={styles.container_destaque}
          style={{ minHeight: `${alturaAtual}px` }}
        >
          <div className={styles.modal_destaque}>
            <div className={styles.destaque_info}>
              <div className={styles.destaque_title_price}>
                <h2>
                  <RiFireFill style={{ color: "var(--text-red)" }} />
                  Destaque
                </h2>
                <h2>R$ 4,97/mês</h2>
              </div>
              <p>
                There are no monthly charges for ecommerce features, and we only
                take a small cut of each sale so that you keep the majority of
                what you earn.
              </p>
            </div>
            <div className={styles.destaque_vencimento}>
              <label htmlFor="checkbox_vencimento">
                <h3>Anual</h3>
                <input type="checkbox" id="checkbox_vencimento" />
              </label>
            </div>
            <div className={styles.destaque_features}>
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
            <div className={styles.btn_destaques}>
              <button>Cancel</button>
              <button>
                <i className="ri-flashlight-fill"></i>Destacar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
