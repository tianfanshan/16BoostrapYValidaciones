# 16BoostrapYValidaciones

## 1.Parte 1. Investigación
Crea una presentación de bootstrap que solvente las siguientes cuestiones:
* ¿Qué es Bootstrap?¿Para qué sirve?
* ¿Por qué usar Bootstrap?
* Características de Bootstrap
* Ventajas y desventajas de usar bootstrap
* Como instalar o implementar bootstrap en mi proyecto
* ¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar como funciona y poner un ejemplo
* ¿Que es un componente de bootstrap?Pon un ejemplo
* ¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos
* ¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.
* ¿Que es un Carousel de bootstrap? Pon un ejemplo
* ¿Que es un spinner de bootstrap? Pon un ejemplo
* ¿Que es un navBar de bootstrap? Pon un ejemplo
* ¿Que es un modal de bootstrap? Pon un ejemplo
* Existen inputs para subir archivos en Bootstrap? Pon un ejemplo
* ¿Qué es un plugin scrollspy en Bootstrap?Pon un ejemplo

* Extra
* Implementa nuevos puntos sobre bootstrap que hayas descubierto durante tu investigación y creas que son importantes

## Parte 2. Práctica Bootstrap & Validaciones
Crea la siguiente página utilizando bootstrap que cumpla los siguientes requisitos:
Implementa un NavBar con el que puedas moverte por las 2 vistas de la página
* Crea la vista Crear Usuario que contenga lo siguiente
    * Formulario con los siguientes campos
        * Nombre
        * Correo
        * Contraseña 1
        * Contraseña 2
    * Guarda la información recogida de cada uno de los usuarios en localStorage
    * Implementa validación que obligue a rellenar todos los campos
    * Implementa una validación para el correo
    * Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2
    * Implementa una validación de contraseña
    * Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca
    * Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
    * Muestra los mensajes utilizando los alerts de bootstrap
* Crea la vista Usuarios la cual debe mostrar en cards de bootstrap los usuarios guardados en localStorage con los siguientes campos:
    * Nombre
    * Correo

