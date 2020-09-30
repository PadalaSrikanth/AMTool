from django.urls import path
from assets import views

urlpatterns = [
    path('login', views.login),
    path('validateuser', views.validate_user),
    path('dashboard', views.dashboard),
    path('home', views.home),
    path('aboutus', views.aboutus),
    path('saveorupdateasset', views.save_update_asset),
]