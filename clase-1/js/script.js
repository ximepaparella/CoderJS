    //Mi Cuento interactivo
    alert("Hola, para comenzar te vamos a pedir ciertos datos.")
    var nombre = prompt ("Elije un nombre de sexo indistinto");
    var edad = prompt ("Elije un numero del uno al 100");
    var hobby = prompt ("Ingresa un hobby");
    var anio = prompt ("Ingresa el año actual");

    var historiaFinal = "Había una vez en el año " + anio + " un personaje muy especial, alegre y vivaz, con un nombre muy particular. ¿Cual es tu nombre?, mi nombre es " + nombre 
    + " y tengo " + edad + " años. Además te quería contar que no hay nada que me guste más que " + hobby + ".";
    alert (historiaFinal);