import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
//import { CookieConsent } from 'react-cookie-consent';
export const NavBar = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
      {/*<CookieConsent debug={true} location="bottom" buttonText="Aceito" expires={3} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quos!</p>
      </CookieConsent>*/}
    </>
  );
};
