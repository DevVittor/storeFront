import axios from "axios";
import { useEffect, useState } from "react";

export default function Categoria() {
  const [userId, setUserId] = useState(""); // Inicialize o estado userId

  useEffect(() => {
    document.title = "Categoria";

    const userId = localStorage.getItem("userId");

    axios
      .post("http://localhost:8080/criarPerfil", { userId })
      .then((res) => {
        console.log(res.data);
        setUserId(res.data.resposta); // Atualize o estado userId com o valor do servidor
      })
      .catch((error) => console.error(`Deu ruim aqui ${error}`));
  }, []);

  return (
    <>
      <h1>Categoria</h1>
      <p>UserID: {userId}</p> {/* Exiba o valor de userId aqui */}
    </>
  );
}
