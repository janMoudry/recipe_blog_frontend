export interface CardProps {
  title: string;
  description: string;
  autor: string;
  type: mealTypes;
  date: Date;
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

export const mealTypesArray = [
  "Kuřecí",
  "Vepřové",
  "Vegetariánské",
  "Hovězí",
  "pizza",
  "Burger",
  "Sladké",
  "Ryby",
  "Drinky",
  "Mořské plody",
];
