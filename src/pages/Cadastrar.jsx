import '../styles/cadastar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Cadastrar() {
  document.title = "Cadastrar";
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function carregarInfo(e){
    e.preventDefault();

    const dadosLogin={
      nome,
      email,
      senha
    }

  axios.post('http://localhost:8080/cadastrar',dadosLogin)
  .then(res=>{
    console.log(res.data);
  }).catch(error=>console.error(`Deu error ${error}`));

  }

  return (
    <main>
      <section>
        <div className="container-cadastrar">
          <div className="form-cadastrar">
            <h2>Cadastrar</h2>
            <form onSubmit={carregarInfo}>
              <input 
              type="text" 
              name="nome"
              value={nome} 
              id="" 
              onChange={(e)=>setNome(e.target.value)}
              placeholder='Nome'
              />
              <input
              type="text"
              name="email"
              value={email} 
              id="" 
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              />
              <input
              type="password"
              name="senha"
              value={senha}
              id=""
              placeholder="*****"
              onChange={(e)=>setSenha(e.target.value)}/>
              <input type="submit" value="Cadastrar" />
              <Link to="/produto">Cadastrar Produto</Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
