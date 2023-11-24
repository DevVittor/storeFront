import Card from "../components/CardImg";
import Services from "../components/Services";
import "../styles/usuario.css";
export default function Usuario() {
  return (
    <main>
      <section>
        <div className="container-usuario">
          <div className="box-usuario">
            <div className="usuario-avatar-selo">
              <div className="usuario-avatar">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/7120317/pexels-photo-7120317.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="usuario-selo">
                <nav>
                  <ul className="">
                    <li>
                      <i className="ri-verified-badge-fill"></i>
                    </li>
                    <li>
                      <i className="ri-flashlight-fill"></i>
                    </li>
                    <li>
                      <i className="ri-shield-check-fill"></i>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="usuario-info">
              <div className="box-info">
                <div className="usuario-name">
                  <h2>Jéssica Gomes | 35 anos</h2>
                </div>
                <div className="price-share">
                  <div className="usuario-follow">
                    <button>R$ 250/H</button>
                  </div>
                  <div className="usuario-share">
                    <button>
                      <i className="ri-error-warning-line"></i>Denunciar
                    </button>
                  </div>
                </div>
              </div>
              <div className="usuario-local-gen">
                <nav>
                  <ul>
                    <li>
                      <span>
                        <i className="ri-map-pin-line"></i>Rio Grande do Norte, SBC |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-women-line"></i>Mulher |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-open-arm-line"></i>1.75Cm |
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ri-scales-line"></i>67Kg
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="usuario-descript">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores quasi ipsa sint fugit? Adipisci dolore autem sit amet
                  natus similique, in, omnis aliquam magni repudiandae, laborum
                  cumque cum totam? Sint!
                </p>
              </div>
              <div className="usuario-social-contato">
                <div className="usuario-contato">
                  <i className="ri-bank-line"></i>
                </div>
                <div className="usuario-social">
                  <nav>
                    <ul>
                      <li>Pix |</li>
                      <li>Dinheiro |</li>
                      <li>Crédito/Débito</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="usuario-status">
          <div className="box-status">
            <h2>
              <i className="ri-add-line"></i>Detalhes
            </h2>
            <h2>
              <i className="ri-p2p-line"></i>Contatos
            </h2>
            <h2>
              <i className="ri-map-pin-user-fill"></i>Local
            </h2>
            <h2>
              <i className="ri-24-hours-line"></i>Horários
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
