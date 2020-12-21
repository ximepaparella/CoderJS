//PROGRAMA EN ARCHIVO JAVASCRIPT 
alert("BIENVENIDOS A LA PLANTILLA N° 2");

//Solicito un números
var numero = prompt("Por favor ingresar un Número");
// Me aseguro que el valor se convierta a numérico ya que el promt recibe strings.
numero = parseInt(numero);

if (numero > 1000) {
    alert("El número ingresado es mayor a 1000.");
} else if ((numero >= 10) && (numero <=50)) {
    alert ("El numero ingresado está entre 10 y 50.");
} else {
    alert ("El número indicado no corresponde a ninguna de nuestras definiciones.")
};

//Solicito un texto mediante prompt.
var texto = prompt("Con que palabra saludan en tu idioma?");

if (texto == "Hola") {
    alert("Hola, nosotros también hablamos español.");
} else {
    alert("Nuestro robot no pudo detectar tu idioma correctamente. Hola, Hello, Bonjour, Ciao!" );
};