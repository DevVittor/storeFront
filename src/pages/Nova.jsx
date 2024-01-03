import '../styles/nova.css';
import Card from "../components/Card";
import {useState, useEffect} from 'react';
function Nova(){

  const description = "Todos os dias são uma chance para aprender, crescer e abraçar as oportunidades que nos levam a novos horizontes e conquistas.conquistas.conquistas.con"
  const [texto,setTexto] = useState(["Base"]);

  const handleList = () => {
      }
  useEffect(()=>{
    const novosTexto = [];
      for(let i= 0; i<= 15; i++){
        novosTexto.push(`Serviço ${i}`) 
      }
    setTexto(novosTexto);
  },[])

  return(
    <main>
      <section>
        <div className="container_nova">
          <div className="nova_card">
            <img src="https://images.pexels.com/photos/19166083/pexels-photo-19166083/free-photo-of-loira-casaco-abrigo-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div> 
          <div className="nova_info">
            <div className="nova_one">
              <div>
                <nav>
                  <ul>
                    {texto.map((item,index)=>(
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="nova_two">
              <div className="nova_name">
                <div className="nova_option">
                  <a>
                    <i className="ri-arrow-left-s-line"></i>
                    Voltar
                  </a> 
                </div>  
                <div className="nome_one">
                  <h1>Jéssica</h1>
                </div>
                <div className="nova_payment">
                  <nav>
                    <ul>
                      <li>Pix</li>
                      <li>Dinheiro</li>
                      <li>Cartão de crédito</li>
                    </ul>
                  </nav>
                </div>
                <div className="nova_description">
                  <p>{description}</p>
                </div>
              </div>
              <div className="nova_components"> 
                <div className="components_card">
                  <div className="component_icon"><i className="ri-map-pin-user-fill"></i></div>
                  <div className="component_name"><h3>Local</h3></div>
                  <div className="component_button"><button><i className="ri-eye-fill"></i>Visualizar</button></div>
                </div>
              </div>
            </div>
            <div className="nova_one">
              <div>
                <nav>
                  <ul>
                    {texto.map((item,index)=>(
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="container_imagens">
              <div className="nova_three">
                <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Nova;
