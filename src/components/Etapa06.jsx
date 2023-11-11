import { useState } from "react";

export default function Etapa06() {
  const [pagamentos] = useState([
    "Dinheiro",
    "Pix",
    "Cartão de crédito",
    "Cartão de Débito",
  ]);

  const listPagamento = pagamentos.map((items, index) => (
    <label key={index}>
      <input type="checkbox" name="" id="" value={items} />
      <span>{items}</span>
    </label>
  ));

  return (
    <div>
      <div>
        <div className="">
          <h2>Formas de Pagamento</h2>
        </div>
        <div className="">
          <div>{listPagamento}</div>
        </div>
      </div>
    </div>
  );
}
