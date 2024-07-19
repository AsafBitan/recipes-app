from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    image = models.URLField
    instructions = models.TextField()
    ingredients = models.TextField()

    def __str__(self):
        return self.title
    
class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user.username} - {self.recipe.title}'