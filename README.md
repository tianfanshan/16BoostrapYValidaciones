# 16BoostrapYValidaciones

## 1.Parte 1. Investigación
Crea una presentación de bootstrap que solvente las siguientes cuestiones:
### ¿Qué es Bootstrap?
    *Bootsrap es un marco front-end gratuito para un desrrollo web más rápido y facil.

### ¿Para qué sirve?
    *Bootstrap incluye plantillas de diseño basadas en HTML y CSS para tipografía,formulario, botones, tablas, navegación, modales, carruselles de imágenes y muchos otros, así como complementos de JacaScript opcionales.
    *Bootstrap también le brinda la capacidad de crear fácilmente diseños receptivos.
### ¿Por qué usar Bootstrap?
    *Bootstrap es fácil de usar, cualquier persona con conocimiento básico de HTML y CSS puede comenzar a usar Bootstrap.
### Características de Bootstrap
    *
### Ventajas de usar bootstrap
    *Tiene uns gran funcion receptiva: el CSS receptivo de Bootstrap se ajusta a teléfonos, tabletas y computadoras de escritorio.
    *En Bootstrap, los estilos móviles primero son parte del marco central.
    *Bootstrap 5 es compatible con todos los navegadores modernos (Chrome, Firefox, Edge, Safari y Opera).Tenga en cuenta que si necesita soporte para IE11 y versiones anteriores, debe usar BS4 0 BS3.
*Desventajas de usar bootstrap
    *Se recomienda trabajar con Bootstrap desde el inicio de un proyecto, ya que si quieres incluir el framework en un trabajo ya iniciado algunos estilos podrían "romperse" y se tendría que ajustar a como se tenia en un principio, y eso puede ser un poco tedioso y molesto.
    *Es complicado, cambiar de versión si has realizado modificaciones profundas.
    *No es ligero, y además, para algunas funcionalidades, será necesario tener que usar JavaScript.
    *Debes adaptar tu diseño a un grid de 12 columnas, que se modifican según el dispositico.Aquí empiezan los problemas, Bootstrap por defecto te trae anchos, márgenes y altos de línea, y realizar cambios específicos.
### Como instalar o implementar bootstrap en mi proyecto
    *Puedes incluir Bootstrap 5 desde un CDN o descargar Bootstrap 5 desde getbootstrap.com.
### ¿Se puede implementar responsive con Bootstrap? Si es asi podrías explicar como funciona y poner un ejemplo
    *Se puede, añadimos entre las etiquetas head el CSS de Bootstrap y antes de carrar la etiqueta body los scripts que necesitamos. Estos scripts los podríamos poner también entre las etiquetas head después del archivo CSS. Pero lo ponemos así para que primero se cargue el HTML y luego los scripts mejorando el tiempo de carga de la pagina web.
       <!DOCTYPE html>
        <html>
            <head>
                <title>Ejemplo Grid</title>
                <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
            </head>
            <body>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
            </body>
        </html>
### ¿Que es un componente de bootstrap?Pon un ejemplo
    *Los componentes de Bootstrap no son más que pedazos de código ya programados que podemos insertar un nuestros proyectos.
    *Por ejemplo:menú de navegación, carousels y tablas de preios, etc..
    *En su página oficial puedes encontrar:https://getbootstrap.com/docs/4.4/examples/

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

