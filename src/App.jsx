import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Inicio } from "./pages/Inicio";
import { Acompanhantes } from "./pages/Acompanhantes";
import { Error404 } from "./pages/Error404";
import { ProtectedRoute } from "./api/auth";
import { Assinatura } from "./pages/Planos";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import { Perfil } from "./pages/Perfil";
import { ContaCriada } from "./components/ContaCriada";
import { Categoria } from "./pages/Categoria";
import { Nova } from "./pages/Nova";
import { UploadVideo } from "./components/uploadVideo";
import Demo from './pages/Demo';

import ModalBanner from "./components/ModalBanner";
//Modals

import { Files } from "./components/Files";
import { AcompRegistro } from "./components/modals/AcompRegistro";

import { LoginModal } from "./components/modals/LoginModal";

//Modals steps

import { EtapaType } from "./components/etapas/EtapaType";

//Apenas um teste
import { Formulario } from "./pages/Formulario";
import DestaquesModal from "./components/modals/DestaquesModal";
import Verificar from "./components/modals/Verificar";
import Conta from "./pages/Conta";
import { useEffect } from "react";
import Maps from "./components/Maps";

function App() {

  useEffect(() => {
    const milissegundos = 3 * 24 * 60 * 60 * 1000;
    const temToken = localStorage.getItem("Token");
    const intervalId = setInterval(() => {
      if (temToken) {
        //localStorage.removeItem('Token');
        localStorage.clear();
      }
    }, milissegundos);
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="seila" element={<Acompanhantes />} />
          <Route path="sobre" element={<Formulario />} />
          <Route path="acompanhante" element={<EtapaType />} />
          <Route path="planos" element={<Assinatura />} />
          <Route path="acomp" element={<AcompRegistro />} />
          <Route path="upload" element={<Files />} />
          <Route
            path="success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />
          <Route
            path="cancel"
            element={
              <ProtectedRoute>
                <Cancel />
              </ProtectedRoute>
            }
          />
          <Route path="demo" element={<Demo />} />
          <Route path="conta" element={<Conta />} />
          <Route path="destacar" element={<DestaquesModal />} />
          <Route path="verificar" element={<Verificar />} />
          <Route path="anunciar" element={<ModalBanner />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="categoria" element={<Categoria />} />
          <Route path="acessar" element={<LoginModal />} />
          <Route path="arquivo" element={<UploadVideo />} />
          <Route path="finalizada" element={<ContaCriada />} />
          <Route path="maps" element={<Maps />} />
          <Route path="/perfil/:id" element={<Nova />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;