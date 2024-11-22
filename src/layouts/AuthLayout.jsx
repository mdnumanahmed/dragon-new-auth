import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Header/NavBar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
