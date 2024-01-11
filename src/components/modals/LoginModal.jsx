import '../../styles/LoginModal.css';
import {useState} from 'react';
import axios from "axios";
function LoginModal({setLogin}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [typeAccount,setTypeAccount] = useState("");
  console.log(typeAccount);
  function fazerLogin(e) {
    e.preventDefault();

    const checarDados = {
      email,
      senha,
      typeAccount
    };

    axios
      .post("http://localhost:8080/v1/api/login/save", checarDados)
      .then((res) => {
        console.log(res.data);
        const userId = res.data.useId;
        const token = res.data.token;
        localStorage.setItem("Token", token);
        localStorage.setItem("userId", userId);
        window.location.reload();
        setLogin(false);
      })
      .catch((error) => console.error(`Deu error aqui ${error}`));
  }
  return(
    <div className="login_modal">
      <form onSubmit={fazerLogin}>
      <div className="etapa_login">
        <div className="name_etapa_login">
          <h3 className="name_login">Entrar na Conta</h3>
        </div>
      </div>
      <div className="box_inputs_login">
        <div className="box_type_account_login">
          <div className="type_account_title">
            <h3>Eu sou</h3>
          </div>
          <div className="type_account_login"> 
            <button className={typeAccount == "Cliente" ? "type_select" : "no_type_account"} onClick={()=>setTypeAccount("Cliente")}>Cliente</button>
            <button className={typeAccount == "Anunciante" ? "type_select" : "no_type_account"} onClick={()=>setTypeAccount("Anunciante")}>Anunciante</button>
            <button className={typeAccount == "Empresa" ? "type_select" : "no_type_account"} onClick={()=>setTypeAccount("Empresa")}>Empresa</button>
          </div>
        </div>
        <div className="inputs_login">
          <input
            type="email" 
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="*****"
            name="senha"
            value={senha}
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      </div>
      <div className="next_back_login">
        <div className="btn_back_login"><button>Fechar</button></div>
        <div className="btn_next_login"><button type="submit">Acessar</button></div>
      </div>
      </form>
    </div>
  )
}
export default LoginModal;
