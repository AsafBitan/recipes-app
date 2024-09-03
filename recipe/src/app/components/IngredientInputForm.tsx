import React from 'react';
import { useState } from 'react';


interface IngredientInputFormProps {
    onSearch: (ingredients: string[]) => void;
}

const IngredientInputForm: React.FC<IngredientInputFormProps> = ({ onSearch }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(ingredients.split(',').map((ing) => ing.trim()));
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-field"
                placeholder="Enter ingredients, separated by commas"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Find Recipes
            </button>
        </form>
    );
};
export default IngredientInputForm;