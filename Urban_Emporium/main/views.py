from django.http import HttpResponse, HttpRequest
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.db import IntegrityError
from django.contrib.auth import authenticate, login
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import ClienteForm
from django.contrib.auth.forms import UserCreationForm

from django.views import View
from .models import Cliente

def homeView(request):
    return render(request, 'main/inicio.html')

def ZapaView(request):
    return render(request, 'main/espZapa.html')

def hombreView(request):
    return render(request, 'main/zapahombre.html')

def redesView(request):
    return render(request, 'main/redes.html')

def formView(request):
    return render(request, 'main/formulario.html')

def listar_clientes(request):
    clientes = Cliente.objects.all()
    return render(request, "main/listar_clientes.html", {"clientes": clientes})

class RegView(View):

    def get(self, request):
        return render(request, "main/registro.html")

    def post(self, request):
        nombre = request.POST.get('nombre')
        apellido_paterno = request.POST.get('apellido_paterno')
        apellido_materno = request.POST.get('apellido_materno')
        correo = request.POST.get('correo')
        usuario = request.POST.get('usuario')
        contrasena = request.POST.get('contrasena')
        confirmar_contrasena = request.POST.get('confirmar_contrasena')

        # Validación básica
        if not all([nombre, apellido_paterno, apellido_materno, correo, usuario, contrasena, confirmar_contrasena]):
            return render(request, "main/registro.html", {"mensaje": "Todos los campos son obligatorios."})

        if contrasena != confirmar_contrasena:
            return render(request, "main/registro.html", {"mensaje": "Las contraseñas no coinciden."})

        # Verificar si el correo ya está registrado
        if Cliente.objects.filter(correo=correo).exists():
            return render(request, "main/registro.html", {"mensaje": "El correo electrónico ya está registrado."})

        try:
            # Guardar cliente
            Cliente.objects.create(
                nombre=nombre,
                apellido_paterno=apellido_paterno,
                apellido_materno=apellido_materno,
                correo=correo,
                usuario=usuario,
                contraseña=contrasena
            )
            return render(request, "main/registro.html", {"mensaje": "Registro exitoso"})
        except IntegrityError as e:
            return render(request, "main/registro.html", {"mensaje": f"Error al registrar cliente: {str(e)}"})

class LoginView(View):

    def get(self, request):
        return render(request, "main/formulario.html")

    def post(self, request):
        usuario = request.POST.get('usuario')
        contrasena = request.POST.get('contrasena')

        # Autenticación del usuario
        cliente = Cliente.objects.filter(usuario=usuario, contraseña=contrasena).first()

        if cliente is not None:
            # El usuario es autenticado correctamente
            login(request, cliente)
            return redirect('home')
        else:
            # El usuario no existe o la contraseña es incorrecta
            messages.error(request, "Usuario o contraseña incorrectos.")
            return render(request, "main/formulario.html")

class ProfileView(LoginRequiredMixin, View):

    def get(self, request):
        cliente = Cliente.objects.filter(usuario=request.user.username).first()
        if cliente:
            context = {'cliente': cliente}
            return render(request, 'main/perfil.html', context)
        else:
            return render(request, 'main/perfil.html', {'mensaje': 'No se encontró el perfil del cliente.'})

class ProfileView(LoginRequiredMixin, View):
    
    def get(self, request):
        clientes = Cliente.objects.all()  # Obtener todos los clientes
        context = {
            'clientes': clientes
        }
        return render(request, 'main/perfil.html', context)

# Actualizar clientes
def edit(request, id_cliente):
    cliente = get_object_or_404(Cliente, id=id_cliente)
    if request.method == 'POST':
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            form.save()
            return redirect('listar')
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'main/ClienteEdit.html', {'form': form, 'cliente': cliente})


# Eliminar clientes
def delete(request, id_cliente):
    cliente = get_object_or_404(Cliente, pk=id_cliente)

    if request.method == 'POST':
        cliente.delete()
        return redirect('listar')
    else:
        # Aquí podrías agregar un mensaje de error o redirigir a otra página si no es POST
        return redirect('listar')