import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import Categoria from './pages/Categoria';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Cadastrar from './pages/Cadastrar';
import Acessar from './pages/Acessar';
import Produto from './pages/Produto';
import Profile from './pages/Profile';
import RegisterProfile from './pages/registerProfile';
import Error404 from './pages/Error404';
import Auth from './api/auth';
import Assinatura from './pages/Assinatura';
import Testando from './pages/Testando';
import Success from './pages/Success';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Inicio/>}/>
            <Route path="categoria" element={<Categoria/>}/>
            <Route path="sobre" element={<Auth><Sobre/></Auth>}/>
            <Route path="contato" element={<Contato/>}/>
            <Route path="cadastrar" element={<Cadastrar/>}/>
            <Route path="acessar" element={<Acessar/>}/>
            <Route path="assinatura" element={<Assinatura/>}/>
            <Route path="testando" element={<Testando/>}/>
            <Route path="success" element={<Success/>}/>
            <Route path="produto" element={<Produto/>}/>
            <Route path="/:id" element={<Profile/>}/>
            <Route path="/criarPerfil" element={<RegisterProfile/>}/>
            <Route path="*" element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
