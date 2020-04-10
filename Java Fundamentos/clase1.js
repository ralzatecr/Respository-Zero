/* ------------>FUNCIONES STRING
var nombre = 'CarlosX', apellido = 'Montesco';
var nomMay = nombre.toUpperCase();
var nomMin = nombre.toLowerCase();
var priLet = nombre.charAt(2);
var canCar = nombre.length;
var nomCom = nombre + ' ' + apellido;
var nomComp = `${nombre.toUpperCase()} ${apellido}`; //comilla invertida
var parCad = `${nombre.substr(1,3)}`

console.log(nombre.charAt(nombre.length-1)); //ultima letra del nombre


------------>NUMEROS

var precioVino = 200.3

precioVino ++;
precioVino += 2;
precioVino -= 1;

console.log(`${precioVino}`);

var total = precioVino * 3;
console.log(`${total}`);

var total = Math.round(precioVino * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);

console.log(`${total}`);
console.log(`${totalStr}`);
console.log(`${total2}`);
 

------------>FUNCIONES
 var n ='Figueroa', e = 28;

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${n} años`);
}

imprimirEdad(n, e);
imprimirEdad('Carlos', 45);
imprimirEdad('Verjel', 21);
imprimirEdad('Mario', 20);
imprimirEdad('Alex', 30);

var nombre ='Figueroa', edad = 28;

function imprimirNombremay(lv_nombre) {
    lv_nombre = lv_nombre.toUpperCase();
    console.log(`${lv_nombre} ${edad}`);
    console.log(`${window.nombre}`);//variable global, ambito global
    
}

imprimirNombremay(nombre, edad);


------------>OBJETOS

var Dario = {
    nombre: 'Ruben Dario',
    apellido: 'Alzate Cruz',
    edad : 28
}

var Yolanda = {
    nombre: 'Yolanda Valeria',
    apellido: 'Cruz Figueroa',
    edad : 28
}

function imprimirNombremay(persona) {
    console.log(persona.nombre.toUpperCase());
}

imprimirNombremay(Dario);
imprimirNombremay(Yolanda);

function imprimirNombremay2({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombremay2(Dario);
imprimirNombremay2(Yolanda);

imprimirNombremay2({nombre: 'Memín'});


------------>DESESTRUCTURAR OBJETOS

var Dario = {
    nombre: 'Ruben Dario',
    apellido: 'Alzate Cruz',
    edad : 28
}

var Yolanda = {
    nombre: 'Yolanda Valeria',
    apellido: 'Cruz Figueroa',
    edad : 28
}

function imprimirNombremay(persona) {
//    var nombre = persona.nombre;
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hi soy ${nombre} y tengo ${edad} años`);
}

imprimirNombremay(Dario);
imprimirNombremay(Yolanda);

------------>PARAMETROS COMO REFERENCIA O COMO VALOR.

var Dario = {
    nombre: 'Ruben Dario',
    apellido: 'Alzate Cruz',
    edad : 28
}

var Yolanda = {
    nombre: 'Yolanda Valeria',
    apellido: 'Cruz Figueroa',
    edad : 28
}

function imprimirNombremay(persona) {
//    var nombre = persona.nombre;
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hi soy ${nombre} y tengo ${edad} años`);
}

imprimirNombremay(Dario);
imprimirNombremay(Yolanda);

function cumple(persona) { // paso del objeto por referencia
    return{
        ...persona, // desgloza a la persona 
        edad: persona.edad + 1  //y modifica su edad para presentar un objeto nuevo 
    }
}

//en consola: declara una funcion por expresion 
var darioMasviejo = cumple(Dario); // varible con funcion y paramatro dario;



------------>COMPARACIONES EN JAVASCRIPT


// comparacion de valores primitivos
var x = 4, y = '4';
// x == y comparacion de contenido igualando tipo true 
// x === y comparacion de contenido y tipo sin igualar false


// comparacion de objetos, referencia a la variaable utilizada.
var dario = {
    nombre: 'Dario'
}

var otroDario = {
    nombre: 'Dario'
}

var otroDario2 = otroDario;

//objeto literal 
var otroDario3 = {
    ...dario
}; // nuevo objeto desglozando los mismos atributos 
   // es otro espacio en memoria

var otroDario2 = otroDario;
otroDario.nombre = 'Juanjo' // modifica el nombre otrodario y otrodario2 porque son el mismo espacio en memoria?

//no pasa lo mismo con otroDario3

*/