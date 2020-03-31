/* El juego tiene 3 rondas y acaba cuando uno de los participantes gana 3 veces */

// Declaración de variables
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";
var round_count = 0;
var yo_count = 0;
var maquina_count = 0;
var maquina;

// Generación aleatoria de una opción para la máquina
var maquinaOpcion = function() {
  return Math.round(Math.random()*(3-1)+parseInt(1));
}

// Algoritmo del juego
function juego(yo) {
  // Escoge una opción para la máquina
  maquina = maquinaOpcion();

  // Convierte la opción escogida a texto
  if(maquina === 1){
    maquina = "Piedra";
  } elseif (maquina === 2) {
    maquina = "Papel";
  } elseif (maquina === 3) {
    maquina = "Tijera";
  }

  // Compara las opciones escogidas y muestra el resultado de la ronda
  if (yo === maquina) {
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Empate");
  } elseif (yo === "Piedra" && maquina === "Papel") {
    maquina_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Perdiste");
  } elseif (yo === "Piedra" && maquina === "Tijera") {
    yo_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Ganaste");
  } elseif (yo === "Papel" && maquina === "Piedra") {
    yo_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Ganaste");
  } elseif (yo === "Papel" && maquina === "Tijera") {
    maquina_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Perdiste");
  } elseif (yo === "Tijera" && maquina === "Piedra") {
    maquina_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Perdiste");
  } elseif (yo === "Tijera" && maquina === "Papel") {
    yo_count++;
    round_count++
    console.log("Ronda: " + round_count + ". Tú: " + yo + " - Máquina: " + maquina + ". Resultado: Ganaste");
  }

  // Verifíca el número de rondas
  if ((yo_count === 3) || (maquina_count === 3)) {
    // Muestra el resultado final si alquien ya ha ganado 3 veces
    if (yo_count === 3) {
      alert("Ganaste. Puntaje final: " + yo_count + " - " + maquina_count);
    } elseif (maquina_count === 3){
      alert("Perdiste. Puntaje final: " + yo_count + " - " + maquina_count);
    }
    //Reinicia las variables para poder jugar nuevamente
    round_count = 0;
    yo_count = 0;
    maquina_count = 0;
  }
}