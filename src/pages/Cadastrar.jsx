import styles from "./Cadastrar.module.css";
import WindowSize from "../components/WindowSize";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
export default function Cadastrar() {
  const alturaHeight = WindowSize();
  const [view, setView] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      nome,
      email,
      password,
    };

    try {
      axios
        .post("http://localhost:8080/cadastrar", formData)
        .then(() => {
          console.log(`Tudo foi enviado`);
        })
        .catch((error) => {
          console.log(`Não deu para enviar.Error: ${error}`);
        });
    } catch (error) {
      console.log(`Deu error ${error}`);
    }
  }

  return (
    <main>
      <section>
        <div
          className={styles.container}
          style={{ minHeight: `${alturaHeight}px` }}
        >
          <div className={styles.box}>
            <div className={styles.one}>
              <div className={styles.title}>
                <h2>Cadastre-se</h2>
              </div>
              <form onSubmit={handleSubmit} className={styles.input_form}>
                <div className={styles.inputs}>
                  <IoPeopleCircleSharp className={styles.icon} />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Nome"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className={styles.inputs}>
                  <MdOutlineAlternateEmail className={styles.icon} />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputs}>
                  <RiLockPasswordFill className={styles.icon} />
                  <input
                    type={view ? "text" : "password"}
                    name=""
                    id=""
                    placeholder="*****"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {view ? (
                    <FaEye
                      className={styles.password_icon}
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <FaEyeSlash
                      className={styles.password_icon}
                      onClick={() => setView(!view)}
                    />
                  )}
                </div>
                <div className={styles.input_checkbox}>
                  <input type="checkbox" name="" id="" />
                  <span>Tenho 18 anos ou mais</span>
                </div>
                <div className={styles.termos}>
                  <input type="checkbox" name="" id="" />
                  <span>
                    Eu concordo com os <a href="#">termos e condições</a>
                  </span>
                </div>
                <div className={styles.input_submit}>
                  <input type="submit" value="Cadastrar" />
                </div>
              </form>
            </div>
            <div className={styles.two}>
              <img
                src="https://images.pexels.com/photos/267028/pexels-photo-267028.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
