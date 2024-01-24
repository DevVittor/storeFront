import { useState } from 'react';
import '../styles/Files.css';
import axios from 'axios';
export default function Files() {

  const [files,setFiles]= useState([]);
  const [progress,setProgress] = useState(-1);
  const [name,setName]= useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    // Use e.target.files para obter a lista completa de arquivos
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('nome',name);
    // Adiciona todos os arquivos ao FormData
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    axios.post("http://localhost:8080/v1/api/acompanhantes/save", formData, {
      onUploadProgress: (progressEvent) => {
        setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      }
    })
  };

  return (
    <>
    <form encType='multipart/form-data' method='post'>
      <input type="text" name="nome" onChange={(e)=>setName(e.target.value)} id="" />
      <input type="file" name="files" multiple onChange={handleFileChange} id="files_files" />
      <button type='button' onClick={handleUpload}>
        Enviar
      </button>
    </form>
    {progress >=0 && (
      <div className='barra' style={{width:`${progress}%`}}>{
        progress === 100
        ? "Concluido"
        : progress <10 && progress >0
        ? '0'+progress+"%" 
        : progress+"%"}</div>
    )}
    </>
  )
}
