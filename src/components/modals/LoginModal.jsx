import '../../styles/LoginModal.css';
function LoginModal({setLogin}){
  return(
    <div className="login_modal">
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
            <button>Cliente</button>
            <button>Anunciante</button>
            <button>Empresa</button>
          </div>
        </div>
        <div className="inputs_login">
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="*****"/>
        </div>
      </div>
      <div className="next_back_login">
        <div className="btn_back_login"><button>Fechar</button></div>
        <div className="btn_next_login"><button>Acessar</button></div>
      </div>
    </div>
  )
}
export default LoginModal;
