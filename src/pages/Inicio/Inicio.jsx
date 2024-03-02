import { useEffect, useState } from "react";
import axios from "axios";
import { SearchProfile } from "../../components/SearchProfile/SearchProfile";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiFireFill } from "react-icons/ri";
import { PiGenderFemale } from "react-icons/pi";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderTrans } from "react-icons/bs";
//import { ModalProfile } from "../ModalProfile/ModalProfile";
import foto from '../../assets/images/borrado.webp';
import WindowSize from "../../components/WindowSize/WindowSize";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Inicio = () => {

  const ImgProfile = foto;
  const alturaDiv = WindowSize();
  const [profile, setProfile] = useState(false);
  //const [item, setItem] = useState(null);
  const [genero, setGenero] = useState("Mulher");
  const [contadorMulher, setContadorMulher] = useState(0);
  const [contadorHomem, setContadorHomem] = useState(0);
  const [contadorTrans, setContadorTrans] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [acomp, setAcomp] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (
        !event.target.closest(".box_filter") &&
        !event.target.closest(".modal_filter")
      ) {
        setFilter(false);
      }
    });
  }, [filter]);

  async function handleLengthGen() {
    try {
      const response = await fetch(
        `http://localhost:8080/v1/api/acompanhantes?limit=0`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      const axiosResponse = data.dados;

      const countMulher = axiosResponse.filter(
        (item) => item.genero === "Mulher"
      ).length;
      setContadorMulher(countMulher);

      const countHomem = axiosResponse.filter(
        (item) => item.genero === "Homem"
      ).length;
      setContadorHomem(countHomem);

      const countTrans = axiosResponse.filter(
        (item) => item.genero === "Trans"
      ).length;
      setContadorTrans(countTrans);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLengthGen();
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/acompanhantes?limit=0`)
      .then((res) => {
        const axiosResponse = res.data.dados;

        const countMulher = axiosResponse.filter(
          (item) => item.genero === "Mulher"
        ).length;
        setContadorMulher(countMulher);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/api/acompanhantes?genero=${genero}&limit=${limit}`)
      .then((res) => {
        const response = res.data.dados;
        const ListGen = response.filter((item) => item.genero === `${genero}`);
        setResult(ListGen);
      })
      .catch((error) => {
        console.error(
          `Não deu para pegar nenhuma informação por causa disso: ${error}`
        );
      });
  }, [limit, genero]);

  useEffect(() => {
    function handleResize() {
      return alturaDiv;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [alturaDiv]);

  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      if (!loading) {
        setLoading(true);
        axios.get(`http://localhost:8080/v1/api/acompanhantes?page=${page}&genero=${genero}&limit=12`)
          .then(() => {
            setLoading(false);
            setPage((prevResult) => prevResult + 1);
            if (genero === "Mulher" && contadorMulher >= limit) {
              setLimit((prevResult) => prevResult + 12);
            } else if (genero === "Homem" && contadorHomem >= limit) {
              setLimit((prevResult) => prevResult + 12);
            } else if (genero === "Trans" && contadorTrans >= limit) {
              setLimit((prevResult) => prevResult + 12);
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

  /*function handleProfileData(item) {
    setProfile(!profile);
    setItem(item)
  }*/

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (profile && !e.target.closest("#modalProfile") && !e.target.closest("#card_profile")) {
        setProfile(false)
      }
    })
  }, [profile])

  return (
    <main>
      <Helmet>
        <title>AcompX - Início</title>
        <meta name="description" content="Inicio da página que mostras o perfil dos usuários presente da plataforma" />
      </Helmet>
      <section>
        <div className="flex items-center justify-between w-full flex-wrap px-[30px] py-[20px] dark:bg-dark bg-white">
          <div className="flex items-center gap-2 w-auto dark:bg-zinc-900 bg-zinc-200 p-[5px] rounded-full">
            <button
              className={genero === "Mulher"
                ? "flex items-center justify-center gap-2 px-[12px] py-[3px] rounded-full outline-none dark:bg-red-600 bg-zinc-900 text-white font-bold text-[14px]"
                : "flex items-center justify-center gap-2 px-[12px] py-[3px] dark:bg-zinc-800 bg-zinc-400 text-white font-bold text-[14px] w-auto rounded-full"}
              onClick={() => setGenero("Mulher")}
            >
              <PiGenderFemale /> Mulher | {contadorMulher}
            </button>
            <button
              className={genero === "Homem"
                ? "flex items-center justify-center gap-2 px-[12px] py-[3px] rounded-full outline-none dark:bg-red-600 bg-zinc-900 text-white font-bold text-[14px]"
                : "flex items-center justify-center gap-2 px-[12px] py-[3px] dark:bg-zinc-800 bg-zinc-600 text-white font-bold text-[14px] w-auto rounded-full"}
              onClick={() => setGenero("Homem")}
            >
              <BsGenderMale /> Homem | {contadorHomem}
            </button>
            <button
              className={genero === "Trans"
                ? "flex items-center justify-center gap-2 px-[12px] py-[3px] rounded-full outline-none dark:bg-red-600 bg-zinc-900 text-white font-bold text-[14px]"
                : "flex items-center justify-center gap-2 px-[12px] py-[3px] dark:bg-zinc-800 bg-zinc-600 text-white font-bold text-[14px] w-auto rounded-full"}
              onClick={() => setGenero("Trans")}
            >
              <BsGenderTrans /> Trans | {contadorTrans}
            </button>
          </div>
          <SearchProfile {...{ acomp, genero, setResult, setLoading, limit, setAcomp }}
          />
        </div>
      </section>
      <section>
        <div className="flex items-start justify-center flex-wrap gap-1 h-auto px-1 pb-1 pt-0 dark:bg-dark bg-red-500" style={{ minHeight: `${alturaDiv}px` }}>
          {result.length === 0 ? (
            <div>
              <h1 style={{ color: "white" }}>Sem resultados {acomp} </h1>
              <button
                style={{
                  background: "white",
                  outline: "none",
                  border: "1px solid white",
                }}
                onClick={() => setAcomp("")}
              >
                Tente novamente!
              </button>
            </div>
          ) : (
            result.map((item, index) => (
              <Link className="rounded-md" to={`/${item.nome_tag}`} key={`${item._id}_${index}`}>
                <div className="relative flex justify-end items-center flex-col h-auto 2xl:w-[312px] hover:cursor-pointer"  id="card_profile">
                <div className="grid-cols-6 contents">
                  <div className="absolute top-0 mt-[10px] flex justify-between items-center gap-2 bg-white pr-1 pl-3 py-1 rounded-full">
                    <div className="flex items-center justify-center gap-1">
                      <BsFillPatchCheckFill className="text-blue-500 text-xl" />
                      <RiFireFill className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <nav>
                        <ul className="flex justify-between gap-1 items-center text-sm bg-black text-white px-2.5 py-1 rounded-full font-light">
                          <li>{item.genero}</li>
                          <li>|</li>
                          <li>R$ {item.caches}/H</li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <img
                    className="rounded-md h-full w-full object-cover"
                    src={ImgProfile}
                    alt={`picture_${item._id}`}
                  />
                  <div className="absolute bottom-0 leading-4 flex justify-center flex-col rounded-b-md h-auto max-h-[80px] w-full py-2 px-2.5 backdrop-blur-xl">
                    <div className="flex items-center w-full ">
                      <h2 className="font-semibold text-lg text-white">{item.nome}</h2>
                      <h3 className="font-medium text-base text-white">, {item.idade} anos</h3>
                    </div>
                    <span className="font-light text-zinc-100">Itaboraí, RJ</span>
                  </div>
                </div>
              </div>
              </Link>
            ))
          )}
        </div>
      </section>
      {/*<section>
        {profile && <ModalProfile item={item} />}
      </section>*/}
    </main>
  );
}