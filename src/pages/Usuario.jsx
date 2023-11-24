import { Link } from "react-router-dom";
import Card from "../components/CardImg";
import Services from "../components/Services";
import "../styles/usuario.css";
export default function Usuario() {
  return (
    <main>
      <section>
        <div className="container-usuario">
          <div className="box-usuario">
            <div className="usuario-photo">
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="usuario-info">
              <div className="box-info">
                <div className="usuario-name-selo">
                  <div className="usuario-name">
                    <h2>Jéssica Gomes</h2>
                  </div>
                  <div className="usuario-selo">
                    <nav>
                      <ul className="">
                        <li>
                          <i className=" ri-verified-badge-fill"></i>
                        </li>
                        <li>
                          <i className=" ri-flashlight-fill"></i>
                        </li>
                        <li>
                          <i className="ri-shield-check-fill"></i>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="price-share">
                  <div className="usuario-follow">
                    <button>R$ 250/H</button>
                  </div>
                  <div className="usuario-share">
                    <button>
                      <i className="ri-share-forward-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="usuario-descript">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores quasi ipsa sint fugit? Adipisci dolore autem sit amet
                  natus similique, in, omnis aliquam magni repudiandae, laborum
                  cumque cum totam? Sint!
                </p>
              </div>
              <div className="usuario-social">
                <nav>
                  <ul>
                    <li>
                      <Link to="/#">
                        <i className="ri-facebook-box-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-instagram-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-twitter-x-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <i className="ri-telegram-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="usuario-status">
          <div className="box-status">
            <h2>
              <i className="ri-gallery-fill"></i>40 | Posts
            </h2>
            <h2>
              <i className="ri-image-2-fill"></i>40 | Fotos
            </h2>
            <h2>
              <i className="ri-folder-video-fill"></i>0 | Vídeos
            </h2>
          </div>
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <div className="usuario-card">
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
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/10448485/pexels-photo-10448485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/10154767/pexels-photo-10154767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7125393/pexels-photo-7125393.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Card urlImg="https://images.pexels.com/photos/7227811/pexels-photo-7227811.jpeg" />
          <Card urlImg="https://images.pexels.com/photos/3209624/pexels-photo-3209624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </section>
    </main>
  );
}
