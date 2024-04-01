import { Carta, Tablero } from "./model";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

/*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  const isGameInProgress =
    tablero.estadoPartida === "CeroCartasLevantadas" ||
    tablero.estadoPartida === "UnaCartaLevantada";
  const isCardFoundOrFlipped =
    tablero.cartas[indice].encontrada || tablero.cartas[indice].estaVuelta;

  return isGameInProgress && !isCardFoundOrFlipped;
};

//TODO: Quitar el cambio de estado de la partida de aqui.
export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    tablero.cartas[indice].estaVuelta = true;
    // if (tablero.estadoPartida === "CeroCartasLevantadas") {
    //   tablero.estadoPartida = "UnaCartaLevantada";
    // } else {
    //   tablero.estadoPartida = "DosCartasLevantadas";
    // }
  }
};

/*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
    parejaEncontrada(tablero, indiceA, indiceB);
    return true;
  } else {
    parejaNoEncontrada(tablero, indiceA, indiceB);
    return false;
  }
};

/*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
};

/*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
};

/*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

/*
  Iniciar partida
  */

export const iniciaPartida = (tablero: Tablero): void => {
  barajarCartas(tablero.cartas);
  tablero.estadoPartida = "CeroCartasLevantadas";
};
