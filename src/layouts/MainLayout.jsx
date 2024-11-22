import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import BreakingNew from "../Shared/Header/BreakingNew";
import NavBar from "../Shared/Header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <BreakingNew />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
