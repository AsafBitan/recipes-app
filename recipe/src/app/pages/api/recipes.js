import recipes from '.../.../data/recipes.json'

export default function handler(req, res) {
    const { ingredients } = req.body;
    const matchedRecipes = recipes.filter((recipe) => 
        ingridients.every((ingredient) =>
        recipe.ingredients.includes(ingredient.toLowerCase())
        )
    );

    res.status(200).json({ recipes: matchedRecipes });
}