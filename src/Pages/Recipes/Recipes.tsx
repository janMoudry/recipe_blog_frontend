import { ChangeEvent, useState } from "react";
import NavigationCard from "../../components/NavigationCard";
import "../../styles/Pages/Recipes/Recipes.css";
import { mealTypes } from "../../types/components/Card.types";

type cardsArray = Array<{ title: string; mealType: mealTypes; icon: string }>;

const Recipes = () => {
  const chicken = require("../../assets/chicken.gif");
  const pork = require("../../assets/pig.gif");
  const beef = require("../../assets/cow.gif");
  const salad = require("../../assets/salad.gif");
  const burger = require("../../assets/burger.gif");
  const donut = require("../../assets/donut.gif");
  const pizza = require("../../assets/pizza.gif");
  const fish = require("../../assets/pisces.gif");
  const sea = require("../../assets/shrimp.gif");
  const drink = require("../../assets/cocktail.gif");

  const [inputedText, setInputedText] = useState<string>("");

  const cards: cardsArray = [
    {
      title: "Kuřecí",
      mealType: "chicken",
      icon: chicken,
    },
    {
      title: "Hovězí",
      mealType: "beef",
      icon: beef,
    },
    {
      title: "Vegetariánské",
      mealType: "vegetarian",
      icon: salad,
    },
    {
      title: "Vepřové",
      mealType: "pork",
      icon: pork,
    },
    {
      title: "Burgery",
      mealType: "burger",
      icon: burger,
    },
    {
      title: "Pizza",
      mealType: "pizza",
      icon: pizza,
    },
    {
      title: "Sladké",
      mealType: "sweet",
      icon: donut,
    },
    {
      title: "Ryby",
      mealType: "fish",
      icon: fish,
    },
    {
      title: "Drinky",
      mealType: "drink",
      icon: drink,
    },
    {
      title: "Mořské plody",
      mealType: "sea",
      icon: sea,
    },
  ];

  const filterCard = (): cardsArray => {
    return cards.filter(({ title }) =>
      title.toLowerCase().includes(inputedText.toLowerCase()),
    );
  };

  const handleFilterChange = (e: ChangeEvent) => {
    const timeout = setTimeout(() => {
      //@ts-ignore
      e.target.value ? setInputedText(e.target.value) : setInputedText("");

      clearTimeout(timeout);
    }, 500);
  };

  return (
    <div className="recipes_container">
      <div className="recipes_title_container">
        <span className="title">Kategorie</span>
        <input onChange={handleFilterChange} placeholder="Kuřecí" />
      </div>
      <div className="recipes_inner_container">
        {filterCard().map(({ title, mealType, icon }) => (
          <NavigationCard
            title={title}
            mealType={mealType}
            icon={icon}
            key={title}
          />
        ))}
        {!filterCard().length && (
          <h1 className="no_existing">
            Žádné kategorie s tímhle názvem neexistují
          </h1>
        )}
      </div>
    </div>
  );
};

export default Recipes;
