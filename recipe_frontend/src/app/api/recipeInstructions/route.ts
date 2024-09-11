import { NextResponse } from 'next/server';
// import recipes from '../../../../data/recipes.json';
import axios from "axios";
 
const url = process.env.RECIPEAPI;
const key = process.env.APIKEY;

export async function GET(request: Request) {
    const url = new URL(request.url);
    const recipeId = url.searchParams.get('recipeId');

    if (!recipeId){
        return NextResponse.error();
    }

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?${key}`,{
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
