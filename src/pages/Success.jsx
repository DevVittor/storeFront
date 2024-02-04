import axios from 'axios';
export const Success=()=> {
    axios.post("http://localhost:8080/success")
    .then(res=>{
        console.log(res.data);
    }).catch(error=>console.error(`Deu Ruim ${error}`));
  return (
    <div>Success</div>
  )
}
