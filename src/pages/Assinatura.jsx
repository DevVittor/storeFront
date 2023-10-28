import { useState } from 'react';
import axios from 'axios';

export default function Assinatura() {
  const [email, setEmail] = useState("");
  const price = useState("price_1NFK9rIbcEgeFqaqxYcwn244");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      email,
      price
    };

    try {
      const response = await axios.post("http://localhost:8080/createcheckoutsession", sendData);
      console.log("Sessão de checkout criada:", response.data);
      // Você pode redirecionar o usuário para a página de checkout Stripe com a sessão criada
    } catch (error) {
      console.error("Erro ao criar a sessão de checkout:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="emailUser"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="hidden" name="priceId" value={price} />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}
