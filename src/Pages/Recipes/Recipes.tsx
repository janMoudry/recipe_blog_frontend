import { ChangeEvent, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import apiManager from "../../apiManager/apiManager";
import Button from "../../components/Button";
import Card from "../../components/Card";
import NavigationCard from "../../components/NavigationCard";
import "../../styles/Pages/Recipes/Recipes.css";
import { mealTypes, RecipeData } from "../../types/components/Card.types";

type cardsArray = Array<{ title: string; mealType: mealTypes; icon: string }>;

const Recipes = () => {
  const [inputedText, setInputedText] = useState<string>("");
  const [recipes, setRecipes] = useState<
    { data: Array<RecipeData>; errCode: "200" } | {}
  >({});
  const [isRecipesShow, setRecipesShow] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const hadleCall = async (category: string) => {
    const recipes = await apiManager.getRecipesByCategory(category);
    //@ts-ignore
    if (recipes) {
      //@ts-ignore
      setRecipes(recipes);
      setRecipesShow(true);
      setInputedText("");
      if (inputRef.current) inputRef.current.value = "";
    }
  };

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

  const filteredRecipes = () => {
    if ("data" in recipes) {
      return recipes.data.filter(({ title }) =>
        title.toLowerCase().includes(inputedText.toLowerCase()),
      );
    }
    return [];
  };

  return (
    <div className="recipes_container">
      <div className="recipes_title_container">
        <span className="title">{isRecipesShow ? "Recepty" : "Kategorie"}</span>
        <input
          onChange={handleFilterChange}
          placeholder={isRecipesShow ? "Rizoto" : "Kuřecí"}
          ref={inputRef}
        />
        {isRecipesShow && (
          <Button
            label="Kategorie"
            icon={<FaArrowLeft />}
            onClick={() => {
              setInputedText("");
              setRecipes({});
              setRecipesShow(false);
              if (inputRef.current) inputRef.current.value = "";
            }}
          />
        )}
      </div>
      <div className="recipes_inner_container">
        {isRecipesShow ? (
          <>
            {filteredRecipes().map((item) => (
              <Card
                title={item.title}
                description={item.recipe}
                //@ts-ignore

                autor={item.author}
                category={item.mainCategory}
              />
            ))}
          </>
        ) : (
          filterCard().map(({ title, mealType, icon }) => (
            <NavigationCard
              title={title}
              mealType={mealType}
              icon={icon}
              key={title}
              onClick={() => hadleCall(mealType)}
            />
          ))
        )}
        {!filterCard().length && (
          <h1 className="no_existing">
            {isRecipesShow
              ? " Žádné recepty s tímhle názvem neexistují"
              : " Žádné kategorie s tímhle názvem neexistují"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Recipes;

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
