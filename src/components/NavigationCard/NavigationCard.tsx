import "../../styles/components/NavigationCard/NavigationCard.css";
import { NavigationCardProps } from "../../types/components/NavigationCard.types";

const NavigationCard = ({
  title,
  mealType,
  icon,
  onClick,
}: NavigationCardProps) => {
  return (
    <div className="navigation_card" onClick={onClick}>
      <h1> {title} </h1>
      <img src={icon} />
    </div>
  );
};

export default NavigationCard;
