//  PLANTILLA CLASE 06 - OBJETOS
//CREAMOS FUNCIÓN CONSTRUCTORA PERSONA

class Persona{
    constructor(nuevoNombre, nuevaEdad,nuevoDNI){
        this.nombre = nuevoNombre.toUpperCase();
        this.edad = parseInt(nuevaEdad);
        this.dni = parseInt(nuevoDNI);
    }
    validarNombre(nuevoNombre) {
        let nombreTrim = nuevoNombre.trim();
        if(nombreTrim.lenght > 2 ){
            this.nombre = nombreTrim.toUppercase();
        } else {
            alert("No es un nombre válido.")
        }
    }

    hola(){
        return "HOLA SOY "+this.nombre;
    }
}

//CREAMOS OBJETOS USANDO LA FUNCION CONSTRUCTORA
let persona1 = new Persona("HOMERO", "39", 12365478);
let persona2 = new Persona("MARGE","36",12445365);

console.log(persona1);
console.log(persona2.hola());