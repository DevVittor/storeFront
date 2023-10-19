import {Link} from 'react-router-dom';
import '../styles/header.css';
export default function Header(){
    return (
        <header>
            <div className="container-header">
                <div className="box-logo">
                <Link to="/"><h1>ABRIME</h1></Link>
                </div>
                <div className="box-menu">
                    <div className="box-urls">
                        <nav>
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/categoria">Categoria</Link></li>
                                <li><Link to="/sobre">Sobre</Link></li>
                                <li><Link to="/contato">Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="box-acesso">
                        <Link to="/cadastrar">Cadastrar</Link>
                        <Link to="/acessar">Acessar</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}