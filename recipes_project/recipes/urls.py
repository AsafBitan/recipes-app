from django.urls import path
from .views import RecipeSearchView, FavoriteListView

urlpatterns = [
    path('search/', RecipeSearchView.as_view(), name='recipe-search'),
    path('favorites/', FavoriteListView.as_view(), name='favorite-list'),
]