import { useState } from "react";
import "../styles/home.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [coment, setComent] = useState([]);
  const [input, setInput] = useState("");
  const inputElement = useRef();

  function handleClick() {
    setComent([...coment, input]);
    setInput("");
    inputElement.current.focus();
  }
  function removeList() {
    const Lista = [...coment];
    Lista.pop();
    setComent(Lista);
  }

  return (
    <section>
      <div className="container">
        <div className="boxOne">
          <div className="box-title">
            <Link to="/">
              <h1>
                A<b>br</b>ime
              </h1>
            </Link>
            <span>Acompanhantes</span>
          </div>
          <div className="box-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/categoria">Categoria</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <li>
                  <Link to="/assinatura">Assinatura</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="box-profile">
            <h2>Nome Completo</h2>
          </div>
        </div>
        <div className="boxTwo">
          <h2>Lista de Coisas</h2>
          <ul>
            {coment.map((items, index) => (
              <li key={index}>{items}</li>
            ))}
          </ul>
          <input
            type="text"
            name=""
            value={input}
            ref={inputElement}
            id=""
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={removeList}>Remover</button>
          <button onClick={handleClick}>Enviar</button>
        </div>
      </div>
    </section>
  );
}
