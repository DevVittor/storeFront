import '../styles/filtrando.css';
function Filtrando() {
  
  return(
    <div className="container_filtro">
      <div className="popUp_filtro">
        <div className="input_filtro">
          <i className="ri-search-line"></i>
          <input type="search" placeholder="Buscando alguém ? "/>
        </div>
        <div>
          <input type="text" placeholder="altura"/>
        </div>
      </div>
    </div>
  )
}
export default Filtrando;
