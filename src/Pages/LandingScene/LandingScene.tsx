import Button from "../../components/Button";
import MainImage from "../../components/Card/components/MainImage";
import "../../styles/Pages/LandingScene/LandingScene.css";
import { isBrowser } from "react-device-detect";
import { useNavigate } from "react-router";
import { FaHome, FaReceipt } from "react-icons/fa";

const LandingScene = () => {
  const navigate = useNavigate();

  return (
    <div className="landing_scene_container">
      <div className="landing_scene_textes">
        <h1> Z prdele dobrá jídla tady najdeš </h1>
        <h5>
          {" "}
          Tady bude nějaký vážně dlouhý text o tom, jak tahle stránka je
          naprosto boží a každy, kdo ji vidí, tak mu hned hučí v kládě. Jediný,
          kdo má možná lepší stránku než já je apple,a to jen proto že mají asi
          o 200 miliard dolarů víc na účtu{" "}
        </h5>
        <div className="buttons_container">
          <Button
            icon={<FaHome />}
            label="Přejít  na Recepty"
            onClick={() => navigate("Recipes")}
          />
          <Button
            icon={<FaReceipt />}
            label="Vytvořit recept"
            onClick={() => navigate("CreateRecipes")}
            isSecondary
          />
        </div>
      </div>

      {isBrowser && <MainImage />}
    </div>
  );
};

export default LandingScene;
