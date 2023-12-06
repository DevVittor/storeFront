import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Acompanhantes from "./pages/Acompanhantes";
import Sobre from "./pages/Sobre";
import Acessar from "./pages/Acessar";
import Produto from "./pages/Produto";
import Profile from "./pages/Usuario";
import Error404 from "./pages/Error404";
import Auth from "./api/auth";
import Planos from "./pages/Planos";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Perfil from "./pages/Perfil";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="acompanhantes" element={<Acompanhantes />} />
          <Route
            path="sobre"
            element={
              <Auth>
                <Sobre />
              </Auth>
            }
          />
          <Route path="acessar" element={<Acessar />} />
          <Route
            path="planos"
            element={
              <Auth>
                <Planos />
              </Auth>
            }
          />
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
          <Route
            path="perfil"
            element={
              <Perfil />
            }
          />
          <Route path="produto" element={<Produto />} />
          <Route path="/acompanhantes/:id" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
