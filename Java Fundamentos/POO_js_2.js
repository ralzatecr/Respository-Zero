//Clases en Java Script

class Persona{
    //existe la clase persona con un constructor que se va 
    //a ejecutar cuando se creen ojbetos de esta clase
    constructor(g_nombre, g_apellido, g_altura) {
    //this hace referencia al objeto que se acaba de construir
        this.nombre = g_nombre;
        this.apellido = g_apellido;
        this.altura = g_altura;
    }
    //fn es una funcion opcional aveces viene a veces no.
    saludar(fn){
        //desestructurar para quitar el this en otros lados de la funcion.
        // var l_nombre = this.nombre;
        // var l_apellido = this.apellido;
        // var l_altura = this.altura;

        //otra forma
        var { nombre, apellido, altura } = this;

        console.log(`Hola, me llamo ${nombre} ${apellido} y mido ${altura}`);
//0 false, null false, 
//objeto true, array true, string true
//si no pasan nada en la fucion, es false. undefine
        if (fn) {
            //false porque no es Dev la persona
            //se puede omitir el parametro false, para que sea false
            fn(nombre, apellido, false);
        }
    }

    soyAlto(){
        return this.altura >= 1.6;
    }

}

// Herencia en js se llama extencion
class Desarrollador extends Persona{
    constructor(g_nombre, g_apellido, g_altura) {
        //llamada al prototypo o clase padre.
        super(g_nombre, g_apellido, g_altura);
    }

    saludar(fn){
        var { nombre, apellido, altura } = this;
        console.log(`Hola, me llamo ${nombre} y soy desarrollador`);
        if (fn) {
            //True porque si es desarrollador
            fn(nombre, apellido, true);
        }
    }
}

//---------------->FUNCIONES CON PARAMETROS
// se crea la funcion con parametros, y se usa como parametro en otra función.
function responderSaludo(g_nombre, g_apellido, esDev) {
    console.log(`buen día ${g_nombre} ${g_apellido}`);
    if (esDev) {
        console.log(`No sabia que eras desarrollador`);
        
    }
}

var yolanda = new Persona('Yolanda', 'Cruz', 1.52);
var ruben = new Desarrollador('Ruben', 'Alzate', 1.73);
var angela = new Persona('Angela', 'Gomez', 1.70);
var valeria = new Desarrollador('Valeria', 'Alzate Gomez', 1.02);

//opcional el parametro funcion responder saludo
yolanda.saludar(responderSaludo)
ruben.saludar()
angela.saludar(responderSaludo)
valeria.saludar(responderSaludo)


