import {Link, useLocation} from 'react-router-dom';
import '../styles/header.css';
export default function Header(){
    const location = useLocation();

  // Define um objeto que mapeia caminhos para os nomes das classes
  const pathToClassName = {
    '/': 'Inicio',
    '/categoria': 'Categoria',
    '/sobre': 'Sobre',
    '/contato': 'Contato',
  };

  // Obtém o nome da classe correspondente à rota atual
  const currentRouteClass = pathToClassName[location.pathname] || '';
    return (
        <header>
            <div className="container-header">
                <div className='container-logo-menu'>
                    <div className="box-logo">
                    <Link to="/"><h1>ABRIME</h1></Link>
                    </div>
                    <div className="box-urls">
                        <nav>
                            <ul>
                                <li><Link to="/" className={currentRouteClass === 'Inicio' ? 'url-atual' : 'urls'}>Inicio</Link></li>
                                <li><Link to="/categoria" className={currentRouteClass === 'Categoria' ? 'url-atual' : 'urls'}>Categoria</Link></li>
                                <li><Link to="/sobre" className={currentRouteClass === 'Sobre' ? 'url-atual' : 'urls'}>Sobre</Link></li>
                                <li><Link to="/contato" className={currentRouteClass === 'Contato' ? 'url-atual' : 'urls'}>Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="box-acesso">
                        <Link to="/cadastrar">Cadastrar</Link>
                        <Link to="/acessar">Acessar<i className="ri-arrow-right-up-line"></i></Link>
                </div>
            </div>
        </header>
    )
}