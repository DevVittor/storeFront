import Model from "../assets/borrado.jpg";
import "../styles/card.css";
export default function Card() {
  return (
    <div className="card-profile">
      <img src={Model} alt="" />
      <div className="card-info">
        <h2>Jéssica Gomes, 30</h2>
        <span>Rio de Janeiro, RJ</span>
      </div>
    </div>
  );
}
