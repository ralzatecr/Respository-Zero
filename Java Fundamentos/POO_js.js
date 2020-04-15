//---------->Programación Orientada a Objetos en JavaScript

//NO HAY HERENCIA, hay prototipos que son relacionados a clases


//PARTE DE LO QUE SE HACE PARA LA HERENCIA QUE HAY
//todas las funciones tienen el atributo prototype
function heredaDE(prototipoHijo, protipoPadre) {
    //se crea un funcion dummy que no hace nada
    var fn = function () {};
    //se asigna la funcion el prototipo padre a la funcion dummy
    fn.prototype = protipoPadre.prototype;
    //el prototype del hijo es un nuevo objeto de la funcion dummy
    //el mismo codigo de arriba pero sin volver a usuar el prototype 
    //del padre otra vez pasandolo a otro objeto
    prototipoHijo.prototype = new fn;
    //se crea la funcion constructora
    prototipoHijo.prototype.constructor = prototipoHijo;
}

//definir un prototipo, se va requerir cuando se cree una nueva persona
//es lo que se conoce como un constructor.
function persona(g_nombre, g_apellido, g_altura) {
//this hace referencia al objeto que se acaba de construir
    this.nombre = g_nombre;
    this.apellido = g_apellido;
    this.altura = g_altura;
    return this;
}

/* persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`);
} */

persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`);
}

/* persona.prototype.alto = function (){
    if (this.altura >= 1.6) {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy alto ya que mido ${this.altura}`);
    }
} */

persona.prototype.alto = function() {
    if (this.altura >= 1.6) {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy alto ya que mido ${this.altura}`);
    }
}

/* persona.prototype.soyAlto = function (){
    return this.altura >= 1.6
} */
//si lo unico que hace la funcion es retornar algo se omiten corchetes y return
//en una arrow function "this" es parte de windonw el cual 
//es el objeto global en el navegador. y no local de la funcion
// por eso alli siempre se usara return
persona.prototype.soyAlto = function() {
    return this.altura >= 1.6;
}


//USANDO OTRO PROTIPO PARA HEREDAR YA QUE NO HAY HERENCIA DE CLARSES EN JAVASCRIP 
function desarrollador(g_nombre, g_apellido) {
    this.nombre = g_nombre;
    this.apellido = g_apellido;
}

//PARTE DE LO QUE SE HACE PARA HEREDAR
//hereda de la persona todos los metodos que sabe de la persona
heredaDE(desarrollador, persona)

desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`);
}




//new paralabra reservada de lenguaje, 
//new - prototipo, crea un objeto y se asigna el prototipo persona
//se ejecuta la funcion-constructor y se retorna el objeto persona

/* var yolanda = new persona('Yolanda', 'Cruz', 1.52);
var ruben = new persona('Ruben', 'Alzate', 1.73);
var angela = new persona('Angela', 'Gomez', 1.70);
var valeria = new persona('Valeria', 'Alzate Gomez', 1.02);
 */

 //yolanda.saludar();
//valeria.saludar();

//yolanda.alto();
//valeria.alto();
//angela.alto();
//ruben.alto();

//ruben.soyAlto();

//Otra forma:
/* persona.prototype.saludar2 = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, ${this.validarAltura()}`)
}

persona.prototype.validarAltura = function(){
    this.altura >1.6 ? altura=`creo que soy alto`: altura=`no soy tan alto`
    return altura
}
 */
//yolanda.saludar2();
//valeria.saludar2();
//angela.saludar2();
//ruben.saludar2(); 

// el prototipo es un objeto mas en javascript


