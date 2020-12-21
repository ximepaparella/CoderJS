//  PLANTILLA CLASE 05 II - OBJETOS
//DEFINICION DE LISTADOS DE PERSONAS Y EDADES
let listaPersonas = ["HOMERO","MARGE","LISA","BART","MAGGIE"];
var listaEdad = [39,36,8,10,1];
//FUNCION PARA OBTENER EL NOMBRE DEL PRODUCTO Y EL PRECIO
function obtenerPersona(indice){
    return listaPersonas[indice] + " - EDAD: "+ listaEdad[indice];
}
//SALIDA
//alert("LA PERSONA ES: "+ obtenerPersona(prompt("INGRESAR PERSONA (De 0 a 4)")));

class Cliente {
    constructor(nombre, apellido, edad, email, celular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = parseInt(edad);
        this.email = email;
        this.celular = celular;

        this.obtenerNombreCompleto = obtenerNombreCompleto;
}};

function obtenerNombreCompleto () {
    return this.nombre + " " + this.apellido;
};


function Servicio (nombre, precio, precioOferta) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.precioOferta = parseFloat(precioOferta);   
};


function Profesional (nombre, apellido, email , celular) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.email = email;
};

function Reserva () {
    this.servicio = Servicio.nombre;
    this.nombreCliente = Cliente.nombre;
    this.nombreProfesional = Profesional;
    this.precioAbonado = Servicio.precio;
    this.fecha = fecha;
    this.horario = horario;
    this.estadoPago = estadoPago;
    this.modoPago = modoPago;
};

var cliente = new Cliente ("Ximena", "Paparella", 33, "ximena@hotmail.com", "+5491155554444", obtenerNombreCompleto());
var servicio = new Servicio ("Limpieza Dental", 500, 350);
var profesional = new Profesional ("Maria", "Lopez","mlopez@dental.com", "+5491155554444");

console.log(cliente); 