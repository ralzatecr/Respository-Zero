
//---------------->UN SOLO PERSONAJE
// const API_URL = 'https://rickandmortyapi.com/api';
// const character = '/character/:id';

// const rick = `${API_URL}${character.replace(':id',366)}`;
// const opts = { crossDomain: true};
// const onPersonaje = function (data) {
//    console.log(`Hola yo soy, ${data.name}`);
// };

// //callbakc, funcion que se ejecuta en el futuro, la dispara $.get
// $.get(rick, opts, onPersonaje);





//---------------->MULTIPLES PERSONAJES
//El asincronismo hace que no se sepa el orden de los personajes
//event loop
// const API_URL = 'https://rickandmortyapi.com/api';
// const character = '/character/:id';
// const opts = { crossDomain: true };

// const onPersonaje = function(persona) {
//     console.log(`Hola yo soy, ${persona.name}`);
// }

// function obtenerPersonaje(g_id) {
//     const rick = `${API_URL}${character.replace(':id',g_id)}`;
//     $.get(rick, opts, onPersonaje);    
// }

// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);
// obtenerPersonaje(4);
// obtenerPersonaje(5);
// obtenerPersonaje(6);

//---------------->MULTIPLES PERSONAJES EN ORDEN 
// const API_URL = 'https://rickandmortyapi.com/api';
// const personaje = '/character/:id';
// const opts = { crossDomain: true };

// function obtenerPersonaje(g_id, callback) {
//     const url = `${API_URL}${personaje.replace(':id',g_id)}`;
//     $.get(url, opts, function(persona) {
//         console.log(`Hola, yo soy ${persona.name}`);
//         if (callback) {
//             callback();
//         }
//     }) 
// }

// //garantizar el orden:
// //se hace con la referencia a una funcion sin ejecutar:
// obtenerPersonaje(1, function () {
//     obtenerPersonaje(2, function () {
//         obtenerPersonaje(3, function () {
//             obtenerPersonaje(4, function () {
//                 obtenerPersonaje(5, function () {
//                     obtenerPersonaje(6, function () {
//                         obtenerPersonaje(7)
//                     });
//                 });
//             });   
//         });
//     });
// });




//---------------->MULTIPLES PERSONAJES EN ORDEN  - MANEJO DE ERRORES
// const API_URL = 'https://rickandmortyapi.com/api';
// const personaje = '/character/:id';
// const opts = { crossDomain: true };

// function obtenerPersonaje(g_id, callback) {
//     const url = `${API_URL}${personaje.replace(':id',g_id)}`;

//     //metodo fail se ejecuta si ocurre algun error.
//     //en la pestaña network desabilitar cache
//     //crtl+shift+r refrescar y borrar chaché
//     //otra manera de identación.
//     $
//     .get(url, opts, callback)
//     //.fail(function () {
//     .fail(() => {
//         console.log(`Sucedió un erro, no se pudo obtener el personaje ${g_id}`);
//     })
// }

// //garantizar el orden:
// //se hace con la referencia a una funcion sin ejecutar llamada callback aqui.
// obtenerPersonaje(1, function (personaje) {
//     console.log(`Hola, yo soy ${personaje.name}`);

//     obtenerPersonaje(2, function (personaje) {
//         console.log(`Hola, yo soy ${personaje.name}`);

//         obtenerPersonaje(3, function (personaje) {
//             console.log(`Hola, yo soy ${personaje.name}`);

//             obtenerPersonaje(4, function (personaje) {
//                 console.log(`Hola, yo soy ${personaje.name}`);

//                 obtenerPersonaje(5, function (personaje) {
//                     console.log(`Hola, yo soy ${personaje.name}`);

//                     obtenerPersonaje(6, function (personaje) {
//                         console.log(`Hola, yo soy ${personaje.name}`);

//                         obtenerPersonaje(7, function (personaje) {
//                             console.log(`Hola, soy ${personaje.name}`);
                                                        
//                         })
//                     });
//                 });
//             });   
//         });
//     });
// });




//---------------->PROMESAS
//Valores que un no conocemos
//es la promesa de que ahi va a haber un valor cuando una accion 
//asincrona suceda y se resuelva
//estados:
//1. Pending, 
//2. resuelve bien -> fulfilled -> obtener valor -> .then(val=>...), el primer parametro es el valor que esperabamos
//3. resuelve mal  -> rejected  -> obtener valor -> .catch(err => ...) pasar una funcion como parametro para obtener el error.

/*Ejemplo
 new Promise(function(resolve, reject)){
    ...
}).then(valor => { //para obtener el valor
    ...
}.catch(err =>{ //ver error par mostrar mensaje
    ...
})

Cuando se complete el .then se puede enviar otra promesa para encadenar mas

*/
// const API_URL = 'https://rickandmortyapi.com/api';
// const personaje = '/character/:id';
// const opts = { crossDomain: true };

// function obtenerPersonaje(g_id) {
//     //return new Promise(function (resolve, reject) {
//     //como arrow:
//     return new Promise((resolve, reject) => {    
//         const url = `${API_URL}${personaje.replace(':id',g_id)}`;

//         $
//         .get(url, opts, function (data) {
//             resolve(data)
//         })
//         .fail(() => reject(id))
//     })
// }

// function onError(id) {
//     console.log(`Sucedio un error en el personaje id ${id}`);
// }

// obtenerPersonaje(1)
//     .then(function (personaje) {
//         console.log(`El personaje 1 es ${personaje.name}`);
//     })
//     .catch(onError)




//---------------->PROMESAS ENCADENADAS
// const API_URL = 'https://rickandmortyapi.com/api';
// const personaje = '/character/:id';
// const opts = { crossDomain: true };

// function obtenerPersonaje(g_id) {
//     //return new Promise(function (resolve, reject) {
//     //como arrow:
//     return new Promise((resolve, reject) => {    
//         const url = `${API_URL}${personaje.replace(':id',g_id)}`;

//         $
//         .get(url, opts, function (data) {
//             resolve(data)
//         })
//         .fail(() => reject(id))
//     })
// }

// function onError(id) {
//     console.log(`Sucedio un error en el personaje id ${id}`);
// }

// obtenerPersonaje(1)
//     // .then(function (personaje) {
//     //arrow function:
//     .then( personaje1 => {        
//         console.log(`El personaje 1 es ${personaje1.name}`);
//         return obtenerPersonaje(2)
//     })
//     .then( personaje2 => {        
//         console.log(`El personaje 2 es ${personaje2.name}`);
//         return obtenerPersonaje(3)
//     })
//     .then( personaje3 => {        
//         console.log(`El personaje 3 es ${personaje3.name}`);
//         return obtenerPersonaje(4)
//     })
//     .then( personaje4 => {        
//         console.log(`El personaje 4 es ${personaje4.name}`);
//         return obtenerPersonaje(5)
//     })
//     .then( personaje5 => {        
//         console.log(`El personaje 5 es ${personaje5.name}`);
//         return obtenerPersonaje(6)
//     })
//     .then( personaje6 => {        
//         console.log(`El personaje 6 es ${personaje6.name}`);
//         return obtenerPersonaje(7)
//     })
//     .then( personaje7 => {        
//         console.log(`El personaje 7 es ${personaje7.name}`);
 
//     })
//     //el catch va a funcionar con cualquiera de los personajes
//     .catch(onError)
//     //pruebas de desconecion en la pestaña network, inactivar internet
//     //disable cache y modo offline



//---------------->MULTIPLES PROMESAS EN PARALELO

// const API_URL = 'https://rickandmortyapi.com/api';
// const personaje = '/character/:id';
// const opts = { crossDomain: true };

// function obtenerPersonaje(g_id) {
//     //return new Promise(function (resolve, reject) {
//     //como arrow:
//     return new Promise((resolve, reject) => {    
//         const url = `${API_URL}${personaje.replace(':id',g_id)}`;

//         $
//         .get(url, opts, function (data) {
//             resolve(data)
//         })
//         .fail(() => reject(id))
//     })
// }

// function onError(id) {
//     console.log(`Sucedio un error en el personaje id ${id}`);
// }

// var ids = [1, 2, 3, 4, 5, 6, 7];
// // var promesas = ids.map(function (id) {
// //    return obtenerPersonaje(id); 
// // })
// // Con arrow function:
// var promesas = ids.map( id => obtenerPersonaje(id))

// Promise
//     .all(promesas)
//     .then(personajes => console.log(personajes))
//     .catch(onError)




//---------------->ASYNC AWAIT LO ULTIMO EN ASINCRONISMO.

const API_URL = 'https://rickandmortyapi.com/api';
const personaje = '/character/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(g_id) {
    //return new Promise(function (resolve, reject) {
    //como arrow:
    return new Promise((resolve, reject) => {    
        const url = `${API_URL}${personaje.replace(':id',g_id)}`;

        $
        .get(url, opts, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error en el personaje id ${id}`);
}
// no todos los navegadores aceptan async await.
// para los que no lo acepta se debe usar un polifill?
//para poder usar await se marca la funcion como asincrona
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map( id => obtenerPersonaje(id))
    //deneter la ejecucion en await hasta que todas las promesas
    //sean devueltas y ahi si llena la variable personajes.
    //se una un try catch
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
 
}

obtenerPersonajes()