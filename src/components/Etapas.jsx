import { useState } from "react";
import "../styles/etapas.css";
import Card from "./Card";
import Etapa01 from "../components/Etapa01";
export default function Etapas() {
  document.title = "Cadastro ${}";
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

  function renderContent() {
    switch (content) {
      case 1:
        return (
          <div className="etapa-um">
            <h1>Etapa 1</h1>
            <Etapa01 />
          </div>
        );
      case 2:
        return (
          <div className="etapa-dois">
            <h1>Etapa 2</h1>
          </div>
        );
      case 3:
        return (
          <div className="etapa-tres">
            <h1>Etapa 3</h1>
          </div>
        );
      case 4:
        return (
          <div className="etapa-quatro">
            <h1>Etapa 4</h1>
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
