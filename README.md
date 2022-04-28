# 16BoostrapYValidaciones

## 1.Parte 1. Investigación
Crea una presentación de bootstrap que solvente las siguientes cuestiones:

### ¿Qué es Bootstrap?
Bootsrap es un framework front-end gratuito para un desarrollo web más rápido y facil.
Incluye clases y funcionalidades agrupadas en forma de componentes.

### ¿Para qué sirve?
Bootstrap incluye plantillas de diseño basadas en HTML y CSS para tipografía,formulario, botones, tablas, navegación, modales, carruseles de imágenes y muchos otros, así como complementos de JavaScript opcionales.

Bootstrap también brinda la capacidad de crear fácilmente diseños adaptables.

### ¿Por qué usar Bootstrap?
Bootstrap es fácil de usar, cualquier persona con conocimiento básico de HTML y CSS puede comenzar a usar Bootstrap.
También facilita realizar webs de diseño agradable más rápidamente.

### Características de Bootstrap
* Incluye muchas clases y componentes predefinidos
* Está diseñado mobile-first
* Es fácil elaborar webs adaptables (responsive)

### Ventajas de usar bootstrap
* Es adaptable: el CSS receptivo de Bootstrap se ajusta a teléfonos, tabletas y computadoras de escritorio.
* En Bootstrap, los estilos móviles primero son parte del marco central.
* Bootstrap 5 es compatible con todos los navegadores modernos (Chrome, Firefox, Edge, Safari y Opera).

### Desventajas de usar bootstrap
* Se recomienda trabajar con Bootstrap desde el inicio de un proyecto, ya que si quieres incluir el framework en un trabajo ya iniciado algunos estilos podrían "romperse" y se tendría que ajustar a como se tenía en un principio, y eso puede ser un poco tedioso y molesto.
* Es complicado cambiar de versión si has realizado modificaciones profundas.
* No es ligero, y además, para algunas funcionalidades, será necesario tener que usar JavaScript.
* Debes adaptar tu diseño a un grid de 12 columnas, que se modifican según el dispositivo.Aquí empiezan los problemas, Bootstrap por defecto te trae anchos, márgenes y altos de línea, y realizar cambios específicos.

### Cómo instalar o implementar bootstrap en mi proyecto
* Puedes incluir Bootstrap 5 desde un CDN o descargar Bootstrap 5 desde getbootstrap.com.
*  añadimos entre las etiquetas head el CSS de Bootstrap y antes de carrar la etiqueta body los scripts que necesitamos. Estos scripts los podríamos poner también entre las etiquetas head después del archivo CSS. Pero lo ponemos así para que primero se cargue el HTML y luego los scripts mejorando el tiempo de carga de la pagina web.

Ejemplo de:
https://www.w3schools.com/bootstrap5/bootstrap_get_started.php
```
 <!-- Latest compiled and minified CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
```

### ¿Se puede implementar responsive con Bootstrap? Si es así podrías explicar como funciona y poner un ejemplo
https://getbootstrap.com/docs/5.1/layout/breakpoints/

BS utiliza variantes de las clases con breakpoints para poder ajustar la visibilidad, las dimensiones y las posiciones de los elementos según la anchura actual de la pantalla.

Ejemplos de:
https://www.w3schools.com/bootstrap5/bootstrap_grid_examples.php

```
<!-- 50%/50% split on extra small devices and 75%/25% split on larger devices -->
<div class="row">
  <div class="col-6 col-sm-9">col-6 col-sm-9</div>
  <div class="col-6 col-sm-3">col-6 col-sm-3</div>
</div>

<!-- 58%/42% split on extra small, small and medium devices and 66.3%/33.3% split on large and xlarge devices -->
<div class="row">
  <div class="col-7 col-lg-8">col-7 col-lg-8</div>
  <div class="col-5 col-lg-4">col-5 col-lg-4</div>
</div>

<!-- 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large and xlarge devices. On extra small devices, it will automatically stack (100%) -->
<div class="row">
  <div class="col-sm-3 col-md-6 col-lg-4">col-sm-3 col-md-6 col-lg-4</div>
  <div class="col-sm-9 col-md-6 col-lg-8">col-sm-9 col-md-6 col-lg-8</div>
</div>
```

### ¿Qué es un componente de bootstrap?Pon un ejemplo
* Los componentes de Bootstrap no son más que pedazos de código ya programados que podemos insertar un nuestros proyectos.
* Por ejemplo:menú de navegación, carousels y tablas de preios, etc..
* En su página oficial puedes encontrar:https://getbootstrap.com/docs/5.1/components/

-----------------------------------------------------

### ¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos
### ¿Cuáles son los diferentes tipos de botones en bootstrap? Pon ejemplos.
### ¿Que es un Carousel de bootstrap? Pon un ejemplo
### ¿Que es un spinner de bootstrap? Pon un ejemplo
### ¿Que es un navBar de bootstrap? Pon un ejemplo
### ¿Que es un modal de bootstrap? Pon un ejemplo
### Existen inputs para subir archivos en Bootstrap? Pon un ejemplo
### ¿Qué es un plugin scrollspy en Bootstrap?Pon un ejemplo

* Extra
* Implementa nuevos puntos sobre bootstrap que hayas descubierto durante tu investigación y creas que son importantes

## Parte 2. Práctica Bootstrap & Validaciones
Crea la siguiente página utilizando bootstrap que cumpla los siguientes requisitos:
Implementa un NavBar con el que puedas moverte por las 2 vistas de la página
* Crea la vista Crear Usuario que contenga lo siguiente
*  Formulario con los siguientes campos
    *  Nombre
    *  Correo
    *  Contraseña 1
    *  Contraseña 2
*  Guarda la información recogida de cada uno de los usuarios en localStorage
*  Implementa validación que obligue a rellenar todos los campos
*  Implementa una validación para el correo
*  Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2
*  Implementa una validación de contraseña
*  Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca
*  Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
*  Muestra los mensajes utilizando los alerts de bootstrap
* Crea la vista Usuarios la cual debe mostrar en cards de bootstrap los usuarios guardados en localStorage con los siguientes campos:
*  Nombre
*  Correo

