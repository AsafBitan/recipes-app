"use client";
import React, { useState, useEffect } from "react";
import IngredientInputForm from "./components/IngredientInputForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() =>{
    handleFirstRecipes();
  }, [])

  const handleFirstRecipes = async () => {
    try {
      setLoading(true);
      const randomRecipes = await axios.get('/api/spoonacular');
      setRecipes(randomRecipes.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false); 
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
       {loading? 
        (<p>Loading...</p>
        ): (
        <RecipeList recipes={recipes} />
      )}
      {/* <RecipeList recipes={recipes} /> */}
    </div>
  );
}