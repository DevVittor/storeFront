import styles from "./Cadastrar.module.css";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import WindowSize from "../components/WindowSize";
export default function Cadastrar() {
  const alturaHeight = WindowSize();

  const [view, setView] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      nome: nome,
      email: email,
      senha: password,
    };

    axios.post("http://localhost:8080/v1/api/cadastrar/salvar", formData)
      .then(() => {
        console.log(`Tudo foi enviado`);
        window.location.reload();
      })
      .catch((error) => {
        console.log(`Não deu para enviar.Error: ${error}`);
      });
  }

  return (
    <div
      className={styles.container}
      style={{ minHeight: `${alturaHeight}px` }}
    >
      <div className={styles.one} id="container_cadastrar">
        <div className={styles.title}>
          <h2>Cadastre-se</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.input_form}>
          <div className={styles.inputs}>
            <IoPeopleCircleSharp className={styles.icon} />
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <MdOutlineAlternateEmail className={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputs}>
            <RiLockPasswordFill className={styles.icon} />
            <input
              type={view ? "text" : "password"}
              value={password}
              placeholder="*****"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={() => setView(!view)}
              className={view ? "ri-eye-fill" : "ri-eye-off-fill"}
            ></i>
          </div>
          <div className={styles.input_checkbox}>
            <input type="checkbox" />
            <span>Tenho 18 anos ou mais</span>
          </div>
          <div className={styles.termos}>
            <input type="checkbox" />
            <span>
              Eu concordo com os <a href="#">termos e condições</a>
            </span>
          </div>
          <div className={styles.input_submit}>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </div>
  );
}
