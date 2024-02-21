import PropTypes from "prop-types";
import "../../styles/FilterModal.css";
import SearchProfile from "../SearchProfile";
function FilterModal({
  acomp,
  genero,
  setResult,
  setLoading,
  limit,
  setAcomp,
}) {
  const service = [
    "Anal",
    "Beijo na Boca",
    "Casal",
    "Boquete",
    "Jantar Romântico",
    "Festas",
    "Eventos",
    "Viagens",
    "Massagem Erótica",
    "Anal Giratório",
    "Chuva Dourada",
    "Chuva Negra",
    "Fantasia",
  ];

  return (
    <div className="modal_filter">
      <div className="title_filter_acomp">
        <h2>
          <i className="ri-filter-line"></i>Filtro:
        </h2>
      </div>
      <div className="search_option_acomp">
        <i className="ri-search-line"></i>
        <SearchProfile
          acomp={acomp}
          genero={genero}
          setResult={setResult}
          setLoading={setLoading}
          limit={limit}
          setAcomp={setAcomp}
        />
      </div>
      <div className="cache_filter_acomp">
        <i className="ri-cash-line"></i>
        <input
          type="text"
          name="max_price"
          id="max_price_acomp"
          maxLength={5}
          pattern="^[0-9]+([,.][0-9]+)?$"
          placeholder="Preço/Hora"
        />
      </div>
      <div className="idade_filter_acomp">
        <i className="ri-calendar-todo-fill"></i>
        <input
          type="text"
          name="idade_filter"
          id="max_price_acomp"
          maxLength={2}
          pattern="^[0-9]+([,.][0-9]+)?$"
          placeholder="Idade"
        />
      </div>
      <details className="details_corpo_acomp">
        <summary className="summary_corpo_acomp">Corpo</summary>
        <div className="corpo_filter_acomp">
          <div className="check_filter_corpo">
            <input type="checkbox" name="" id="check_filter_magra" />
            <label htmlFor="check_filter_magra">Magra</label>
          </div>
          <div className="check_filter_corpo">
            <input type="checkbox" name="" id="check_filter_normal" />
            <label htmlFor="check_filter_normal">Normal</label>
          </div>
          <div className="check_filter_corpo">
            <input type="checkbox" name="" id="check_filter_sarada" />
            <label htmlFor="check_filter_sarada">Sarada(o)</label>
          </div>
          <div className="check_filter_corpo">
            <input type="checkbox" name="" id="check_filter_gorda" />
            <label htmlFor="check_filter_gorda">Gorda(o)</label>
          </div>
        </div>
      </details>
      <details className="details_etnia_acomp">
        <summary className="summary_etnia_acomp">Etnia</summary>
        <div className="etnia_filter_acomp">
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_branca" />
            <label htmlFor="check_filter_branca">Branca(o)</label>
          </div>
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_morena" />
            <label htmlFor="check_filter_morena">Morena(o)</label>
          </div>
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_parda" />
            <label htmlFor="check_filter_parda">Parda(o)</label>
          </div>
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_negra" />
            <label htmlFor="check_filter_negra">Negra(o)</label>
          </div>
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_asiatica" />
            <label htmlFor="check_filter_asiatica">Asiática(o)</label>
          </div>
          <div className="check_filter_etnia">
            <input type="checkbox" name="" id="check_filter_indigena" />
            <label htmlFor="check_filter_indigena">Indigêna</label>
          </div>
        </div>
      </details>
      <details className="details_service_acomp">
        <summary className="summary_service_acomp">Serviços</summary>
        <div className="service_filter_acomp">
          {service.map((item, index) => (
            <div key={index} className="check_filter_service">
              <input type="checkbox" name="" id={`check_filter_${index}`} />
              <label htmlFor={`check_filter_${index}`}>{item}</label>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

FilterModal.propTypes = {
  acomp: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  genero: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  setResult: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  setLoading: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  limit: PropTypes.oneOfType([PropTypes.func, PropTypes.number]).isRequired,
  setAcomp: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
};
