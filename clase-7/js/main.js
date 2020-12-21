//  PLANTILLA CLASE 07 - STORAGE Y JSON
//  SECCION DE DECLARACION DE CLASE
class Producto{
    constructor(nuevoID, nuevoNombre,nuevoPrecio){
        this.id     = parseInt(nuevoID);
        this.nombre = nuevoNombre;
        this.precio = parseFloat(nuevoPrecio);
    }

    sumarPrecio(agregado){
        this.precio += agregado;
    }
}
//  SECCION DE DECLARACION DE VARIABLES
let listaProductos = [];
let entradaUsuario = prompt("OPCION (1) CREAR PRODUCTO");
//  PROCESO PRINCIPAL
if(entradaUsuario === "1"){
    listaProductos.push(    );
    console.log(listaProductos);
}
