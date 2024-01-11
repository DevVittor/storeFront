import { useState, useRef, useEffect } from "react";
function SliderNova() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null); // Referência para o elemento div do carrossel
  const [texto, setTexto] = useState([]);

  useEffect(() => {
    const numbersArray = Array.from({ length: 90 }, (_, index) => index);
    setTexto(numbersArray);
  }, []);

  const itemsToShow = 10; // Definindo quantos itens serão exibidos em cada "slide"

  const startIndex = currentIndex * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  const visibleItems = texto.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (texto.length / itemsToShow));
    }, 5000); // Altera o slide a cada 5 segundos

    return () => {
      clearInterval(interval);
    };
  }, [texto.length, itemsToShow]);

  return (
    <div className="nova_one">
      <div className="list_one">
        <ul className="slider" ref={sliderRef}>
          {visibleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SliderNova;
