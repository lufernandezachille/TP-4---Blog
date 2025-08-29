from django.urls import path
from portfolio import views

urlpatterns = [
    path('', views.home, name='portfolio_home'),
]