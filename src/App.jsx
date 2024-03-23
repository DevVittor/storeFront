import { BrowserRouter, Route, Routes,useParams } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { Inicio } from "./pages/Inicio/Inicio"
import Painel from "./pages/Painel/Painel"
import { Error404 } from "./pages/Error404/Error404"
import { ProtectedRoute } from "./api/auth"
import { Success } from "./pages/Success/Success"
import { Cancel } from "./pages/Cancel/Cancel"
import Impulsionar from './pages/Impulsionar'

import { useEffect,useState} from "react"
import Profile from "./pages/Profile/Profile"
import axios from 'axios';

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
        <Route exact path="/" element={<NavBar />}>
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
          <Route exact path="/:id" element={<ProfileRoute/>}/>
          <Route exact path="painel" element={<Painel />} />
          <Route exact path="impulsionar" element={<Impulsionar />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

const ProfileRoute = () => {
  
  const [userExists, setUserExists] = useState(false);

  const {id} = useParams();
  console.log("userId React:",id);

  useEffect(() => {
      try {
        axios.get(`http://localhost:8080/v1/api/acompanhantes/${id}`)
        .then(()=>{
          console.log(`O usuario foi encontrado!`);
          setUserExists(true);
        }).catch((error)=>{
          console.log(`Nada de usuário encontrado ${error}`);
          setUserExists(false);
        })
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        setUserExists(false);
      }
  }, [id]);

  if (userExists) {
    return <Profile />;
  } else {
    return <Error404 />;
  }
};