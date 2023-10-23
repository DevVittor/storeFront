import{ useState } from 'react';
import axios from 'axios';
export default function Acessar() {
  document.title = "Acessar";
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin(e){

    e.preventDefault();

    const checarDados={
      email,
      senha
    }

    axios.post('http://localhost:8080/acessar',checarDados)
    .then(res=>{
      console.log(res.data); 
      const token = res.data.token;
      localStorage.setItem("Token",token);
    }).catch(error=> console.error(`Deu error aqui ${error}`));

  }

  return (
    <main>
      <section>
        <div className="">
          <div className="">
            <form onSubmit={fazerLogin}>
              <input type="text" name="email" value={email} id="" placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              />
              <input type="password" name="senha" value={senha} id="" placeholder="Senha"
              onChange={(e)=>setSenha(e.target.value)}
              />
              <input type="submit" value="Entrar" />
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
