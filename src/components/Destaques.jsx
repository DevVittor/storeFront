import { useEffect, useState } from "react";

export default function Destaques() {
  const [images] = useState([
    "https://images.pexels.com/photos/3470076/pexels-photo-3470076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9690184/pexels-photo-9690184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14186858/pexels-photo-14186858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7577558/pexels-photo-7577558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9435601/pexels-photo-9435601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12778062/pexels-photo-12778062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9218819/pexels-photo-9218819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12493818/pexels-photo-12493818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9026961/pexels-photo-9026961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12989368/pexels-photo-12989368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4029926/pexels-photo-4029926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15047049/pexels-photo-15047049/free-photo-of-praia-litoral-biquini-loira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4942663/pexels-photo-4942663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8157698/pexels-photo-8157698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11633817/pexels-photo-11633817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9645640/pexels-photo-9645640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10158565/pexels-photo-10158565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10208136/pexels-photo-10208136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8571314/pexels-photo-8571314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        // Atualiza a lista de imagens visíveis mantendo apenas 7 imagens
        const startIndex = currentIndex % images.length;
        const endIndex = (currentIndex + 7) % images.length;
        if (startIndex < endIndex) {
          setVisibleImages(images.slice(startIndex, endIndex));
        } else {
          setVisibleImages([
            ...images.slice(startIndex),
            ...images.slice(0, endIndex),
          ]);
        }

        // Atualiza o índice para a próxima posição
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => {
      // Limpa o intervalo quando o componente é desmontado
      clearInterval(interval);
    };
  }, [currentIndex, images, isPaused]);

  const handleMouseEnter = () => {
    // Pausa o slider quando o mouse entra na imagem
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    // Retoma o slider quando o mouse sai da imagem
    setIsPaused(false);
  };

  return (
    <section>
      <div className="container-slider">
        <div
          className="box-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {visibleImages.map((item, index) => (
            <div key={index} className="card-slider">
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
