import styles from "./Cadastrar.module.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
export const Cadastrar = () => {

  const [view, setView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
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
    <div className={styles.one} id="container_cadastrar">
      <div className={styles.title}>
        <h2>Conta Grátis</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.input_form}>
        <div className={styles.inputs}>
          <MdEmail className={styles.icon} />
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
          <input type="submit" value="Criar Conta" />
        </div>
      </form>
    </div>
  );
}
