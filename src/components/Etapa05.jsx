import { useState } from "react";

const gerarArray = (array) => {
  return array.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));
};

export default function Etapa05() {
  const [genero, setGenero] = useState("");
  const [operado, setOperado] = useState("");
  const optionOperado = ["Sim", "Não"];
  const checkOperado = gerarArray(optionOperado);
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
  const altura = [];

  for (let i = 1.25; i <= 2.15; i += 0.01) {
    altura.push(
      <option key={i} value={i}>
        {i.toFixed(2)}m
      </option>
    );
  }

  const estiloCorpo = [
    "Super Magro",
    "Magro",
    "Normal",
    "Sarada",
    "Musculoso",
    "Gordinha",
    "Gorda",
  ];
  const optionCorpo = gerarArray(estiloCorpo);

  function carregarGen(event) {
    setGenero(event.target.value);
    // Se o gênero for "Trans", redefina o estado de operado
    if (event.target.value === "Trans") {
      setOperado("");
    }
  }

  const numPe = [];
  for (let i = 32; i <= 57; i++) {
    numPe.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const inputPelos = [
    "Anus",
    "Genitálias",
    "Axila",
    "Pernas",
    "Braços",
    "Peito",
  ];
  const listPelos = inputPelos.map((items, index) => (
    <label key={index}>
      <input type="checkbox" value={items} />
      <span>{items}</span>
    </label>
  ));

  const bunda = ["Pequena", "Normal", "Grande", "Gigante"];
  const listBunda = bunda.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));
  const peito = ["Pequena", "Normal", "Grande", "Gigante"];
  const listPeito = peito.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));

  const silicone = ["Nenhum", "Peito", "Bunda", "Boca"];
  const listSilicone = silicone.map((items, index) => (
    <label key={index}>
      <input type="checkbox" value={items} />
      <span>{items}</span>
    </label>
  ));

  const corCabelo = [
    "Preto",
    "Grisalho",
    "Loiro",
    "Castanho",
    "Ruivo",
    "Colorido",
  ];
  const listCorCabelo = corCabelo.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));
  const estiloCabelo = ["Raspado", "Baixo", "Curto", "Longo", "Trançado"];
  const listEstiloCabelo = estiloCabelo.map((index, items) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));
  const corOlhos = ["Castanhos", "Pretos", "Azuis", "Verdes"];
  const listCorOlhos = corOlhos.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));

  const Etnias = [
    "Branca(o)",
    "Morena(o)",
    "Parda(o)",
    "Negra(o)",
    "Asiática(o)",
    "Indígena",
  ];
  const listEtnias = Etnias.map((items, index) => (
    <option key={index} value={items}>
      {items}
    </option>
  ));

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
        <div>
          {/*Número dos pés*/}
          <select name="" id="">
            <option value="" disabled selected hidden>
              Pés
            </option>
            {numPe}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled selected hidden>
              Altura
            </option>
            {altura}
          </select>
        </div>
        <div>
          <h2>Aonde você tem pelos</h2>
          {listPelos}
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled hidden selected>
              Tatuagens
            </option>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Piercing
            </option>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Ôculos
            </option>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Aparelho Bocal
            </option>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Tamanho da Bunda
            </option>
            {listBunda}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Tamanho do Peito
            </option>
            {listPeito}
          </select>
        </div>
        <div>
          <h2>Tem algum Silicone?</h2>
          {listSilicone}
        </div>
        <div>
          {/*Cor Cabelo*/}
          <select name="" id="">
            <option value="" disabled hidden selected>
              Cor do Cabelo
            </option>
            {listCorCabelo}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled hidden selected>
              Estilo do Cabelo
            </option>
            {listEstiloCabelo}
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled selected hidden>
              Cor dos Olhos
            </option>
            {listCorOlhos}
          </select>
        </div>
        <div>
          {/*Etnia*/}
          <select name="" id="">
            <option value="" selected hidden disabled>
              Etnias
            </option>
            {listEtnias}
          </select>
        </div>
      </div>
    </div>
  );
}
