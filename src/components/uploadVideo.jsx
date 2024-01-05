import {useState} from 'react';
function uploadVideo(){

  const all = {
    color:"black"
  }

  document.body.style.background = "white";
  
  const [arquivo,setArquivo] = useState(null);

  function handleFile(e){
    e.preventDefault();

    const file = e.target.files[0];


    if (file && file.size <=60 * 1024 * 1024) {
      setArquivo(file);
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2); // Convertendo para MB com duas casas decimais
      console.log(`Tamanho do arquivo: ${fileSizeInMB} MB`);
    }else{
      alert("O arquivo excede o tamanho máximo permitido de 30MB.");
      setArquivo(null); // Reseta o arquivo selecionado
    }
  }

  return(
    <>
      <h1>Upload de Vídeo</h1>
      <form  method="post" encType="multipart/form-data">
        <input onChange={handleFile} type="file"/> 
      </form>
      {arquivo && (
        <div>
          <h2 style={all}>Detalhes do Arquivo</h2>
          <p style={all}>Nome: {arquivo.name}</p>
          <p style={all}>Tipo: {arquivo.type}</p>
          <p style={all}>Tamanho: {(arquivo.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
      )}
    </>
  )
}

export default uploadVideo;
