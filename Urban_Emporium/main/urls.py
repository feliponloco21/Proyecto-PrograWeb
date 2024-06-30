from django.urls import path
from .views import homeView, ZapaView, hombreView, redesView, LoginView, RegView, ProfileView

urlpatterns = [
    path('home/', homeView, name='home'),
    path('espzapa/', ZapaView, name='espzapa'),
    path('zapahombre/', hombreView, name='zapahombre'),
    path('redes/', redesView, name='redes'),
    path('registro/', RegView.as_view(), name='registro'),
    path('login/', LoginView.as_view(), name='login'),
    path('perfil/', ProfileView.as_view(), name='perfil'),
]