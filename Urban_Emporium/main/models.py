from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=50, default='Nombre')
    apellido_paterno = models.CharField(max_length=50, default='ApellidoPaterno')
    apellido_materno = models.CharField(max_length=50, default='ApellidoMaterno')
    correo = models.EmailField(unique=True)
    usuario = models.CharField(max_length=20)
    contraseña = models.CharField(max_length=30)

    def __str__(self):
        return f"Cliente: {self.usuario}"
