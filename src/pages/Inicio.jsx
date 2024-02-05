import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import ProfileBanner from "../components/ProfileBanner";
import FilterModal from "../components/modals/FilterModal";

export const Inicio = ()=> {
  const ImgProfile = "https://images.pexels.com/photos/2479883/pexels-photo-2479883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  document.title = "ABRIME";
  
  const [genero, setGenero] = useState("Mulher");
  const [contadorMulher, setContadorMulher] = useState(0);
  const [contadorHomem, setContadorHomem] = useState(0);
  const [contadorTrans, setContadorTrans] = useState(0);
  const [result, setResult] = useState([]);
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 492);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [acomp,setAcomp] = useState("");
  const [filter,setFilter] = useState(false);

  useEffect(()=>{
    window.addEventListener("click",(event)=>{
      if (!event.target.closest(".box_filter") &&
      !event.target.closest(".modal_filter")) {
        setFilter(false);
      }
    })
  },[filter]);

  async function handleLengthGen(){

    try{
    const response = await fetch(`http://localhost:8080/v1/api/acompanhantes?limit=0`,{
      method:'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
      const data = await response.json();
      const axiosResponse = data.dados;

      const countMulher = axiosResponse.filter(item => item.genero === "Mulher").length;
      setContadorMulher(countMulher);

      const countHomem = axiosResponse.filter(item => item.genero === "Homem").length;
      setContadorHomem(countHomem);

      const countTrans = axiosResponse.filter(item => item.genero === "Trans").length;
      setContadorTrans(countTrans);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    handleLengthGen();
  },[])

  /*useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?limit=0`)
    .then((res)=>{
      const axiosResponse = res.data.dados;

      const countMulher = axiosResponse.filter(item => item.genero === "Mulher").length;
      setContadorMulher(countMulher);

      const countHomem = axiosResponse.filter(item => item.genero === "Homem").length;
      setContadorHomem(countHomem);

      const countTrans = axiosResponse.filter(item => item.genero === "Trans").length;
      setContadorTrans(countTrans);
    }).catch(error=>console.error(error));
  },[]);*/


  useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?limit=0`)
    .then((res)=>{
      const axiosResponse = res.data.dados;

      const countMulher = axiosResponse.filter(item => item.genero === "Mulher").length;
      setContadorMulher(countMulher);

    }).catch(error=>console.error(error));
  },[]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?genero=${genero}&limit=${limit}`)
      .then((res) => {
        const response = res.data.dados;
        const ListGen = response.filter(item=>item.genero === `${genero}`);
        setResult(ListGen);
      }).catch((error) => {
        console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`);
      });
  },[limit,genero]);

  //Novidade
  useEffect(() => {
    function handleResize() {
      setAlturaDisponivel(window.innerHeight - 492);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      // O usuário chegou perto do final da página, você pode carregar mais itens aqui
      if (!loading) {
        setLoading(true);
        axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page}&genero=${genero}&limit=6`)
          .then(() => {
            setLoading(false);
            setPage(prevResult => prevResult + 1);
            if (genero === "Mulher" && contadorMulher >= limit) {
              setLimit(prevResult => prevResult + 6);
            } else if (genero === "Homem" && contadorHomem >= limit) {
              setLimit(prevResult => prevResult + 6);
            } else if (genero === "Trans" && contadorTrans >= limit) {
              setLimit(prevResult => prevResult + 6);
            }
          })
          .catch((error) => {
            console.error(`Erro na requisição: ${error}`);
          });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, genero, page]);

const DivHeght = {
minHeight:`${alturaDisponivel}px`,
  height:"auto",
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
              onClick={()=>setGenero("Mulher")}>
                <i className="bi bi-gender-female"></i> Mulher | {contadorMulher}
            </button>
            <button
              className={genero === "Homem" ? "selected" : ""}
              onClick={()=>setGenero("Homem")}>
                <i className="bi bi-gender-male"></i> Homem | {contadorHomem}
            </button>
            <button
              className={genero === "Trans" ? "selected" : ""}
              onClick={()=>setGenero("Trans")}>
                <i className="bi bi-gender-trans"></i> Trans | {contadorTrans}
            </button>
          </div>
          <div className="container_search_filter_option">
            {filter && <FilterModal acomp={acomp} genero={genero} setResult={setResult} setLoading={setLoading} limit={limit} setAcomp={setAcomp}/>}
            <div className="box_filter">
              <button onClick={()=>setFilter(true)}><i className="ri-filter-2-line"></i>Filtro</button>
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
      <div className="container_cards" style={{DivHeght}}>
        {result.length === 0 ? (
          <div>
            <h1 style={{ color: "white" }}>Sem resultados {acomp} </h1>
            <button 
              style={{ background: "white", outline: "none", border: "1px solid white" }} 
              onClick={() => setAcomp("")}>
              Tente novamente!
            </button>
          </div>
        ) : (
          result.map((item, index) => (
            <Link to={`/acompanhante/${item._id}`} key={`${item._id}_${index}`}>
              <div className="card_profile ">
                <div className="avatar_profile">
                  <img loading="lazy" src={ImgProfile} alt={`picture_${item._id}`} />
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
                  <div className="name_age_profile">
                    <h2>{item.nome}</h2>
                    <h3>, {item.idade}</h3>
                  </div>
                  <span>Itaboraí, RJ</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
    </main>
  );
}
