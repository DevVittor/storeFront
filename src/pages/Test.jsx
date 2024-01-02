import '../styles/test.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from "../components/Card";
import Slider from "../components/Services";
import Detalhes from "../components/Detalhes";
function Test() {

  const [age,setAge] = useState(18);

  const handleAge = (e)=>{
    if(age < 18 ){
      console.log("Apenas maiores de 18 anos são permitidos");
      setAge(18) 
    }
    setAge(e.target.value);
  }

  document.title="Jéssica Gomes";
  const avatar = "https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=";
    return (
      <main>
        <section>
          <h2 style={{color:"white"}}>{age}</h2>
          <input type="range" min="18" max="100" value={age} onChange={handleAge}/>
          <input type="number" placeholder="Age" min="18" max="100" value={age} onChange={handleAge}/>
        </section>
        <section>
          <Slider/>
        </section>
        <section>
          <div className="container-profile">
            <div className="box-profile">
              <div className="profile-photo">
                <img
                  src={avatar}
                  alt="Foto de perfil"
                />
              </div>
              <div className="profile-info">
                <div className="box-info">
                  <div className="profile-name">
                    <h2>
                      Jéssica Gomes<i className="ri-verified-badge-fill"></i>
                    </h2>
                  </div>
                  <div className="price-share">
                    <div className="profile-follow">
                      <button className="profile">R$ 250/h</button>
                    </div>
                    <div className="profile-share">
                      <button>
                        <i className="ri-more-2-fill"></i> 
                      </button>
                    </div>
                  </div>
                </div>
                <div className="profile-locale">
                  <span>Rio de Janeiro, Rj</span>
                  <span>|</span>
                  <span>Mulher</span>
                  <span>|</span>
                  <span>1.76 Cm</span>
                  <span>|</span>
                  <span>78 Kg</span>
                </div>
                <div className="box-descript">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores quasi ipsa sint fugit? Adipisci dolore autem sit amet
                    natus similique, in, omnis aliquam magni repudiandae, laborum
                    cumque cum totam? Sint!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Detalhes/>
        <section>
          <div className="container_imagens">
            <div className="container-card">
              <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
              <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
            <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
              <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
            </div>
          </div>
        </section>
      </main> 
    )
}
export default Test;
