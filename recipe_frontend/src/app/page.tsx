"use client";
import React, { useState, useEffect } from "react";
import IngredientInputForm from "./components/IngredientInputForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() =>{
    handleFirstRecipes();
  }, [])

  const handleFirstRecipes = async () => {
    try {
      const randomRecipes = await axios.get('/api/spoonacular');
      setRecipes(randomRecipes.data.recipes);
      console.log(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }


  const handleSearch = async (ingredients: string[]) => {
    try {
      const response = await axios.post('/api/spoonacular', { ingredients });
      setRecipes(response.data.recipes);
      console.log(recipes)
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