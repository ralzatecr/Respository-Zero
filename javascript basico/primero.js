
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
 



