import { useState, useEffect } from "react";

export default function WindowSize() {
  const [alturaRef, setAlturaRef] = useState(65);
  const [alturaPage, setAlturaPage] = useState(window.innerHeight);
  const [alturaAtual, setAlturaAtual] = useState(alturaPage - alturaRef);

  useEffect(() => {
    function activeHeight() {
      const newAlturaRef = document
        .querySelector("header")
        .getBoundingClientRect().height;
      const newAlturaPage = window.innerHeight;

      setAlturaRef(newAlturaRef);
      setAlturaPage(newAlturaPage);
      setAlturaAtual(newAlturaPage - newAlturaRef);
    }

    activeHeight();

    window.addEventListener("resize", activeHeight);
    return () => window.removeEventListener("resize", activeHeight);
  }, []);

  return alturaAtual;
}
