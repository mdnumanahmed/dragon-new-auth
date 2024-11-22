import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Header/NavBar";

const AuthLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
