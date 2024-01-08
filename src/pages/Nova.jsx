import '../styles/nova.css';
import Card from "../components/Card";
import ProfileCard from "../components/ProfileCard";
import ProfileBanner from "../components/ProfileBanner";
//import SliderNova from "../components/SliderNova";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function Nova(){
  
  const banner = "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const foto = "https://images.pexels.com/photos/5799649/pexels-photo-5799649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const description = "Todos os dias são uma chance para aprender, crescer e abraçar as oportunidades que nos levam a novos horizontes e conquistas.conquistas.conquistas.con"
  const [texto,setTexto] = useState(["Base"]);
  const [cards,setCards] = useState("Fotos");
  let cardsSelect;

  switch(cards){
    case 'Fotos':
      cardsSelect = <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>;
      break;
    case 'Corpo':
      cardsSelect = <div style={{color:"white"}}>Cards de Corpo</div>;
      break;
    case 'Serviços':
      cardsSelect = <div style={{color:"white"}}>Cards de Serviços</div>;
      break;
    case 'Local':
      cardsSelect = <div style={{color:"white"}}>Cards de Local</div>;
      break;
    default:
      break;
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
            <ProfileCard
              avatar={foto}
              alt="foto"
              genero="Mulher"
              caches="1200"
              nome="Lorenna Martins"
              idade="32"
              estado="São Paulo"
              cidade="SP"
            />
          </div> 
          <div className="nova_info"> 
            <div className="nova_two">
              <div className="nova_name"> 
                <div className="nova_all">
                  <div className="nova_payment">
                    <nav>
                      <ul>
                        <li>Pix</li>
                        <li>Dinheiro</li>
                        <li>Cartão de crédito</li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="nome_one">
                  <h1>Jéssica</h1>
                  <h3>Gomes</h3>
                </div> 
                <div className="nova_description">
                  <p>{description}</p>
                </div>
                <div className="nova_contact">
                  <h3>
                    <i className="ri-message-2-fill"></i>(21) 998423-204   
                  </h3>
                </div>
              </div>
            <ProfileBanner
              banner={banner}
              alt="Banner"
            />
            </div>
            <div className="nova_one">
              <div className="list_one">
                <nav>
                  <ul>
                    {texto.map((item,index)=>(
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="nova_five">
              <div className="nova_select">
                <button
                  className={cards === "Fotos" ? "select_button" : "button_select"}
                  onClick={()=>setCards("Fotos")}
                >
                <i className="fa-regular fa-image"></i>
                Fotos
                </button>
                <button
                  className={cards === "Corpo" ? "select_button" : "button_select"}
                  onClick={()=>setCards("Corpo")}
                >
                <i className="fa-solid fa-child-reaching"></i>
                Corpo
                </button>
                <button
                  className={cards === "Serviços" ? "select_button" : "button_select"}
                  onClick={()=>setCards("Serviços")}
                >
                <i className="fa-solid fa-bell-concierge"></i>
                Serviços
                </button>
                <button 
                  className={cards === "Local" ? "select_button" : "button_select"}
                  onClick={()=>setCards("Local")}
                >
                <i className="fa-solid fa-location-dot"></i>
                Local
                </button>
              </div>
            </div> 
            <div className="container_imagens">
              <div className="nova_three">
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Nova;
