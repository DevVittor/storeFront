import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
import styles from "./SearchProfile.module.css";
export const SearchProfile = ({
  acomp,
  genero,
  setResult,
  setLoading,
  limit,
  setAcomp,
}) => {
  const [modalFilter, setModalFilter] = useState(true);
  const servicos = [
    "Anal",
    "Beijo na Boca",
    "Casal",
    "Namoradinha",
    "Fantasias",
    "Massagem erótica",
    "Chuva Dourada",
    "Chuva Negra",
    "Striptease",
    "Festas",
    "Eventos",
    "Viagens",
    "Anal Giratório",
  ];
  const cabelo = [
    "Liso",
    "Ondulado",
    "Cacheado",
    "Crespo"
  ];
  const tamanhos = [
    "Raspado",
    "Curto",
    "Médio",
    "Longo",
    "Volumoso"
  ];
  const cor = [
    "Preto",
    "Castanho",
    "Loiro",
    "Grisalho",
    "Colorido"
  ];
  const corpo = [
    "Magro",
    "Normal",
    "Sarado",
    "Musculoso",
    "Gordinho",
    "Gordo",
  ]
  useEffect(() => {
    if (acomp.trim() !== "") {
      axios
        .get(
          `http://localhost:8080/v1/api/acompanhantes?name=${acomp}&genero=${genero}&limit=0`
        )
        .then((res) => {
          const axiosResponse = res.data.dados;
          const filterAxios = axiosResponse.filter((item) =>
            item.nome.toLowerCase().includes(acomp.toLowerCase())
          );
          setResult([...filterAxios]);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    } else {
      // Se o campo de busca estiver vazio, exibir todos os resultados novamente
      axios
        .get(
          `http://localhost:8080/v1/api/acompanhantes?genero=${genero}&limit=${limit}`
        )
        .then((res) => {
          setResult(res.data.dados);
        })
        .catch((error) => {
          console.error(
            `Não deu para pegar nenhuma informação por causa disso: ${error}`
          );
        });
    }
  }, [acomp, genero, limit, setResult, setLoading]);


  function openFilter() {
    setModalFilter(!modalFilter);
    console.log("CLicou")
  }

  return (
    <div className="bg-white flex items-center gap-2 px-3 py-1 border border-zinc-200 rounded-sm relative">
      <IoMdSearch className="bg-white" />
      <input
      className="outline-none border-none"
        type="search"
        name="nome"
        value={acomp}
        onChange={(e) => setAcomp(e.target.value)}
        placeholder="Digite um nome"
      />
      {modalFilter ? (
        <div className="relative top-0">
          <MdFilterListOff className={styles.icon_filter} onClick={openFilter} />
          {modalFilter && (
            <div className="bg-red-500 fixed flex flex-col right-0 max-h-[80%] overflow-y-auto px-5 py-5 m-5 z-10">
              <div className={styles.number_filter}>
                <input type="range" name="" id="" />
                <label htmlFor="">Preço</label>
              </div>
              <div className="">
                <input type="range" name="" id="" />
                <label htmlFor="">Idade</label>
              </div>
              <div className="">
                <input type="range" name="" id="" />
                <label htmlFor="">Altura</label>
              </div>
              <div className="">
                <input type="range" name="" id="" />
                <label htmlFor="">Peso</label>
              </div>
              <hr />
              <div>
                <h3>Serviços</h3>
                {servicos.map((item, index) => (
                  <div className={styles.filter_check} key={index}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{item}</label>
                  </div>
                ))}
              </div>
              <hr />
              <div>
                <h3>Cabelo</h3>
                <div>
                  {cabelo.map((item, index) => (
                    <div key={index} className={styles.filter_check}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
                <h3>Tamanho</h3>
                <div>
                  {tamanhos.map((item, index) => (
                    <div className={styles.filter_check} key={index}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
                <h3>Cor</h3>
                <div>
                  {cor.map((item, index) => (
                    <div className={styles.filter_check} key={index}>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              <div>
                <h3>Corpo</h3>
                {corpo.map((item, index) => (
                  <div className={styles.filter_check} key={index}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{item}</label>
                  </div>
                ))}
              </div>
              <hr />
              <div>
                <h3>Detalhes</h3>
                <div className={styles.filter_check}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Tatuagem</label>
                </div>
                <div className={styles.filter_check}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Aparelho Bocal</label>
                </div>
                <div className={styles.filter_check}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Piercing</label>
                </div>
                <div className={styles.filter_check}>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Cicatriz</label>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <MdOutlineFilterList className={styles.icon_filter} onClick={openFilter} />
      )}
    </div>
  );
}

SearchProfile.propTypes = {
  acomp: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  genero: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  setResult: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  setLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  limit: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  setAcomp: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
};
