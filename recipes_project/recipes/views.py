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
        response = requests.get(f'https://api.spoonacular.com/recipes/complexSearch?query={query}&apiKey=429ea709e7c645b284bfd9fe58ce6013 ')
        return Response(response.json()['results'])

class FavoriteListView(generics.ListCreateAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)