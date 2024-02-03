import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Acompanhantes from "./pages/Acompanhantes";
//import Sobre from "./pages/Sobre";
import Acessar from "./pages/Acessar";
//import Registrar from "./pages/RegistrarModal";
//import Profile from "./pages/Usuario";
//import Test from './pages/Test';
//import Filtrando from './components/Filtrando';
import Error404 from "./pages/Error404";
import Auth from "./api/auth";
import Planos from "./pages/Planos";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Perfil from "./pages/Perfil";
import ContaCriada from "./components/ContaCriada";
import Categoria from './pages/Categoria';
import Nova from './pages/Nova';
import Arquivo from './components/uploadVideo';
import Mulher from './components/generos/Mulher';
import Homem from './components/generos/Homem';
import Trans from './components/generos/Trans';

//Modals

import Files from "./components/Files";
import ClienteModal from './components/modals/AcompRegistro';
import AcompModal from './components/modals/AcompRegistro';
import AnuncianteModal from './components/modals/AcompRegistro';

import DestaquesModal from "./components/modals/LoginModal";

//Modals steps 

import EtapaType from "./components/etapas/EtapaType";
import TypeAccount from "./components/modals/TypeAccount";

//Apenas um teste
import Formulario from './pages/Formulario';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="acompanhantes" element={<Acompanhantes />} />
          <Route path="sobre" element={<Formulario />}/>
          <Route path="acessar" element={<Acessar />} />
          <Route path="registrar" element={<EtapaType/>}/>
          <Route path="planos" element={<Planos />}/>
          <Route path="cliente" element={<ClienteModal/>}/>
          <Route path="acomp" element={<AcompModal/>}/>
          <Route path="anunciante" element={<AnuncianteModal/>}/>
          <Route path="upload" element={<Files/>}/>
          <Route path="tipo" element={<TypeAccount/>}/>
          <Route
            path="success"
            element={
              <Auth>
                <Success />
              </Auth>
            }
          />
          <Route
            path="cancel"
            element={
              <Auth>
                <Cancel />
              </Auth>
            }
          />
          <Route path="perfil" element={<Perfil />} />
          <Route path="categoria" element={<Categoria/>} />
          <Route path="destaque" element={<DestaquesModal/>}/>
          <Route path="Mulher" element={<Mulher/>}/>
          <Route path="Homem" element={<Homem/>}/>
          <Route path="Trans" element={<Trans/>}/>
          <Route path="arquivo" element={<Arquivo/>}/>
          <Route path="finalizada" element={<ContaCriada/>}/>
          {/*<Route path="/acompanhantes/:id" element={<Profile />} />*/}
          <Route path="/acompanhante/:id" element={<Nova />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
