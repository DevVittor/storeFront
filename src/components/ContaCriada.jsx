import { Link } from 'react-router-dom';
import '../styles/contaCriada.css';
import Profile from '../components/Cardizinho.jsx';
export const ContaCriada=()=> {
	return (
		<div className="container_conta">
			<div className="box_conta">
				<Profile />
				<Link to="/planos">Destacar meu Perfil</Link>
			</div>
		</div>
	)
}
