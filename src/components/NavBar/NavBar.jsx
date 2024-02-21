import { Outlet } from "react-router-dom";
import { HeaderBar } from "../Header/HeaderBar";
export const NavBar = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}
