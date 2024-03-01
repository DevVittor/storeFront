import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { Inicio } from "./pages/Inicio/Inicio"
import Painel from "./pages/Painel/Painel"
import { Error404 } from "./pages/Error404/Error404"
import { ProtectedRoute } from "./api/auth"
import { Success } from "./pages/Success/Success"
import { Cancel } from "./pages/Cancel/Cancel"
import Impulsionar from './pages/Impulsionar'

import { useEffect } from "react"
import Profile from "./pages/Profile/Profile"

export const App = () => {

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
          <Route path="/:username" element={<Profile/>}/>
          <Route path="painel" element={<Painel />} />
          <Route path="impulsionar" element={<Impulsionar />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}