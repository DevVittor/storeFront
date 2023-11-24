import { useState, useEffect, useRef, useCallback } from "react";

import "../styles/imageSlider.css";

export default function ImageSlider() {
  const [arrayImage] = useState([
    "https://images.pexels.com/photos/17140100/pexels-photo-17140100/free-photo-of-desfiladeiro-canion-deserto-formacoes-rochosas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14945927/pexels-photo-14945927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12178693/pexels-photo-12178693.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/8909687/pexels-photo-8909687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2404298/pexels-photo-2404298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);

  const [index, setIndex] = useState(0);
  const intervalId = useRef(null);
  const currentImage = arrayImage[index];

  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % arrayImage.length);
  }, [arrayImage]);

  const startSlider = useCallback(() => {
    intervalId.current = setInterval(nextImage, 5000);
  }, [nextImage]);

  const pauseSlider = useCallback(() => {
    clearInterval(intervalId.current);
  }, []);

  const resumeSlider = useCallback(() => {
    startSlider();
  }, [startSlider]);

  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalId.current);
  }, [startSlider]);

  return (
    <img
      id="image"
      src={currentImage}
      alt="Image"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    />
  );
}
