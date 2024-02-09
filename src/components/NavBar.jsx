import { Outlet } from "react-router-dom";
import { HeaderBar } from "../components/Header";
export const NavBar = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};
