import { BrowserRouter } from "react-router-dom";
import NavigationRoutes from "./navigationRoutes";
import "../App.css";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Menu />
      <NavigationRoutes />
    </BrowserRouter>
  );
};

export default Navigation;
