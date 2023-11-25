import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

export default function Produto() {
  const idClient = localStorage.getItem("userId");

  const [productExists, setProductExists] = useState(false); // Adicione um estado para controlar se o produto existe

  useEffect(() => {
    const checkProduct = async () => {
      try {
        if (idClient) {
          const response = await axios.get(`http://localhost:8080/produto/${idClient}`);
          if (response.data.product) {
            setProductExists(true);
          }
        }
      } catch (error) {
        console.error(error);
        // Tratar os erros adequadamente, por exemplo, exibindo uma mensagem para o usuário
      }
    };

    checkProduct();
  }, [idClient]);

  document.title = "Produto";
  const [file, setFile] = useState(null);
  const [nome, setNome] = useState("");
  const [pix, setPix] = useState(false);
  const [dinheiro, setDinheiro] = useState(false);
  const [cartaoCredito, setCartaoCredito] = useState(false);
  const [cartaoDebito, setCartaoDebito] = useState(false);
  const [preco, setPreco] = useState(0);
  const [idade, setIdade] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [genero, setGenero] = useState("");
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMarcaChange = (e) => {
    setNome(e.target.value);
  };

  const handlePrecoChange = (e) => {
    const precoValue = e.target.value;
    const precoInt = precoValue !== "" ? parseInt(precoValue, 10) : 0;
    setPreco(precoInt);
  };
  const resetValue = () => {
    setFile(null);
    setNome("");
    setPreco("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("idClient", idClient);
    formData.append("avatar", file);

    // Adicione outras informações ao FormData, se necessário
    formData.append("nome", nome);
    formData.append("preco", preco);
    formData.append("idade", idade);
    formData.append("estado", estado);
    formData.append("cidade", cidade);
    formData.append("genero", genero);
    formData.append("altura", altura);
    formData.append("peso", peso);
    formData.append("descricao", descricao);
    formData.append("pix", pix);
    formData.append("dinheiro", dinheiro);
    formData.append("cartaoCredito", cartaoCredito);
    formData.append("cartaoDebito", cartaoDebito);

    try {
      const response = await axios.post(
        "http://localhost:8080/produto",
        formData
      );
      console.log(response);
      resetValue();
      console.log(response.data);
      setMessage(`Produto ${nome} cadastrado com sucesso`);
    } catch (error) {
      console.error(error);
      setMessage(
        `Não foi possível cadastrar o produto ${nome} por causa do error ${error}`
      );
    }
  };
  if (!productExists) {
    return (
      <main>
        <section style={{ background: "#fff" }}>
          <div className="">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input type="hidden" name="idClient" value={idClient} />
              {idClient}
              <input
                type="file"
                name="avatar" // Nome do campo deve ser "logo"
                accept="image/*"
                id=""
                onChange={handleFileChange}
              />
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={nome}
                onChange={handleMarcaChange}
              />
              <input
                type="text"
                name="preco"
                placeholder="Preço/H"
                value={preco === 0 ? "" : preco}
                onChange={handlePrecoChange}
              />
              <div>
                <label>
                  <input type="checkbox" name="pix" id="" value={pix} onChange={(e) => setPix(e.target.checked)} />
                  Pix
                </label>
                <label>
                  <input type="checkbox" name="dinheiro" id="" value={dinheiro} onChange={(e) => setDinheiro(e.target.checked)} />
                  Dinheiro
                </label>
                <label>
                  <input type="checkbox" name="cartaoCredito" id="" value={cartaoCredito} onChange={(e) => setCartaoCredito(e.target.checked)} />
                  Cartão Credito
                </label>
                <label>
                  <input type="checkbox" name="cartaoDebito" id="" value={cartaoDebito} onChange={(e) => setCartaoDebito(e.target.checked)} />
                  Cartão Debito
                </label>
              </div>
              <input type="number" name="idade" placeholder="Idade" value={idade} id="" onChange={(e) => setIdade(e.target.value)} />
              <input type="text" name="estado" placeholder="Estado" value={estado} id="" onChange={(e) => setEstado(e.target.value)} />
              <input type="text" name="cidade" placeholder="Cidade" value={cidade} id="" onChange={(e) => setCidade(e.target.value)} />
              <input type="text" name="genero" placeholder="Gênero" value={genero} id="" onChange={(e) => setGenero(e.target.value)} />
              <input type="number" name="altura" placeholder="Altura" value={altura} id="" onChange={(e) => setAltura(e.target.value)} />
              <input type="number" name="peso" placeholder="Peso" value={peso} id="" onChange={(e) => setPeso(e.target.value)} />
              <input type="text" name="descricao" placeholder="Descrição" value={descricao} id="" onChange={(e) => setDescricao(e.target.value)} />
              <input type="submit" value="Cadastrar Produto" />
            </form>
            <span>{message}</span>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <div>
        <h1>Já tem um perfil cadastrada nessa conta</h1>
        <Link to={`http://localhost:5173/${idClient}`}>Acessar ao perfil</Link>
      </div>
    )
  }
}
