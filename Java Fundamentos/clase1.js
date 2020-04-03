/* Funciones con string */
var nombre = 'CarlosX', apellido = 'Montesco';
var nomMay = nombre.toUpperCase();
var nomMin = nombre.toLowerCase();
var priLet = nombre.charAt(2);
var canCar = nombre.length;
var nomCom = nombre + ' ' + apellido;
var nomComp = `${nombre.toUpperCase()} ${apellido}`; //comilla invertida
var parCad = `${nombre.substr(1,3)}`

console.log(nombre.charAt(nombre.length-1)); //ultima letra del nombre


/* Numeros */

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