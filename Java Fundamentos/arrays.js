
//-----------> ARRAYS, arreglos
//agrupar datos dentro de una coleccion para realizar acciones sobre ellos

var ruben = {
    nombre: 'Ruben', 
    apellido: 'Alzate',
    altura: 1.72,
    cantidadLibros: 12
}

var angela = {
    nombre: 'Angela', 
    apellido: 'Gomez',
    altura: 1.70,
    cantidadLibros: 45
}

var yolanda = {
    nombre: 'Yolanda', 
    apellido: 'Cruz',
    altura: 1.52,
    cantidadLibros: 32
}

var valeria = {
    nombre: 'Valeria', 
    apellido: 'Alzate Gomez',
    altura: 1.02,
    cantidadLibros: 10
}

var personas = [ruben, angela, yolanda, valeria]

/*
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts`);
}

-----------> FILTRAR ARRAYS 

//const esAlta = (persona) => {
//    return persona.altura > 1.6;
//}
//const esAlta = persona => persona.altura > 1.6;
const esAlta = ({ altura }) => altura > 1.6;
const esBaja = ({ altura }) => altura <= 1.6;

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// va a iterarar el array poniendo cada persona en la funcion esAlta
// devuelve un nuevo array con los datos filtrados.
// se puede encontrar asi:
// var personasAltas = personas.filter(function (persona) {
//    return persona.altura > 1.6;  
//})

console.log(personasAltas);
console.log(personasBajas);



-----------> TRANSFORMAR UN ARRAY


//const pasarAlturaCms = persona => {
    //*persona.altura *= 100; // asi se modifica el array original
    //*return persona;
//    return{
//        ...persona,
//        altura: persona.altura * 100 // asi modifica otro array con la informacion del inicial.
//    }
//}

const pasarAlturaCms = persona => ({
        ...persona,
        altura: persona.altura * 100
}) //Recibe persona la deslosa en un nuevo objeto y modifica el atributo altura

var personasCms = personas.map(pasarAlturaCms)
//funcion MAP, devolver nuevo array modificando los atributos 
//que se pasen del array original
console.log(personasCms);


-----------> RECIBIR UN ARRAY Y UN VALOR
*/

//1.
//var acum = 0;
//for (var i = 0; i < personas.length; i++) {
//    acum = acum + personas[i].cantidadLibros;
//}

//const reducer = (acum, persona) => {
//    return acum + persona.cantidadLibros;
//}

const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros;

var totalLibros = personas.reduce(reducer, 0)
//reducir el array de personas a un total

//1. console.log(`Todos tienen ${acum} libros`);
console.log(`Todos tienen ${totalLibros} libros`);