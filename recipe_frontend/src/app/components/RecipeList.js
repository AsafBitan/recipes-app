import React from 'react';

const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <p>No recipes found.</p>;
    }

    return (
        <div>
            {recipes.map((recipe, index) => (
                <div key={index}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;