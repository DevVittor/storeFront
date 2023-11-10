import { useState } from "react";

export default function Etapa05() {
  const [genero, setGenero] = useState("");
  const [operado, setOperado] = useState("");
  const optionOperado = ["Sim", "Não"];
  const checkOperado = optionOperado.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));
  const generos = ["Mulher", "Homem", "Trans"];
  const optionGen = generos.map((items, index) => (
    <option key={index} value={items} onChange={(e) => genero(e.target.value)}>
      {items}
    </option>
  ));
  const options = [];
  for (let i = 40; i <= 200; i++) {
    options.push(
      <option key={i} value={i}>
        {i} kg
      </option>
    );
  }
  const estiloCorpo = [
    "Super Magro",
    "Magro",
    "Normal",
    "Gostosa",
    "Musculoso",
    "Gordinha",
    "Gorda",
  ];
  const optionCorpo = estiloCorpo.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));

  function carregarGen(event) {
    setGenero(event.target.value);
    // Se o gênero for "Trans", redefina o estado de operado
    if (event.target.value === "Trans") {
      setOperado("");
    }
  }

  return (
    <div>
      <div>
        <div>
          <h2>Detalhes do seu corpo</h2>
        </div>
        <div>
          <select name="" id="" onChange={carregarGen}>
            <option value={genero} selected disabled hidden>
              Gênero
            </option>
            {optionGen}
          </select>
        </div>
        {genero === "Trans" && (
          <div>
            <select
              name="operado"
              id="operado"
              value={operado}
              onChange={(e) => setOperado(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Operado
              </option>
              {checkOperado}
            </select>
          </div>
        )}
        <div>
          <select name="" id="">
            <option value="" disabled hidden selected>
              Seu Peso
            </option>
            {options}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Tipo de Corpo
            </option>
            {optionCorpo}
          </select>
        </div>
      </div>
    </div>
  );
}
