import { useState } from "react";
import "../../styles/EtapaType.css";

import {EtapaOne} from "./EtapaOne";
import EtapaTwo from "./EtapaTwo";
import {EtapaTres} from "./EtapaTres";

export const EtapaType = ()=> {

    const [stage,setStage] = useState(1);
    const [stageData,setStageData] = useState({});

    console.log("Dados das Etapas: ",stageData);

    function handleDataStage(dataEtapa){

        // Faça o que quiser com os dados recebidos do EtapaTwo
        console.log("Dados recebidos do EtapaTwo:", dataEtapa);

        // Adiciona os dados ao array
        setStageData({dataEtapa});
    }

    function next(){
        if (stage>0 && stage <4) setStage(prevNext=>prevNext + 1);
    }
    function back(){
        if(stage>1) setStage(prevBack=>prevBack -1);
    }

    return (
        <form encType="multipart/form-data" method="post">
            {stage === 1 && (
                <EtapaOne numero={stage}>
                    <button className="next_staps" onClick={next}>Avançar</button>
                </EtapaOne>
            )}
            {stage === 2 && (
                <EtapaTwo numero={stage} onNext={handleDataStage}>
                    <div className="next_back_staps">
                        <button className="back_staps" onClick={back}>Voltar</button>
                        <button className="next_staps" onClick={next}>Avançar</button>
                    </div>
                </EtapaTwo>
            )}

            {stage === 3 && (
                <EtapaTres numero={stage}>
                    <div className="next_back_staps">
                        <button className="back_staps" onClick={back}>Voltar</button>
                        <button className="next_staps" onClick={next}>Avançar</button>
                    </div>
                </EtapaTres>
            )}
        </form>
    )
}
export default EtapaType;