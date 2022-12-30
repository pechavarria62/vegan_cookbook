# here is where the endpoins are written
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index )
]
