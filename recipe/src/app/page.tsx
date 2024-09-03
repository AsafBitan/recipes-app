"use client";
import React, { useState } from "react";
import IngredientInputForm from "./components/IngredientInputForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients: string[]) => {
    try{
      const response = await axios.post('/api/recipies', { ingredients });
      setRecipes(response.data.recipes)
    }catch (error)
    {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Suggester</h1>
      <IngredientInputForm onSearch={handleSearch}/>
      <RecipeList recipes={recipes}/>
    </div>
  );
};
