import { NextResponse } from 'next/server';
import recipes from '../../../../data/recipes.json';

export async function GET() {
    return NextResponse.json(recipes);
}

export async function POST(request: Request) {
    try {
        const { ingredients } = await request.json();

        if (!Array.isArray(ingredients)) {
            return NextResponse.json({ error: 'Ingredients should be an array' }, { status: 400 });
        }

        const matchedRecipes = recipes.filter((recipe) =>
            recipe.ingredients.every((ingredient: string) =>
                ingredients.map((ing) => ing.toLowerCase()).includes(ingredient.toLowerCase())
              )
        );

        return NextResponse.json({ recipes: matchedRecipes });
    } catch (error) {
        console.error('Error processing the POST request:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
