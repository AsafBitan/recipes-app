import React from 'react';

const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <p>No recipes found.</p>;
    }

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image}></img>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;