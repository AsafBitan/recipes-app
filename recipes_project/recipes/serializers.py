from rest_framework import serializers
from .models import Recipe, Favorite

class ResipeSerializer(serializers.ModelSerializer):
    class Meta:
        modle = Recipe
        fields = '__all__'

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        modle = Favorite
        fields = '__all__'

