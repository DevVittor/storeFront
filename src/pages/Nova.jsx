import Card from "../components/Card";
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
//import SliderNova from "../components/SliderNova";
//import {useState, useEffect} from 'react';

import WindowSize from "../components/WindowSize";
import styles from "./Nova.module.css";
export const Nova = () => {
  const alturaDiv = WindowSize();

  const description =
    "Todos os dias são uma chance para aprender, crescer e abraçar as oportunidades que nos levam a novos horizontes e conquistas.conquistas.conquistas.con";

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

  return (
    <main>
      <section>
        <div
          className={styles.container_nova}
          style={{ minHeight: `${alturaDiv}px` }}
        >
          <div className={styles.nova_info}>
            <div className={styles.nova_two}>
              <div className={styles.nova_name}>
                <div className={styles.nova_all}>
                  <div className={styles.nova_payment}>
                    <nav>
                      <ul>
                        <li>Pix</li>
                        <li>Dinheiro</li>
                        <li>Cartão de crédito</li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className={styles.nome_one}>
                  <h1>Jéssica</h1>
                  <div className={styles.medidas_lastname_acomp}>
                    <div className={styles.medidas_acomp}>
                      <nav>
                        <ul>
                          <li className={styles.peso}>
                            <GiWeight />
                            65kg
                          </li>
                          <li className={styles.altura}>
                            <GiBodyHeight />
                            1.58m
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <h3>Gomes</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.nova_description}>
                  <p>{description}</p>
                </div>
                <div className={styles.nova_contact}>
                  <h3 className={styles.contato}>
                    <GrContact />
                    (21) 998423-204
                  </h3>
                </div>

                <div className={styles.service_acomp}>
                  <marquee className={styles.list_services}>
                    {service.slice(0, tamanhoService).map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </marquee>
                </div>
              </div>

              <div className={styles.nova_three}>
                <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/19627370/pexels-photo-19627370/free-photo-of-bone-de-baseball-bone-de-beisebol-face-rosto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card urlImg="https://images.pexels.com/photos/2313635/pexels-photo-2313635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>

            <div className={styles.container_details}>
              <div className={styles.video}></div>
              <div className={styles.anuncio}></div>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.958451846314!2d-43.3586176!3d-22.95060965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9b7d3d8fdff%3A0xaa1c9667bd8a6bef!2zVmlhw6fDo28gUmVkZW50b3I!5e0!3m2!1spt-BR!2sbr!4v1707577578097!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
