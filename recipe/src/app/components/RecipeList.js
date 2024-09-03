import React from 'react';

const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <p>No recipes found.</p>
    }

    return (
        <div className='mt-4'>
            {recipes.map((recipe, index) => (
            <div key={index} className='p-4 mb-4 border rounded shadow'>
                <h3 className='text-lg font-bold'>{recipe.name}</h3>
                <p>{recipe.description}</p>
            </div>
        ))}
        </div>
    )
}

export default RecipeList;