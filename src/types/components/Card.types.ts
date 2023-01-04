export interface CardProps {
  title: string;
  description: string;
  autor: string;
  category: string;
  date?: Date;
  isSecondary?: boolean;
}

export type mealTypes =
  | "pork"
  | "vegetarian"
  | "chicken"
  | "beef"
  | "pizza"
  | "burger"
  | "sweet"
  | "fish"
  | "drink"
  | "vegan"
  | "sea";

export const mealTypesArray: Array<{ title: string; mealType: Category }> = [
  { title: "Kuřecí", mealType: "chicken" },
  { title: "Vepřové", mealType: "pork" },
  { title: "Vegetariánské", mealType: "vegetarian" },
  { title: "Hovězí", mealType: "beef" },
  { title: "pizza", mealType: "pizza" },
  { title: "Burger", mealType: "burger" },
  { title: "Sladké", mealType: "sweet" },
  { title: "Ryby", mealType: "fish" },
  { title: "Drinky", mealType: "drink" },
  { title: "Mořské plody", mealType: "sea" },
];

export type RecipeData = {
  title: string;
  author: string;
  price: string;
  calories: string;
  mainCategory: string;
  secondaryCategory: string;
  ingredience: Array<string>;
  recipe: string;
};

export type Category =
  | "beef"
  | "chicken"
  | "pork"
  | "burger"
  | "pizza"
  | "sea"
  | "fish"
  | "sweet"
  | "drink"
  | "vegetarian";
