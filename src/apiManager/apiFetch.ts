import axios from "axios";
import { RecipeData } from "../types/components/Card.types";

export const createApi = async (
  data: RecipeData | { category: string },
  adress: string,
  params?: any,
): Promise<any> => {
  try {
    const conpleteUrl = `http://192.168.0.139:3001/${adress}`;
    const fetchedData = await axios.get(conpleteUrl, {
      params: { ...data, apiKey: "some_value_will_be_here" },
    });

    if (fetchedData.data) {
      if (fetchedData.data.errCode === "200") {
        return fetchedData.data;
      }
    }
  } catch (err: unknown) {
    console.log(err);
  }
};
