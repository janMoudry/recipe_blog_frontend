import React, { ChangeEvent, useRef, useState } from "react";
import { isBrowser } from "react-device-detect";
import { FaSave } from "react-icons/fa";
import Button from "../../components/Button";

import "../../styles/Pages/CreateRecipe/CreateRecipe.css";
import { mealTypesArray } from "../../types/components/Card.types";

const CreateRecipe = (): React.ReactElement => {
  const [imageForSave, setimageForSave] = useState<FileList | null>(null);
  const [image, setImage] = useState("");

  const imageUpload = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      const url = URL.createObjectURL(image);

      setImage(url);
    }
  };

  const hadleClickUpload = () => {
    imageUpload.current && imageUpload.current.click();
  };

  return (
    <div className="create_recipe_container">
      <div className="create_recipe_inner_container">
        <div className="image_container" onClick={hadleClickUpload}>
          {image ? (
            <img src={image} alt="" className="image_view" />
          ) : (
            <>
              <label> Vyber obrázek:</label>
              <input
                type={"file"}
                alt="Vyber obrázek"
                onChange={handleImageUpload}
                accept="image/png, image/jpeg"
                multiple={false}
                ref={imageUpload}
              />
            </>
          )}
        </div>
        <form>
          <div className="inputs_container">
            <label>Název:</label>

            <input type={"text"} placeholder={isBrowser ? "" : "Název"} />
          </div>
          <div className="inputs_container">
            <label>Autor:</label>

            <input type={"text"} placeholder={isBrowser ? "" : "Autor"} />
          </div>
          <div className="inputs_container">
            <label>Kategorie:</label>

            <select>
              {mealTypesArray.map((item) => (
                <option>{item} </option>
              ))}
            </select>
          </div>
          <div className="inputs_container">
            <label>Ingredience:</label>

            <input type={"text"} placeholder={isBrowser ? "" : "Ingredience"} />
          </div>
          <div className="inputs_container">
            <label>Postup Přípravy:</label>

            <textarea
              className="procedur"
              // type={"text"}
              placeholder={isBrowser ? "" : "Postup přípravy"}
            />
          </div>
          {isBrowser && (
            <Button label="Uložit" onClick={() => {}} icon={<FaSave />} />
          )}
        </form>
        {!isBrowser && (
          <Button label="Uložit" onClick={() => {}} icon={<FaSave />} />
        )}
      </div>
    </div>
  );
};

export default CreateRecipe;
