import { Outlet } from "react-router-dom";
import HeaderBar from "../components/Header";
//import FooterBar from "../components/Footer";
function NavBar() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    {/*<FooterBar />*/}
    </>
  );
}
export default NavBar; 
