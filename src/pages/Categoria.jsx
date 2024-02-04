import {useState,useEffect} from 'react';
import axios from 'axios';
export const Categoria=()=>{

  const token = localStorage.getItem('token');

  const [category,setCategory] = useState("");
  const [slug,setSlug] = useState(""); 
  const [aviso,setAviso] = useState("");
  const [categorias,setCategorias] = useState([]);
  //const [remove,setRemove] = useState("");

  useEffect(()=>{
    if(category.trim() !== ""){
      setSlug(category.replace(/\s+/g,"-"));
    }else{
      setSlug("");
    }
  },[category])

  useEffect(() => {
    if (slug.slice(-1) === "-") {
      setSlug(prevSlug => prevSlug.slice(0, -1));
    }
  }, [category]);

  useEffect(()=>{
    axios.get("http://localhost:8080/v1/api/categoria/ver")
    .then((res)=>{
      const categoriaMap = res.data.listCategory.map(item=>({
        _id: item._id,
        categoria: item.categoria,
        slug:item.slug
      }));
      setCategorias(categoriaMap);
    })
    .catch((error)=>{
      console.error(`Não deu para achar o error: ${error}`)
    })
  },[handleRemove]);

  function handleCategory(e){
    setCategory(e.target.value);
  }

  function uploadCategory(e){
    e.preventDefault();
    const dataCategory = {
      categoria:category,
      slug:slug
    }

    axios.post("http://localhost:8080/v1/api/categoria/save",dataCategory)
    .then((res)=>{
      setAviso("Categoria criada com sucesso!");
      setCategory("");
      setSlug("");
    })
    .catch((error)=>{
      setAviso(`A categoria ${category} já foi criada!`);
      console.error(`Não deu para criar essa categoria por causa disso ${error}`); 
    })
  }


  function handleRemove(id) {
    axios.delete(`http://localhost:8080/v1/api/categoria/${id}`)
      .then(res => {
        // Atualizar a lista de categorias após a exclusão
        setCategorias(prevCategorias =>
          prevCategorias.filter(item => item._id !== id)
        );
        console.log('Categoria removida com sucesso!');
      })
      .catch(error => {
        console.error(`Não foi possível deletar a categoria: ${error}`);
      });
  }

  return(
    <>
      <h1 style={{color:"white"}}>Aviso: {aviso}</h1>
      <form onSubmit={uploadCategory}>
        <h1 style={{color:"white"}}>Cadastrar Categoria</h1>
        <h2 style={{color:"white"}}>{category}</h2>
        <br/>
        <h2 style={{color:"white"}}>{slug}</h2>
        <input type="text" name="categoria" value={category} maxLength="24"onChange={handleCategory} placeholder="Nova Categoria"/>
        <input type="text" id="slugCategory" name="slug" maxLength="24" value={slug} placeholder="Slug" readOnly/>
        <input type="submit" value="Criar Categoria"/>
      </form>
      <>
        <h1 style={{color:"white"}}>Lista de Categorias</h1>
        <nav>
          <ul>
            {categorias
              .sort((a,b)=>a.categoria.localeCompare(b.categoria))
              .map((item,index)=>(
              <li key={index}>
                <p>Categoria: {item.categoria}</p>
                <p>Slug: {item.slug}</p>
                  <button onClick={() => handleRemove(item._id)}>Remover {item._id}</button>
                <hr/>
              </li>
            ))}
          </ul>
        </nav>
      </>
    </>
  ) 
}
