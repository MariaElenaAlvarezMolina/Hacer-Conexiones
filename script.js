function cambio_nombre() {
    var nombre = document.querySelector('h1');
    console.log(nombre);
    nombre.innerText = "María Elena Álvarez";
}
function eliminar_usuario1() {
    var eliminar1 = document.querySelector('#Todd');
    console.log(eliminar1);
    eliminar1.remove();
}
function eliminar_usuario2() {
    var eliminar2 = document.querySelector('#Phil');
    console.log(eliminar2);
    eliminar2.remove();
}

var conexiones = document.querySelector('.connections-number');
var restar = 1
document.querySelector('.connections-number').innerText = 500;

function connections() {
    conexiones.innerText = parseInt(conexiones.innerText) - restar;
    console.log(conexiones.innerText);
}

var sumar = 1

function more_connections() {
    conexiones.innerText = parseInt(conexiones.innerText) + sumar;
    console.log(conexiones.innerText);
}