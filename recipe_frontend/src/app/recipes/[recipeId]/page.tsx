"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

interface Equipment {
  id: number;
  image: string;
  name: string;
  temperature?: {
    number: number;
    unit: string;
  };
}
interface Ingredients {
  id: number;
  image: string;
  name: string;
}
interface Steps {
  equipment: Equipment[];
  ingredients: Ingredients[];
  number: number;
  step: string;
  length?: {
    number: number;
    unit: string;
  };
}
interface Instructions {
  name: string;
  steps: Steps[];
}

const RecipeInstructionsPage = () => {
  const router = useRouter();
  const { recipeId } = useParams();

  const [instructions, setInstructions] = useState<Instructions[]>([]);

  useEffect(() => {
    if (recipeId) {
      const getInstructions = async () => {
        try {
          const response = await axios.get(
            `/api/recipeInstructions?recipeId=${recipeId}`
          );
          setInstructions(response.data);
        } catch (error) {
          console.error("Error fetching recipe instructions", error);
        }
      };
      getInstructions();
    }
  }, [recipeId]);

  if (!instructions) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Recipe Instructions</h1>
      {instructions.length > 0 ? (
        instructions.map((instruction, index) => (
          <div key={index}>
            <h3>{instruction.name || "Instructions"}</h3>
            <ol>
              {instruction.steps.map((step) => (
                <li key={step.number}>
                  <p>{step.step}</p>
                  {step.ingredients.length > 0 && (
                    <div>
                      <h4>Ingredients:</h4>
                      <ul>
                        {step.ingredients.map((ingredient) => (
                          <li key={ingredient.id}>
                            <img
                              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                              alt={ingredient.name}
                            />
                            <p>{ingredient.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.equipment.length > 0 && (
                    <div>
                      <h4>Equipment:</h4>
                      <ul>
                        {step.equipment.map((equip) => (
                          <li key={equip.id}>
                            <img
                              src={`https://spoonacular.com/cdn/equipment_100x100/${equip.image}`}
                              alt={equip.name}
                            />
                            <p>{equip.name}</p>
                            {equip.temperature && (
                              <p>
                                Temperature: {equip.temperature.number}{" "}
                                {equip.temperature.unit}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.length && (
                    <p>
                      Time: {step.length.number} {step.length.unit}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))
      ) : (
        <p>No instructions found.</p>
      )}
    </div>
  );
};

export default RecipeInstructionsPage;
