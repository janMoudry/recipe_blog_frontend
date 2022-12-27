import { BrowserRouter } from "react-router-dom";
import NavigationRoutes from "./navigationRoutes";
import "../App.css";
import Menu from "./Menu";
import Footer from "../components/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Menu />
      <NavigationRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
