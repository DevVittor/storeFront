import styles from "./Acessar.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
export default function Acessar() {

  const [view, setView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function alterView() {
    setView(!view)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      email,
      senha: password,
    };

    try {
      axios.post("http://localhost:8080/v1/api/acessar/checar", formData)
        .then((res) => {
          console.log(res.data)
          const userId = res.data.userId;
          const token = res.data.token;
          localStorage.setItem("Token", token);
          localStorage.setItem("userId", userId);
          window.location.reload();
        })
        .catch((error) => {
          console.log(`Não deu para enviar.Error: ${error}`);
        });
    } catch (error) {
      console.log(`Deu error ${error}`);
    }
  }

  return (
    <div className={styles.one} id="container_acessar">
      <div className={styles.title}>
        <h2>Acessar Conta</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.input_form}>
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
          {view ? (
            <IoMdEye onClick={alterView} id="view" className={styles.viewIcon} />
          ) : (
            <IoIosEyeOff onClick={alterView} id="notview" className={styles.viewIcon} />
          )}
        </div>
        <div className={styles.lembrar_esquecer}>
          <div className={styles.lembrar}>
            <input type="checkbox" name="" id="" />
            <span>Lembrar de mim</span>
          </div>
          <div className={styles.esqueceu}>
            <a href="#">Esqueceu a senha ?</a>
          </div>
        </div>
        <div className={styles.input_submit}>
          <button type="submit"><FaRegArrowAltCircleRight />Acessar</button>
        </div>
      </form>
    </div>
  );
}
