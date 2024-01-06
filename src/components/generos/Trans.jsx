import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles/inicio.css';
import axios from 'axios';

function Trans() {

  const [result, setResult] = useState([]);
  const genero = "Trans";

  //Novidades
  const [alturaDisponivel, setAlturaDisponivel] = useState(window.innerHeight - 67);
  const [loading, setLoading] = useState(false);
  //const page = useRef(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  useEffect(()=>{
    axios.get(`http://localhost:8080/v1/api/acompanhantes?genero=${genero}&limit=${limit}`)
      .then((res) => {
        setResult(res.data.dados);
      }).catch((error) => {
        console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`);
      });
  },[limit]);

  //Novidade
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
      axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page}&genero${genero}&limit=12`)
        .then((res) => {
          setResult(prevResult => [...prevResult, ...res.data.dados]);
          setLoading(false);
          setPage(prevResult => prevResult + 1);
          setLimit(prevResult => prevResult + 12);
        }).catch((error) => {
          setLoading(false);
          console.error(`Não deu para pegar nenhuma informação por causa disso: ${error}`);
        });
    }
  };

  return (
      <section>
        <div className="container_cards">
          {result
            .map((item,index) => (
            <Link
              to={`/${item._id}`}
              key={`${item._id}_${index}`}
            >
              <div className="card_profile ">
                <div className="avatar_profile">
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
  )
}
export default Trans;
