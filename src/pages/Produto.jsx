import { useState } from "react";
import axios from "axios";

export default function Produto() {
  document.title = "Produto";
  const [file, setFile] = useState(null);
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMarcaChange = (e) => {
    setMarca(e.target.value);
  };

  const handlePrecoChange = (e) => {
    setPreco(e.target.value);
  };
  const resetValue = () => {
    setFile(null);
    setMarca("");
    setPreco("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("logo", file);

    // Adicione outras informações ao FormData, se necessário
    formData.append("marca", marca);
    formData.append("preco", preco);

    try {
      const response = await axios.post(
        "http://localhost:8080/produto",
        formData
      );
      resetValue();
      console.log(response.data);
      setMessage(`Produto ${marca} cadastrado com sucesso`);
    } catch (error) {
      console.error(error);
      setMessage(
        `Não foi possível cadastrar o produto ${marca} por causa do error ${error}`
      );
    }
  };

  return (
    <main>
      <section>
        <div className="">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="file"
              name="logo" // Nome do campo deve ser "logo"
              accept="image/*"
              id=""
              onChange={handleFileChange}
            />
            <input
              type="text"
              name="marca"
              placeholder="Marca"
              value={marca}
              onChange={handleMarcaChange}
            />
            <input
              type="text"
              name="preco"
              placeholder="Preço"
              value={preco}
              onChange={handlePrecoChange}
            />
            <input type="submit" value="Cadastrar Produto" />
          </form>
          <span>{message}</span>
        </div>
      </section>
    </main>
  );
}
