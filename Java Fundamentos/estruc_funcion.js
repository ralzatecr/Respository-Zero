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

Funcion anonima
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



-----------> ESTRUCTURA REPETITIVA FOR


var ruben = {
    nombre: 'Ruben',
    apellido: 'Alzate',
    edad : 28, 
    peso : 80
}

console.log(`Al inicio del año ${ruben.nombre} pesa ${ruben.peso} kg`);

const INCREMENTO_PESO  = 0.2;
const DIAS_DEL_ANO  = 365;

// function aumentarPeso(personal) {
//    return persona.peso += 200
// } //igual a lo siguiente
const aumnetaPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgaza = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random(); // numero entre 0 y 1, 

    if (random < 0.25) {
        //aumentaPeso
        aumnetaPeso(ruben);
    } else if (random < 0.5){
        //adelgaza   
        adelgaza(ruben);
    }
    
}

console.log(`Al final del año ${ruben.nombre} pesa ${ruben.peso.toFixed(1)} kg`);



-----------> ESTRUCTURA REPETITIVA WHILE

var ruben = {
    nombre: 'Ruben',
    apellido: 'Alzate',
    edad : 28, 
    peso : 80
}

console.log(`Al inicio del año ${ruben.nombre} pesa ${ruben.peso} kg`);

const INCREMENTO_PESO  = 0.2;
const DIAS_DEL_ANO  = 365;
const META = ruben.peso - 3;
var dias = 0;

// function aumentarPeso(personal) {
//    return persona.peso += 200
// } //igual a lo siguiente 
const aumnetaPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgaza = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

while (ruben.peso > META) {
    if (comeMucho()) {
        aumnetaPeso(ruben);
    } 
    if (realizaDeporte()) {
        adelgaza(ruben);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${ruben.nombre} adelgazo 3 kg`);



-----------> ESTRUCTURA REPETITIVA DO WHILE


var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++
} while (!llueve())


function razon() {
    if (contador > 1) {
        console.log(`Fui a ver si llovia ${contador} veces.`);
    } else {
        console.log(`Fui a ver si llovia 1 vez.`);
    }    
}

razon();


-----------> CONDICIONAL MULTIPLE SWITCH


var caballero = prompt('Cual es tu caballero del zodiaco?') // muestra mensaje al usuario

switch (caballero) {
    case 'mu':
        console.log(`Bienvenido caballero ${caballero} tu signo es Aries`);
        break;
    case 'Dohko':
        console.log(`Bienvenido caballero ${caballero} tu signo es Tauro`);
        break;
    default:
        console.log(`No eres bienvenido ${caballero} , el signo lo sabra tu madre.`);
    break;
}


Prueba conocimiento

var contrato = {
    nombre: 'Ruben', 
    cedula: 80,
    finicial: 01012020,
    ffinal: 31122020,
    sueldo: 100
}

const pagar = pagarpersona => pagarpersona.sueldo *= 30;

function imprimirPago(pagarpersona) {
    pagar(pagarpersona);
        console.log(`Salario correspondiente a ${pagarpersona.nombre} con cedula numero ${pagarpersona.cedula} es de ${pagarpersona.sueldo}`);
}
console.log(contrato.sueldo);
imprimirPago(contrato)
console.log(contrato.sueldo);

*/

