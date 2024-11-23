import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideBar from "../pages/HomePage/RightSideBar/RightSideBar";
import NavBar from "../Shared/Header/NavBar";

const DetailsNewsLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3">
          <Outlet />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default DetailsNewsLayout;
