import '../styles/nova.css';
import Card from "../components/Card";
import ProfileCard from "../components/ProfileCard";
import ProfileBanner from "../components/ProfileBanner";
import { Fragment } from 'react';
//import SliderNova from "../components/SliderNova";
//import {useState, useEffect} from 'react';
export const Nova=()=>{
  
  const banner = "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const foto = "https://images.pexels.com/photos/5799649/pexels-photo-5799649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const description = "Todos os dias são uma chance para aprender, crescer e abraçar as oportunidades que nos levam a novos horizontes e conquistas.conquistas.conquistas.con";

  let service = [
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

const tamanhoService = service.length;


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
                  <div className="medidas_lastname_acomp">
                    <div className='medidas_acomp'>
                      <nav>
                        <ul>
                          <li><i className="fa-solid fa-weight-hanging"></i>65kg</li>
                          <li><i className="fa-solid fa-ruler-combined"></i>1.58m</li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <h3>Gomes</h3>
                    </div>
                  </div>
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
            <div className="service_acomp">
              <nav>
                <ul>
                  {service.slice(0, tamanhoService).map((item, index) => (
                    <Fragment key={index}>
                      <li>{item.replace("-", "")}</li>
                      {index !== tamanhoService - 1 && <li>|</li>}
                    </Fragment>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="container_imagens">
              <div className="nova_three">
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/19627370/pexels-photo-19627370/free-photo-of-bone-de-baseball-bone-de-beisebol-face-rosto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/1840945/pexels-photo-1840945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
