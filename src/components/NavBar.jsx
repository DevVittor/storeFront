import { Outlet } from "react-router-dom";
import {HeaderBar} from "../components/Header";
//import FooterBar from "../components/Footer";
export const NavBar=()=> {
  return (
    <>
      <HeaderBar />
      <Outlet />
    {/*<FooterBar />*/}
    </>
  );
} 
