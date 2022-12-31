import { useRef, useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import Button from "../../components/Button";
import "../../styles/Pages/CreateRecipe/CreateRecipe.css";
import { mealTypesArray } from "../../types/components/Card.types";

const CreateRecipe = () => {
  const [ingredienceArray, setIngredienceArray] = useState<Array<string>>([]);
  const ingredienceInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const priceInputRef = useRef<HTMLInputElement | null>(null);
  const caloriesInputRef = useRef<HTMLInputElement | null>(null);
  const authorInputRef = useRef<HTMLInputElement | null>(null);
  const mainCategorySelectRef = useRef<HTMLSelectElement | null>(null);
  const secondaryCategorySelectRef = useRef<HTMLSelectElement | null>(null);
  const recipeTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleAddIngredienceToArray = () => {
    if (
      ingredienceInputRef.current &&
      ingredienceInputRef.current?.value &&
      !ingredienceArray.includes(
        ingredienceInputRef.current.value.toLocaleLowerCase(),
      )
    ) {
      setIngredienceArray([
        ...ingredienceArray,
        ingredienceInputRef.current.value.toLocaleLowerCase(),
      ]);
      ingredienceInputRef.current.value = "";
    }
  };

  const handleSaveRecipe = () => {
    if (
      ingredienceArray.length > 2 &&
      nameInputRef.current?.value &&
      priceInputRef.current?.value &&
      caloriesInputRef.current?.value &&
      authorInputRef.current?.value &&
      mainCategorySelectRef.current?.value &&
      secondaryCategorySelectRef.current?.value &&
      recipeTextareaRef.current?.value
    ) {
      console.log("start saving");
    } else {
      alert("Musíš vše vyplnit");
    }
  };

  const handleDeleteItemFromArray = (name: string) => {
    const index = ingredienceArray.indexOf(name);
    const array = ingredienceArray;
    if (index !== -1) {
      array.splice(index, 1);
      setIngredienceArray([...array]);
    }
  };

  return (
    <div className="create_recipe_container">
      <div className="basic_inputs_container">
        <div className="input_container">
          <label>Název:</label>
          <input type={"text"} ref={nameInputRef} />
        </div>
        <div className="input_container">
          <label>Cena:</label>
          <input type={"text"} ref={priceInputRef} />
        </div>
        <div className="input_container">
          <label>Kalorie:</label>
          <input type={"text"} ref={caloriesInputRef} />
        </div>
        <div className="input_container">
          <label>Autor:</label>
          <input type={"text"} ref={authorInputRef} />
        </div>
        <div className="input_container">
          <select defaultValue={""} ref={mainCategorySelectRef}>
            <option value={""} disabled>
              Vyber hlavní kategorii
            </option>
            {mealTypesArray.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="input_container">
          <select defaultValue={""} ref={secondaryCategorySelectRef}>
            <option value={""} disabled>
              Vyber sekundární kategorii
            </option>
            {mealTypesArray.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="advence_input_container">
        <div className="ingredience_container">
          <div className="ingredience_inner_container">
            <input ref={ingredienceInputRef} type={"text"} />
            <div className="ingredience_inner_container_icon">
              <FaPlus onClick={handleAddIngredienceToArray} />
            </div>
          </div>
          <div className="ingredience_items">
            {ingredienceArray.map((item) => (
              <p key={item} onClick={() => handleDeleteItemFromArray(item)}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="procedur_container">
          <textarea
            placeholder="napiš svůj recept..."
            rows={1}
            cols={10}
            ref={recipeTextareaRef}
          />
        </div>
      </div>
      <Button label="Uložit" onClick={handleSaveRecipe} icon={<FaSave />} />
    </div>
  );
};

export default CreateRecipe;
