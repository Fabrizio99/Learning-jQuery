# Learning-jQuery
jQuery es una librería de JavaScript que simplifica enormemente la programación en JavaScript.

jQuery posee las siguientes características:
- Manipulación del HTML/DOM.
- Manipulación del CSS.
- Métodos de eventos HTML.
- Efectos y animaciones.
- AJAX.
- Utilidades.

## Sintaxis
La sintaxis de jQuery esta hecha para seleccionar elementos HTML y realizar acciones sobre ellos.
```JavaScript
$(selector).action()
```
El `$` hace referencia a jQuery (sería lo mismo si escribimos `jQuery`),

## Evento ready
Este evento es útil para evitar que cualquier código de jQuery se ejecute antes de que el documento haiga finalizado en cargarse.
```JavaScript
$(document).ready(function () {
    
});
```
También existe una manera abreviada de usar este evento.
```JavaScript
$(function() {
    
})
```
## Selectores
### Selector id
```JavaScript
$('#red')
//Ejemplo
$(document).ready(function () {
    $('#red').css('background-color', 'red');
});
```
### Selector clase
```JavaScript
$('.text')
// Ejemplo
$('.text').css('font-weight','bold').click(function (e) { 
    e.preventDefault();
    $(this).css('display','none')
});
```
**NOTA:** El método eq() nos permite acceder a un elemento especifico del conjunto de elementos que nos retorna un selector.
```Javascript
$('.text').eq(0)    // podremos acceder al primer elemento de un conjunto de elementos que poseen la clase text
```
### Selector etiqueta
```JavaScript
$('p')
// Ejemplo
$('p').click(function () { 
    if(!$(this).hasClass('grande')){
        $(this).addClass('grande');
    }else{
        $(this).removeClass('grande');
    }
});
```
### Selector atributos
```JavaScript
$('[title="google"]').css('background-color','blue').css('color','grey')
$('[title="youtube"]').css('background-color','red').css('color','white')
```
