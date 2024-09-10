import React from 'react';

const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <p>No recipes found.</p>;
    }

    return (
        <div className='grid-container'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className='recipe-card'>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;

                <button key={recipe.id} className='recipe-card'>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title}/>
                    <p>{recipe.description}</p>
                </button>