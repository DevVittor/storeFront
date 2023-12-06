import axios from "axios";

import { useEffect, useState } from "react";

export default function Inicio() {

  document.title = "Inicio";
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/api")
      .then((res) => {
        setInfo(res.data.mensagem);
      }).catch((error) => console.error(`Deu ruim nesse error ${error}`));
  }, []);

  return (
    <div>
      <h1>{info}</h1>
    </div>
  )
}
