//  PLANTILLA CLASE 08 - DOM
//  SECCION DE DECLARACION DE CLASE
class Producto{
    constructor(datos){
        this.id     = parseInt(datos.id);
        this.nombre = datos.nombre;
        this.precio = parseFloat(datos.precio);
    }
    sumarPrecio(agregado){
        this.precio += agregado;
    }
}
//  SECCION DE DECLARACION DE VARIABLES, CREANDO OBJETOS DESDE INFORMACION ESTATICA
let   productosSeleccionados = [];
const PREFIJO                = "productoID";  
//  SECCION DE GENERACION DE HTML DESDE DATOS ESTATICOS
//  OBTENER EL CONTENEDOR DONDE VAMOS A AGREGAR LOS NUEVOS ELEMENTOS 
let contenedorPadre = document.getElementById("contenidoGenerado");
//  AGREGAMOS UN NUEVO ELEMENTO AL HTML POR CADA REGISTRO DE DATO ESTATICO
for(let dato of DATOS){
  crearElemento(dato);
}
//  FUNCION PARA CREAR UN ELEMENTO DEL DOM
function crearElemento(dato){
  let nuevoElemento = document.createElement("div");
  nuevoElemento.id         = PREFIJO+dato.id;
  nuevoElemento.innerHTML  = "<h3 style='color:green' class='claseTitulo'>"+dato.nombre+"</h3><h4>$ "+dato.precio+"</h4>" ;
  contenedorPadre.appendChild(nuevoElemento);
}