from django.urls import path
from . import views

urlpatterns=[
    path('',views.NewUser.as_view() ),
    path('my/',views.MyProjectsView.as_view() ),
    path('my/editor/',views.OpenCurrentProject.as_view() ),
    path('my/new/',views.NewProject.as_view() ),
]