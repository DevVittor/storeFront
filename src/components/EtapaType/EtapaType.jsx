import { useState } from "react";
//import "../../styles/EtapaType.css";
import styles from "./EtapaType.module.css";

import { EtapaOne } from "./EtapaOne";
import EtapaTwo from "./EtapaTwo";
import { EtapaTres } from "../etapas/EtapaTres";
import UploadImg from "./UpĺoadImg";

export const EtapaType = () => {
  const [stage, setStage] = useState(1);
  const [stageData, setStageData] = useState({});
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  console.log("Dados das Etapas: ", stageData);

  function handleDataStage(dataEtapa) {
    console.log("Dados recebidos da etapa:", dataEtapa);
    setStageData((prevData) => ({ ...prevData, ...dataEtapa }));
  }

  function next() {
    if (stage > 0 && stage < 5) setStage((prevNext) => prevNext + 1);
  }
  function back() {
    if (stage > 1) setStage((prevBack) => prevBack - 1);
  }

  return (
    <form encType="multipart/form-data" method="post">
      {stage === 1 && (
        <EtapaOne
          numero={stage}
          onNext={handleDataStage}
          next={setNextButtonDisabled}
          dataEtapa={stageData}
        >
          <div className={styles.next_back_staps}>
            <button
              style={
                nextButtonDisabled
                  ? { background: "gray", cursor: "default" }
                  : {}
              }
              className={styles.next_staps}
              onClick={next}
              disabled={nextButtonDisabled}
            >
              Avançar
            </button>
          </div>
        </EtapaOne>
      )}
      {stage === 2 && (
        <EtapaTwo
          numero={stage}
          onNext={handleDataStage}
          next={setNextButtonDisabled}
          dataEtapa={stageData}
        >
          <div className={styles.next_back_staps}>
            <button className={styles.back_staps} onClick={back}>
              Voltar
            </button>
            <button
              style={
                nextButtonDisabled
                  ? { background: "gray", cursor: "default" }
                  : {}
              }
              className={styles.next_staps}
              onClick={next}
              disabled={nextButtonDisabled}
            >
              Avançar
            </button>
          </div>
        </EtapaTwo>
      )}

      {stage === 3 && (
        <EtapaTres numero={stage} dataEtapa={stageData}>
          <div className={styles.next_back_staps}>
            <button className={styles.back_staps} onClick={back}>
              Voltar
            </button>
            <button
              style={
                nextButtonDisabled
                  ? { background: "gray", cursor: "default" }
                  : {}
              }
              className={styles.next_staps}
              onClick={next}
              disabled={nextButtonDisabled}
            >
              Avançar
            </button>
          </div>
        </EtapaTres>
      )}
      {stage === 4 && (
        <UploadImg numero={stage} dataEtapa={stageData}>
          <div className={styles.next_back_staps}>
            <button className={styles.back_staps} onClick={back}>
              Voltar
            </button>
            <button className={styles.next_staps} onClick={next}>
              Finalizar
            </button>
          </div>
        </UploadImg>
      )}
    </form>
  );
};
export default EtapaType;
