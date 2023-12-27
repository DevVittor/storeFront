import axios from 'axios';
import {useState, useEffect} from 'react';
function searchForm() {

  const [searchform,setSearchForm] = useState("");

  const handleInputSearch = () => {
    useEffect(()=>{
      axios.get(`http://localhost:8080/v1/api/acompanhantes/${searchForm}`)
      .then((res)=>{
        console.log(res);
      }).catch(error=>console.log("O que você digitou não foi encontrado"));
    },[]);
  }

  return (
    <input
      type="text"
      value={searchform}
      onChange={handleInputSearch}
      placeholder="Pesquisar..."
    />
  );
}

export default searchForm;
