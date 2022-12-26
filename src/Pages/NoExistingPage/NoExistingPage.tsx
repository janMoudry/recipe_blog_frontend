import { FaHome, FaSadCry, FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import "../../styles/Pages/NoExistingPage/NoExistingPage.css";

const NoExistingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="no_existing_page">
      <p>
        Tahle stránka neexistuje <FaSadTear />
      </p>
      <Button
        label="Domů"
        icon={<FaHome />}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default NoExistingPage;
