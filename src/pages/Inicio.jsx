import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import '../styles/inicio.css';
import axios from 'axios';
function Inicio() {
  document.title = "ABRIME";
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 67);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const [nameList, setNameList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  
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
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page.current}&limit=12`)
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
      axios.get(`http://localhost:8080/v1/api/acompanhantes?nome=${inputSearch}&limit=0`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`)); 
    }else{
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page.current}&limit=12`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`));
    }
  }, [inputSearch]);
  //Fim
  const divPrincipalStyle = {
    minHeight: `${alturaDisponivel}px`,
  };

  //Search

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/acompanhantes?nome=${nameList}`)
      .then((res) => {
        //console.log(res.data.dados);
        setNameList(res.data.dados);
      }).catch(error => console.log(error));
  }, []);
  return (
    <main>
      <section>
        <div className="container_filter_search">
          <div className="box_gen">
            <button>Mulher | 324</button>
            <button>Homem | 12</button>
            <button>Trans | 5</button>
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
              if (inputSearch === "") {
                return item;
              } else if (item.nome.toLowerCase().includes(inputSearch.toLowerCase())) {
                return item;
              }
            })
            .map((item) => (
            <Link
              to={`/acompanhantes/${item._id}`}
              key={item._id}
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
