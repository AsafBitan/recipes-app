import { NextResponse } from 'next/server';
// import recipes from '../../../../data/recipes.json';
import axios from "axios";
 
const url = process.env.RECIPEAPI;
const key = process.env.APIKEY;

export async function GET() {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?${key}`,{
      params:{
        number: 10,
      }
    })
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching recipe data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
      const { ingredients } = await request.json();

      if (!Array.isArray(ingredients)) {
        return NextResponse.json({ error: 'Ingredients should be an array' }, { status: 400 });
      }

      const response = await axios.get(`${url}`,{
        params:{
          ingredients: ingredients.join(','),
          number: 10,
          ignorePantry: true,
        },
      });

        return NextResponse.json({ recipes: response.data });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
    }
}


// export async function POST(request: Request) {
//   try {
//       const { ingredients } = await request.json();

//       if (!Array.isArray(ingredients)) {
//           return NextResponse.json({ error: 'Ingredients should be an array' }, { status: 400 });
//       }

//       const matchedRecipes = recipes.filter((recipe) =>
//           recipe.ingredients.every((ingredient: string) =>
//               ingredients.map((ing) => ing.toLowerCase()).includes(ingredient.toLowerCase())
//             )
//       );

//       return NextResponse.json({ recipes: matchedRecipes });
//   } catch (error) {
//       console.error('Error processing the POST request:', error);
//       return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
//   }
// }
