"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const RecipeList = ({ recipes }) => {
    const router = useRouter();

    const handleRecipeClick = async (recipeId) => {
        router.push(`/recipes/${recipeId}`);
    }    

    if (!recipes.length) {
        return <p>No recipes found.</p>;
    }

    return (
        <div className='grid-container'>
            {recipes.map((recipe) => (
                <button
                key={recipe.id}
                className='recipe-card'
                onClick={() => handleRecipeClick(recipe.id)}
                >
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.description}</p>
                </button>
            ))}
        </div>
    );
};

export default RecipeList;



