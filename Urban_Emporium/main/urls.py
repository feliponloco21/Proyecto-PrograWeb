from django.urls import path
from .views import homeView, ZapaView, hombreView, redesView, LoginView, RegView, ProfileView, edit, delete

urlpatterns = [
    path('home/', homeView, name='home'),
    path('espzapa/', ZapaView, name='espzapa'),
    path('zapahombre/', hombreView, name='zapahombre'),
    path('redes/', redesView, name='redes'),
    path('registro/', RegView.as_view(), name='registro'),
    path('login/', LoginView.as_view(), name='login'),
    path('listar/', ProfileView.as_view(), name='listar'),
    path('ClienteEdit/<int:id_cliente>/', edit, name='ClienteEdit'),
    path('ClienteBorrar/<int:id_cliente>/', delete, name='ClienteBorrar'),
]