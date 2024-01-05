import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import axios from 'axios';
import ProfileBanner from "../components/ProfileBanner";

function Inicio() {
  document.title = "ABRIME";
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 67);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const [nameList, setNameList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [genero, setGenero] = useState("");
  const [contador,setContador] = useState(0);
  const [contadorMulher, setContadorMulher] = useState(0);
  const [contadorHomem, setContadorHomem] = useState(0);
  const [contadorTrans, setContadorTrans] = useState(0);


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


  useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?limit=12`)
    .then((res)=>{
      const axiosResponse=(res.data.dados);
      setResult(axiosResponse);
    }).catch(error=>console.error(error));
  },[]);

  useEffect(() => {
    function handleResize() {
      setAlturaDisponivel(window.innerHeight - 67);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [result]);

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true); 
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page.current}&genero=${genero}&limit=12`)
        .then((res) => {
          setResult(prevResult => [...prevResult, ...res.data.dados]);
          setLoading(false);
          page.current += 1;
        }).catch((error) => {
          setLoading(false);
          console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`);
        });
    }
  };

  useEffect(() => {
    if(inputSearch.trim() !== ""){
      axios.get(`http://localhost:8080/v1/api/acompanhantes?nome=${nameList}&limit=12`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação: ${error}`)); 
    }else{
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page.current}&limit=12`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`));
    }
  }, [inputSearch,genero]);
  //Fim
  const divPrincipalStyle = {
    minHeight: `${alturaDisponivel}px`,
  };

  useEffect(()=>{
    const resultadoFinal = result.filter(item=>item.genero === "Mulher").length;
    console.log(resultadoFinal);
  },[])

  //Search

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/acompanhantes?genero=${genero}&nome=${nameList}`)
      .then((res) => {
        setNameList(res.data.dados);
      }).catch(error => console.log(error));
  }, []);

  //button gen
  
  const handleGenreClick= (gen)=>{
    setGenero(gen);
  }

  return (
    <main>
      <h1 style={{color:"white"}}>{contador}</h1>
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
              className={genero === "" ? "selected" : ""}
              onClick={()=>handleGenreClick("")}>
                <i className="ri-team-line"></i> Todos | {contador}
            </button>
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
      <section>
        <div className="container_cards" style={divPrincipalStyle}>
          {result
            .filter((item) => {
              if (genero !== "" && item.genero !== genero) {
                return false; // Não corresponde ao gênero selecionado, então retorna false para ser filtrado
              }
              if (inputSearch === "") {
                return item;
              } else if (item.nome.toLowerCase().includes(inputSearch.toLowerCase())) {
                return item;
              }
            })
            .map((item,index) => (
            <Link
              to={`/${item._id}`}
              key={`${item._id}_${index}`}
            >
              <div className="card_profile ">
                <div className="avatar_profile">
                  {/*<img src={`http://localhost:8080/upload/${item.avatar[0]}`} alt="" />*/}
                  <img src="https://images.pexels.com/photos/19283228/pexels-photo-19283228/free-photo-of-aventura-facanha-flutuando-voo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto" />
                  <div className="selos_profile">
                    <div className="selos_list">
                      <nav>
                        <ul>
                          <li><i className="ri-verified-badge-fill"></i></li>
                          <li><i className="ri-flashlight-fill"></i></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="gen_price">
                      <nav>
                        <ul>
                          <li>{item.genero}</li>
                          <li>|</li>
                          <li>R$ {item.caches}/H</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="name_profile">
                  <h2>{item.nome}, {item.idade}</h2>
                  <span>Rio de Janeiro, RJ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
export default Inicio;
