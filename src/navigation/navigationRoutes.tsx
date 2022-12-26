import { Route } from "react-router";
import { Routes } from "react-router";
import CreateRecipe from "../Pages/CreateRecipe";
import LandingScene from "../Pages/LandingScene";
import NoExistingPage from "../Pages/NoExistingPage";
import Recipes from "../Pages/Recipes";

const NavigationRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingScene />} />
    <Route path="/Recipes" element={<Recipes />} />
    <Route path="/CreateRecipes" element={<CreateRecipe />} />
    <Route path="*" element={<NoExistingPage />} />
  </Routes>
);

export default NavigationRoutes;
