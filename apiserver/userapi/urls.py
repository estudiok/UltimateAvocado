from django.urls import path
from . import views


urlpatterns = [
    path('', views.getUsers, name='getusers'),
    path('getuser', views.getUser, name='getuser'),
    path('insertuser', views.insertUser, name='insertuser'),
    path('imageupload', views.imageUpload, name='imageupload'),
    path('getimages', views.getImages, name='getimages')
]