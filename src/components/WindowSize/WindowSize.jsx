import { useState, useEffect } from "react";

export default function WindowSize() {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [altura, setAltura] = useState(null);
  const [heightNow, setHeightNow] = useState(null);
  useEffect(() => {
    const headerElement = document.querySelector('header');
    const alturaElement = window.innerHeight;
    if (headerElement && alturaElement) {
      setHeaderHeight(headerElement.getBoundingClientRect().height);
      setAltura(alturaElement);
    }

    const handleResize = () => {
      setHeaderHeight(headerElement.getBoundingClientRect().height);
      setAltura(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (headerHeight && altura) {
      setHeightNow(altura - headerHeight);
    }
  }, [headerHeight, altura]);

  return heightNow;
}
