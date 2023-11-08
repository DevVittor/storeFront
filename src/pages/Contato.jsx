import "../styles/contato.css";
export default function Contato() {
  document.title = "Contato";
  const token = localStorage.getItem("Token");

  return (
    <>
      <h1>{token}</h1>
    </>
  );
}
