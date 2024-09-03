import React, { useState } from 'react';

interface IngredientInputFormProps {
    onSearch: (ingredients: string[]) => void;
}

const IngredientInputForm: React.FC<IngredientInputFormProps> = ({ onSearch }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(ingredients.split(',').map(ing => ing.trim()));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter ingredients, separated by commas"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button type="submit">Find Recipes</button>
        </form>
    );
};

export default IngredientInputForm;