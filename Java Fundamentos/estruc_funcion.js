/*
----------->CONDICIONALES

var ruben = {
    nombre: 'Ruben',
    apellido: 'Alzate',
    edad : 28 ,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    guitarrista: false, 
    drone: true
}

function imprimirProfesion(persona) {
    console.log(`${persona.nombre} es:`);

//    if (persona.ingeniero === true) { No es necesario la comparacion ya que ingeniero es un atributo true.
    if (persona.ingeniero) {
        console.log(`Ingeniero`); 
    }else{
        console.log(`No es Ing`); 
    }

    if (persona.cocinero) {
        console.log(`Cocinero`); 
    }
    if (persona.cantante) {
        console.log(`Cantante`); 
    }
    if (persona.drone) {
        console.log(`Piloto de Drone`); 
    }

}

imprimirProfesion(ruben);

//---------------------------------------
----------->FUNCIONES Y DEVOLVER DATOS
var ruben = {
    nombre: 'Ruben',
    apellido: 'Alzate',
    edad : 28
}

var angela = {
    nombre: 'Angela',
    apellido: 'Gomex',
    edad : 16
}

const MAYORIA_EDAD = 18;
//var mayoriaEdad

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_EDAD; // retorna un parametro.
}

function imprimirProfesion(persona) {
    console.log(`${persona.nombre} es:`);
//    if (persona.ingeniero === true) { No es necesario la comparacion ya que ingeniero es un atributo true.
//    if (persona.edad >= 18) {
    if ( esMayorDeEdad(persona)) { // recibe el parametro de la funcion
        console.log(`Si es Mayor de edad`); 
    }else{
        console.log(`Si Es menor de edad`); 
    }
}

imprimirProfesion(ruben);
imprimirProfesion(angela);


----------->ARROW FUNCTION
*/


var ruben = {
    nombre: 'Ruben',
    apellido: 'Alzate',
    edad : 28
}

var angela = {
    nombre: 'Angela',
    apellido: 'Gomex',
    edad : 16
}

const MAYORIA_EDAD = 18;

/*Funcion anonima
//forma 1
const esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_EDAD; // retorna un parametro.
}

// Forma 2 
const esMayorDeEdad = persona => { 
    return persona.edad >= MAYORIA_EDAD; // retorna un parametro.
    // cuando solo hay un parametro se pueden elimnar los parentesis.
}

// Forma 3 - Arrow function
const esMayorDeEdad = persona => persona.edad >= MAYORIA_EDAD;
//funcion en una constante validando si la edad de la persona es mayor a 18 
//para determinar mayoria de edad.
*/

// Forma 4 - Arrow function
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD;
// desestructurar el parametro ya que solo interesa la edad de la persona 
// pasar un objeto que tiene una edad, valida si esa edad es mayor a la mayoria de edad.

function imprimirProfesion(persona) {
    console.log(`${persona.nombre} es:`);
    if ( esMayorDeEdad(persona)) { // recibe el parametro de la funcion
        console.log(`Si es Mayor de edad`); 
    }else{
        console.log(`Si Es menor de edad`); 
    }
}

imprimirProfesion(ruben);
imprimirProfesion(angela);

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)){// ! niega la condicion que siga.
        console.log('Acceso denegado');
    }else{
        console.log('Bienvenid@');
        
    }
}

const esMenorDeEdad = ({ edad }) => edad => !esMayorDeEdad({ edad });

function permitirAcceso2(persona) {
    if(esMenorDeEdad(persona)){// ! niega la condicion que siga.
        console.log('Acceso denegado 2');
    }else{
        console.log('Bienvenid@ 2');
        
    }
}

