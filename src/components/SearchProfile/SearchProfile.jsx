import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
import styles from "./SearchProfile.module.css";
export const SearchProfile=({
  acomp,
  genero,
  setResult,
  setLoading,
  limit,
  setAcomp,
})=> {
  const [modalFilter, setModalFilter] = useState(false);
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
    <div className={styles.box_search}>
      <IoMdSearch className={styles.icon_search} />
      <input
        type="search"
        name="nome"
        value={acomp}
        onChange={(e) => setAcomp(e.target.value)}
        placeholder="Digite um nome"
      />
      {modalFilter ? (
        <MdFilterListOff className={styles.icon_filter} onClick={openFilter} />
      ) : (
        <MdOutlineFilterList className={styles.icon_filter} onClick={openFilter} />
      )}

      {modalFilter && (
        <div className={styles.filter}>
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
