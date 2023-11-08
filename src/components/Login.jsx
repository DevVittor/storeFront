import Card from "./Card";
import "../styles/login.css";
export default function Login() {
  return (
    <div className="container-login">
      <div className="form-login">
        <div className="form-title-subtitle">
          <h2>Acessar sua Conta</h2>
          <h4>Preencha os seus dados corretamente</h4>
        </div>
        <form className="box-form">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="********" />
          <div className="form-checkbox">
            <input type="checkbox" name="" id="" />
            <span>Lembrar de mim (48 horas)</span>
          </div>
          <div className="form-esqueceu">
            <a href="/#">Esqueceu a senha ?</a>
          </div>
          <input type="submit" value="Acessar" />
        </form>
        <div className="link-register">
          <h3>
            Ainda não tem um conta ? <a href="/#">Crie uma de graça</a>
          </h3>
        </div>
        <div className="box-publi">
          <img
            src="https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="container-profile">
        <div className="box-profile">
          <Card />
        </div>
      </div>
    </div>
  );
}
