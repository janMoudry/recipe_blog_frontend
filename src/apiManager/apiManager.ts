import { Category, RecipeData } from "../types/components/Card.types";
import { createApi } from "./apiFetch";

const apiManager: {
  saveRecipes: (data: RecipeData) => Promise<{ errCode: string }>;
  getRecipesByCategory: (category: string) => Promise<void>;
} = {
  saveRecipes: async (data: RecipeData): Promise<{ errCode: string }> =>
    await createApi(data, "saveRecipe"),
  getRecipesByCategory: async (category: string): Promise<void> =>
    await createApi({ category }, "getRecipesByCategory"),
};

export default apiManager;
