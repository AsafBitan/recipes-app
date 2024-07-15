from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Recipe, Favorite
from .serializers import RecipeSerializer, FavoriteSerializer
import requests

# Create your views here.

class RecipeSearchView(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        query = request.query_params.get('query')
        response = request.get(f'https://api.spoonacular.com/recipes/complexSearch?query={query}&apiKey=YOUR_API_KEY')
        return Response(response.json()['results'])

class FavoriteListView(generics.ListCreateAPIView):
    queryset = Favorite.object.all()
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)