"use client";
import React, { useState } from "react";
import IngredientInputForm from "./components/IngredientInputForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredients: string[]) => {
    try {
      const response = await axios.post('/api/recipes', { ingredients });
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Recipe Suggester</h1>
      <IngredientInputForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}