//Clases en Java Script

class persona{
    //existe la clase persona con un constructor que se va 
    //a ejecutar cuando se creen ojbetos de esta clase
    constructor(g_nombre, g_apellido, g_altura) {
    //this hace referencia al objeto que se acaba de construir
        this.nombre = g_nombre;
        this.apellido = g_apellido;
        this.altura = g_altura;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`);
    }

    soyAlto(){
        return this.altura >= 1.6;
    }

}

// Herencia en js se llama extencion
class desarrollador extends persona{
    constructor(g_nombre, g_apellido, g_altura) {
        //llamada al prototypo o clase padre.
        super(g_nombre, g_apellido, g_altura);
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`);
    }
}
