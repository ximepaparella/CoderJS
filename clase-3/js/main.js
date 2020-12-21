//PROGRAMA EN ARCHIVO JAVASCRIPT 
//DECLARACIÓN E INICIALIZACIÓN DE VARIABLE
var unMensaje = "HOLA CODER HOUSE";
//PRIMER SALIDA POR CONSOLA  
console.log("MENSAJE 1: "+unMensaje);
//ASIGNAR UN NUEVO VALOR A VARIABLE
unMensaje = "APRENDIENDO JS";
//SEGUNDA SALIDA POR CONSOLA  
console.log("MENSAJE 2: "+unMensaje);

function mostrarMensaje() {
    let segundoMensaje = "Soy Segundo Mensaje";
    console.log ("Mensaje " +unMensaje + " " + segundoMensaje);
}

var dias= ["Lunes" , "Martes" , "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i = 0 ; i < 7 ; i++) {
    console.log(i);
    esDomingo();

    esNumeroPar();
}

function esDomingo() {
    if (i == 6 ) {
        alert ("Feliz Domingo");
    }
}

function esNumeroPar() {
    if (i%2 == 0) {
        alert("El día " + dias[i] + " es un número par.");
    }
}

