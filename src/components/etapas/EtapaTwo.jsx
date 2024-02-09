import { useEffect, useState } from "react";
import "../../styles/EtapaTwo.css";
import PropTypes from "prop-types";
export default function EtapaTwo({ numero, children, onNext, next }) {
  const [payments, setPayments] = useState([]);
  const [numberZap, setNumberZap] = useState(null);
  const [priceHour, setPriceHour] = useState(null);
  const [genValue, setGenValue] = useState("");
  const [etniaValue, setEtniaValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [pesoValue, setPesoValue] = useState(null);

  useEffect(() => {
    console.log("Etnia", etniaValue);
    console.log("Peso:", pesoValue, "Tipo:", typeof pesoValue);
    console.log("Altura", heightValue, "Tipo", typeof heightValue);
    if (numberZap !== null) {
      console.log(
        "Quantidade de caracteres do número de telefone:",
        numberZap.toString().length
      );
    }
  }, [etniaValue, pesoValue, heightValue, numberZap]);

  useEffect(() => {
    if (
      payments.length !== 0 &&
      numberZap !== null &&
      numberZap.toString().length === 15 &&
      priceHour !== null &&
      priceHour !== "" &&
      genValue !== "" &&
      etniaValue !== "" &&
      bodyValue !== "" &&
      heightValue !== "" &&
      pesoValue !== null
    ) {
      next(false);
      onNext({
        payments,
        numberZap,
        priceHour,
        genValue,
        etniaValue,
        bodyValue,
        heightValue,
        pesoValue,
      });
    } else {
      next(true);
    }
  }, [
    payments,
    numberZap,
    priceHour,
    genValue,
    etniaValue,
    bodyValue,
    heightValue,
    pesoValue,
  ]);

  const handlePayments = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setPayments((prevPayments) => [...prevPayments, checkboxValue]);
    } else {
      setPayments((prevPayments) =>
        prevPayments.filter((payment) => payment !== checkboxValue)
      );
    }
  };
  function handleZap(e) {
    let inputNumber = e.target.value;

    // Remove todos os caracteres não numéricos do número de telefone
    inputNumber = inputNumber.replace(/\D/g, "");

    // Formata o número de telefone como (ddd) xxxxx-xxxx
    if (inputNumber.length <= 2) {
      inputNumber = `${inputNumber}`;
    } else if (inputNumber.length <= 8) {
      inputNumber = `(${inputNumber.substring(0, 2)}) ${inputNumber.substring(
        2
      )}`;
    } else {
      inputNumber = `(${inputNumber.substring(0, 2)}) ${inputNumber.substring(
        2,
        8
      )}-${inputNumber.substring(8)}`;
    }
    // Atualiza o estado com o número formatado
    setNumberZap(inputNumber);
  }
  const handlePriceHour = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^\d]/g, "");
    if (inputValue.length > 3) {
      inputValue = inputValue.replace(/(\d{3})$/, ".$1");
    }
    setPriceHour(inputValue);
  };
  function handleEtnia(e) {
    setEtniaValue(e.target.value);
  }
  function handleBodyData(e) {
    setBodyValue(e.target.value);
  }
  function handleHeight(e) {
    const heightAtual = e.target.value;
    const convertHeight = (heightAtual / 100).toFixed(2);
    setHeightValue(convertHeight);
  }
  function handlePeso(e) {
    const pesoAtual = e.target.value;
    const convertPeso = parseInt(pesoAtual);
    setPesoValue(convertPeso);
  }
  function handleGen(e) {
    setGenValue(e.target.value);
  }

  return (
    <div className="container_etapa_type">
      <h2>
        <i className="ri-signpost-line"></i> 0{numero}|03
      </h2>
      <div className="modal_formas_pagamentos_acomp">
        <div className="box_pagamento_acomp">
          <input
            type="checkbox"
            id="input_dinheiro_acomp"
            value="Dinheiro"
            onChange={handlePayments}
          />
          <label htmlFor="input_dinheiro_acomp">Dinheiro</label>
        </div>
        <div className="box_pagamento_acomp">
          <input
            type="checkbox"
            id="input_pix_acomp"
            value="Pix"
            onChange={handlePayments}
          />
          <label htmlFor="input_pix_acomp">Pix</label>
        </div>
        <div className="box_pagamento_acomp">
          <input
            type="checkbox"
            id="input_credito_acomp"
            value="Cartão de crédito"
            onChange={handlePayments}
          />
          <label htmlFor="input_credito_acomp">Cartão de crédito</label>
        </div>
        <div className="box_pagamento_acomp">
          <input
            type="checkbox"
            id="input_debito_acomp"
            value="Cartão de Débito"
            onChange={handlePayments}
          />
          <label htmlFor="input_debito_acomp">Cartão de Débito</label>
        </div>
      </div>
      <div className="modal_zap_price_acomp">
        <input
          type="text"
          required
          placeholder="Whatsapp"
          maxLength={15}
          value={numberZap || ""}
          onChange={handleZap}
        />
        <input
          type="text"
          required
          minLength={2}
          maxLength={7}
          placeholder="Valor por hora"
          value={priceHour || ""}
          onChange={handlePriceHour}
        />
      </div>
      <div className="modal_acomp_gen_etnia_body">
        <div className="modal_genero_acomp">
          <select
            defaultValue="Genero"
            name=""
            id=""
            value={genValue}
            onChange={handleGen}
            required
          >
            <option value="" disabled>
              Gênero
            </option>
            <option value="Mulher">Mulher</option>
            <option value="Homem">Homem</option>
            <option value="Trans">Trans</option>
          </select>
        </div>
        <div className="modal_etnia_acomp">
          <select
            name=""
            value={etniaValue}
            onChange={handleEtnia}
            id=""
            required
          >
            <option value="" disabled>
              Etnia
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Branca"
                  : genValue === "Homem"
                  ? "Branco"
                  : "Branca(o)"
              }
            >
              {genValue === "Mulher"
                ? "Branca"
                : genValue === "Homem"
                ? "Branco"
                : "Branca(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Morena"
                  : genValue === "Homem"
                  ? "Moreno"
                  : "Morena(o)"
              }
            >
              {genValue === "Mulher"
                ? "Morena"
                : genValue === "Homem"
                ? "Moreno"
                : "Morena(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Parda"
                  : genValue === "Homem"
                  ? "Pardo"
                  : "Parda(o)"
              }
            >
              {genValue === "Mulher"
                ? "Parda"
                : genValue === "Homem"
                ? "Pardo"
                : "Parda(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Negra"
                  : genValue === "Homem"
                  ? "Negro"
                  : "Negra(o)"
              }
            >
              {genValue === "Mulher"
                ? "Negra"
                : genValue === "Homem"
                ? "Negro"
                : "Negra(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Asiática"
                  : genValue === "Homem"
                  ? "Negro"
                  : "Asiática(o)"
              }
            >
              {genValue === "Mulher"
                ? "Asiática"
                : genValue === "Homem"
                ? "Asiático"
                : "Asiática(o)"}
            </option>
            <option value="Indigêna">Indigêna</option>
          </select>
        </div>
        <div className="modal_corpo_acomp">
          <select
            name=""
            value={bodyValue}
            onChange={handleBodyData}
            id=""
            required
          >
            <option value="" disabled>
              Corpo
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Magra"
                  : genValue === "Homem"
                  ? "Magro"
                  : "Magra(o)"
              }
            >
              {genValue === "Mulher"
                ? "Magra"
                : genValue === "Homem"
                ? "Magro"
                : "Magra(o)"}
            </option>
            <option value="Normal">Normal</option>
            <option
              value={
                genValue === "Mulher"
                  ? "Sarada"
                  : genValue === "Homem"
                  ? "Sarado"
                  : "Sarada(o)"
              }
            >
              {genValue === "Mulher"
                ? "Sarada"
                : genValue === "Homem"
                ? "Sarado"
                : "Sarada(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Musculosa"
                  : genValue === "Homem"
                  ? "Musculoso"
                  : "Musculosa(o)"
              }
            >
              {genValue === "Mulher"
                ? "Musculosa"
                : genValue === "Homem"
                ? "Musculoso"
                : "Musculosa(o)"}
            </option>
            <option
              value={
                genValue === "Mulher"
                  ? "Gordinha"
                  : genValue === "Homem"
                  ? "Gordinho"
                  : "Gordinha(o)"
              }
            >
              {genValue === "Mulher"
                ? "Gordinha"
                : genValue === "Homem"
                ? "Gordinho"
                : "Gordinha(o)"}
            </option>
          </select>
        </div>
      </div>
      <div className="modal_altura_peso_acomp">
        <div className="modal_altura_acomp">
          <label htmlFor="range_heigth_acomp">
            Altura: <span>{heightValue}M</span>
          </label>
          <input
            type="range"
            name="height"
            step={1}
            min={120}
            max={250}
            id="range_heigth_acomp"
            onChange={handleHeight}
          />
        </div>
        <div className="modal_peso_acomp">
          <label htmlFor="range_peso_acomp">
            Peso: <span>{pesoValue}Kg</span>
          </label>
          <input
            type="range"
            name="peso"
            step={1}
            min={30}
            max={250}
            id="range_peso_acomp"
            onChange={handlePeso}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
EtapaTwo.propTypes = {
  numero: PropTypes.number,
  children: PropTypes.node,
  onNext: PropTypes.func,
  next: PropTypes.bool,
};
