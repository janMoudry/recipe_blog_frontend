import { CardProps } from "../../types/components/Card.types";

import "../../styles/components/Card/Card.css";

const Card = ({
  title,
  description,
  autor,
  type,
  date,
  isSecondary,
}: CardProps) => {
  return (
    <div className="card_container">
      <h1> {title.toUpperCase()} </h1>
      <h4> {autor} </h4>
      <h5> "{type}" </h5>
      <h5> {description} </h5>
      <h4>
        {date.getDate().toString()}. {date.getMonth().toString()}.{" "}
        {date.getFullYear().toString()}
      </h4>
    </div>
  );
};

export default Card;
