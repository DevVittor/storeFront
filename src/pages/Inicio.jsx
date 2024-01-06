import { useEffect, useState } from "react";
//import "../styles/inicio.css";
import axios from 'axios';
import ProfileBanner from "../components/ProfileBanner";
import GenMulher from '../components/generos/Mulher';
import GenHomem from '../components/generos/Homem';
import GenTrans from '../components/generos/Trans';
import GenAll from '../components/generos/Todos';


function Inicio() {
  document.title = "ABRIME";
const [genero, setGenero] = useState("Mulher");
const [contador, setContador] = useState(0);
const [contadorMulher, setContadorMulher] = useState(0);
const [contadorHomem, setContadorHomem] = useState(0);
const [contadorTrans, setContadorTrans] = useState(0);


  let generoComponent;

   switch (genero) {
     case 'Mulher':
       generoComponent = <GenMulher />;
       break;
     case 'Homem':
       generoComponent = <GenHomem />;
       break;
     case 'Trans':
       generoComponent = <GenTrans />;
       break;
     default:
       return;
   }

  useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?limit=0`)
    .then((res)=>{
      const axiosResponse = res.data.dados;
      const total = axiosResponse.length;
      setContador(total);

      const countMulher = axiosResponse.filter(item => item.genero === "Mulher").length;
      setContadorMulher(countMulher);

      const countHomem = axiosResponse.filter(item => item.genero === "Homem").length;
      setContadorHomem(countHomem);

      const countTrans = axiosResponse.filter(item => item.genero === "Trans").length;
      setContadorTrans(countTrans);
    }).catch(error=>console.error(error));
  },[]);

 /*useEffect(() => {
    if(inputSearch.trim() !== ""){
      axios.get(`http://localhost:8080/v1/api/acompanhantes?nome=${nameList}&limit=12`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação: ${error}`));
    }else{
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page}&limit=12`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`));
    }
  }, [inputSearch]);*/

function handleGenreClick(gen){
  setGenero(gen);
}

  return (
    <main>
      <section>
        <div className="inicio_banner">
          <ProfileBanner
            banner="https://images.pexels.com/photos/18896754/pexels-photo-18896754/free-photo-of-fotografia-animal-fotografia-de-animais-chimpanze-mamifero.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Banner"
          />
        </div>
      </section>
      <section>
        <div className="container_filter_search">
          <div className="box_gen">
            <button
              className={genero === "Mulher" ? "selected" : ""}
              onClick={()=>handleGenreClick("Mulher")}>
                <i className="bi bi-gender-female"></i> Mulher | {contadorMulher}
            </button>
            <button
              className={genero === "Homem" ? "selected" : ""}
              onClick={()=>handleGenreClick("Homem")}>
                <i className="bi bi-gender-male"></i> Homem | {contadorHomem}
            </button>
            <button
              className={genero === "Trans" ? "selected" : ""}
              onClick={()=>handleGenreClick("Trans")}>
                <i className="bi bi-gender-trans"></i> Trans | {contadorTrans}
            </button>
          </div>
          <div className="container_search_filter_option">
            <div className="box_search">
              <input
                  type="search"
                name="nome"
                onChange={(e) => setInputSearch(e.target.value)}
                placeholder="Buscar nome"
              />
            </div>
            <div className="box_filter">
              <button><i className="ri-filter-2-line"></i>Filtro</button>
            </div>
            <div className="box_option">
              <select>
                <option>Novidades</option>
                <option>Destaques</option>
                <option>Verificadas</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {generoComponent}
    </main>
  )
}
export default Inicio;