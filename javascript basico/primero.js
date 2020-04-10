
--------->DATOS

/*
    datos: en memoria, diferentes tipos de datos
    funciones: que se hace con la data
*/
/* Primitivos */
/*
40          valor tipo numero
"Ruben"     cadenas de texto
true        boolean
false       boolean
null        espacio reservado para un valor
undefined   espacio reservado para un valor, eviatarlo

Tipo objeto 
[1, 2, 3]           Array tipo otbjeto
{nombre: "Ruben"}    Valor tipo objeto

typeof palabra reservada para ver el tipo de dato 
var palabra reservada para crear variables

*/

--------->VARIABLES

//declarar
var nombre; /*objeto en memoria*/
//inicializar
nombre = "Ruben"; /*objeto en memoria*/

var elementos = ["computadora","celular"]; /* Igual para asignar valor */

elementos[1] /* trae el elemento "celular" del array*/

var persona = { /*Variable compleja */
    nombre: "Diego",
    edad: 30
};

persona;


--------->FUNCIONES

/* Funciones, sentencias para generar acciones con los datos
    grabados en variables */

//funciones declarativas
 //inicialliza un valor en la memoria.
function miFuncion(){
    return 3;
}
miFuncion();

//funciones de expresión o anonimas
//una variable que guarda una funcion.
var myCode = function(a,b){
    return a + b;
}
myCode();

function saludaEstudiante(estudiante){console.log(`Hola ${estudiante}`)}
/* la idea es leer una lista de estudiantes de una 
base dedatos y pasarla por la fucion para no hacerlo 
estudiante por estudiante */

function sumar(a,b){
    var resultado = a + b;
    return resultado;
    }

function sumar(a,b){
    return a + b;
    }


--------->SCOPE 
/* 
Scope global: contiene el todo 
            todas las variables todas las funciones

scope local: universo dentro del scope global 
            tiene acceso a lo declarado en el global
            main declara variable
            una funcion llama un parametro y usa la variable del main

*/

--------->HOISTING 

/* En JavaScript, las declaraciones (por ejemplo, de variables o funciones) 
se mueven al principio de su scope o ámbito. 
Este comportamiento se conoce como hoisting y es muy importante tenerlo 
en cuenta a la hora de programar para prevenir posibles errores.
Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
La declaración de las variables se mueven arriba del scope, 
pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla 

las variables y las funciones se declaran antes de cualquier codigo// hoisting

declara, inicializa, llamar
*/

/* En Variables  */
var miNombre;
miNombre = "Alzate";

var miNombre = undefined;
console.log(miNombre + "_salida");
miNombre = "Ruben";

/* En funciones 
igual se debe declarar primero variables y funciones para utilizarlas en el codigo mas adelante
*/


--------->COERSIÓN
/* Implicita: Cambiar un tipo de valor a otro tipo
de numero a cadena o de cadena a numero*/

var a = 4 + "7"; //interpreto 4 como cacena y junto los dos caracteres.
typeof a;

var b = 4 * "7"; //interpreto 7 como numero y sumo.
typeof b;


/*Explicita: nosotros cambiamos el tipo de valor a otro.*/

var a = 20; // obliga a la variable a convertirse en cadena.
var c = String(a);
typeof c;

var d = Number(c);// obliga a la variable a convertirse en numero.
typeof c;


--------->TRUTHY Y FALSY
/* que tipo de valor es verdadero y que tipo es falso. */
Boolean(); //vacio es falso

/* falsos: 0, null, undefined, NaN, false, string vacio, 
verdaderos: Funciones, Strings, numeros 1 en adelante, arrays, objetos, true
 */

--------->Operadores: Asignacion, Comparacion, Aritmeticos
/*
matematicos: +, -, *, /

asignacion: +, para concatenar.
            !, negacion, !false = verdadero
            =, asigna valores a variables

comparacion: == compara contenido 3 == "3"
             === tipos y valores deben ser iguales 3 === "3" 
             >
             <
             <=
             >=
             &&, a && b, si a y b son verdad se cumple
             ||, a || b, si a o b son verdad se cumple
             ++ incrementa en 1 un valor
             += 2, incremento en el numero indicado.
             */

--------->IF, ElSE
var edad = 18;
if(edad == 18){
    console.log("Vota");
} else if( edad > 18){
    console.log("Vota otra vez");
} else{
    console.log("No Vota");
}

/* operador terciario para escribir el if else en una sola linea. */
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si numero entero" : "No soy entero";
 



--------->SWITCH

var numero = '1';
switch(numero){
    //para validacion de casos
    case 1:
        console.log(" Soy le primer");
        break;
    case 2:
        console.log(" Soy diez");
        break;
    default:
        console.log("Vacio");
}/* 
sin el break salen todas la validaciones default no usa break */


--------->ARRAYS

/* estructura de datos, tipo objeto, valor que guarda valores */
var frutas = ["pera", "manzana", "naranja", "mora"];
console.log(frutas);


console.log(frutas[0]);

console.log(frutas.length); /* cuantos elementos tiene */

var masFruta = frutas.push("cereza"); /* añade elementos. */
var menosFruta = frutas.pop("mora"); /* elimina al final. */
var agreFruta = frutas.unshift("kiwi"); /* agrega al incio*/
var eliFruta = frutas.shift("kiwi"); /* elimina del inicio */
var posFruta = frutas.indexOf("cereza") /* Posicion del elemento */


--------->FOR 

var estudiantes = ["Maria","Sergio","Rosa","Daniel","Ruben"];

function saludarEstudiantes(persona){
    console.log(`Hola, ${persona}`);   
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
/******************************************/

--------->FOR...OF
var estudiantes = ["Maria","Sergio","Rosa","Daniel","Ruben"];

function saludarEstudiantes(persona){
    console.log(`Hola, ${persona}`);   
}

for(var persona of estudiantes){ //variable independiente de array en plural.
    saludarEstudiantes(persona);
}


--------->WHILE 
var estudiantes = ["Maria","Sergio","Rosa","Daniel","Ruben"];
function saludarEstudiantes(persona){
    console.log(`Hola, ${persona}`);   
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var persona = estudiantes.shift(); /* metodo de mutacion? sacando elemento del array*/
    saludarEstudiantes(persona);
}

--------->OBJETOS
var miAuto = {
    marca: "Toyota",
    modelo: "sonico",
    ano: 2020
};
miAuto
miAuto.marca


var miAuto = {
    marca: "Toyota",
    modelo: "sonico",
    ano: 2020, 
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.ano}`);
/*      this variable que hace referenci al objeto, miAuto */
    }
};

miAuto.detalleDelAuto();


--------->OBJETOS CONSTRUCTORES

var miAuto = {
    marca: "Toyota",
    modelo: "sonico",
    ano: 2020, 
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.ano}`);
    }
};

function auto(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo; 
    this.ano = ano;

}

var autoNuevo = new auto("Tesla", "Modelo 3", 2020);/* genera una instacia del constructor. objeto que deriva de otro objeto. */
var autoNuevo2 = new auto("Tesla", "Modelo X", 2021);
var autoNuevo3 = new auto("Mazda", "MZ 2", 2019);

Funcion crear mas de un objeto......

var personasArray= [];

function persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

/* Programa para crear varios objetos de mismo tipo 
pasando a un array */
var numeroPersonas = prompt('cuantas personas quieres hacer?');
if(numeroPersonas>0){
    for(var i=0;i<numeroPersonas;i++){
        var nombre = prompt('digite el nombre de la persona ' + i);
        var edad = parseInt(prompt('digite la edad de la persona '+i));
        var personita = new persona(nombre,edad);
        personasArray.push(personita);
}
}else{
    alert('no digito numero de personas valido')
}
console.log(personasArray);


--------->METODOS DE RECORRIDO DE ARRAYS
//No modifican el array original

var persona = [
    { cedula: 80, nombre: "Alzate", sueldo: 100 },
    { cedula: 81, nombre: "Cruz", sueldo: 200 },
    { cedula: 82, nombre: "Figueroa", sueldo: 300 },
    { cedula: 83, nombre: "Gomez", sueldo: 400 },
    { cedula: 84, nombre: "Triana", sueldo: 500 },
];
//Metodo 1. filter especifico array nuevo con el valor pedido
var empFiltrados = persona.filter(function (persona) {
    return persona.sueldo <= 300
})

//Metodo 2. map valores.
var empNombre = persona.map(function(persona) {
    return persona.nombre;
})

//metodo 3. find
var empEncuentra = persona.find(function(persona){
    return persona.nombre === "Alzate";
})

//metodo 4. for each filtrado sobre el array sin modificarlo
persona.forEach(function(persona){
    console.log(persona.cedula + persona.nombre);
});

//metodo 5 some, validacion verdad o falso
var empCosto = persona.some(function(persona){
    return persona.sueldo <= 400;
})

