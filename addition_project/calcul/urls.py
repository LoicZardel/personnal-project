from django.urls import path
from . import views
from .views import inscription_view
from .views import connexion_view


urlpatterns = [
    path('', views.addition, name='addition'),
    path('addition/', views.addition_api, name='addition_api'),
     path('inscription/', inscription_view),
       path('connexion/', connexion_view),
     
]
