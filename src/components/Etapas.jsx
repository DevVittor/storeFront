import { useState } from "react";
import "../styles/etapas.css";
import Card from "./Card";
import Etapa01 from "../components/Etapa01";
import Etapa02 from "./Etapa02";
import Etapa03 from "./Etapa03";
import Etapa04 from "./Etapa04";
import Etapa05 from "./Etapa05";
export default function Etapas() {
  const [content, setContent] = useState(1);
  document.title = `Etapa ${content}`;
  function alterContent() {
    setContent(content + 1);
  }
  function backContent() {
    if (content > 0) {
      setContent(content - 1);
    } else {
      setContent(content);
    }
  }

  //Cada etapa vai ser um form que vai enviar os dados para o objeto dados que vai receber
  //cada valor de input e armazenar assim podendo ser trocado e enviado tudo junto corretamente
  //sempre precisar respeitar uma ordem.

  function renderContent() {
    switch (content) {
      case 1:
        return (
          <div className="etapa-um">
            <Etapa01 />
          </div>
        );
      case 2:
        return (
          <div className="etapa-dois">
            <Etapa02 />
          </div>
        );
      case 3:
        return (
          <div className="etapa-tres">
            <Etapa03 />
          </div>
        );
      case 4:
        return (
          <div className="etapa-quatro">
            <Etapa04 />
          </div>
        );
      case 5:
        return (
          <div className="etapa-cinco">
            <Etapa05 />
          </div>
        );
      default:
        return <Card />;
    }
  }

  return (
    <main>
      <section>
        <div className="etapas">{renderContent()}</div>
      </section>
      <section>
        {content > 1 ? <button onClick={backContent}>Voltar</button> : ""}
        {content > 4 ? (
          <button>Finalizar</button>
        ) : (
          <button onClick={alterContent}>Avançar</button>
        )}
        <h3>{content}</h3>
      </section>
    </main>
  );
}
