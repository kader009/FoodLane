import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="h-full bg-black">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;