import { Tablero } from "./model";
import {
  voltearLaCarta,
  sonPareja,
  esPartidaCompleta,
  iniciaPartida,
  sePuedeVoltearLaCarta,
} from "./motor";

// HTML DIVS
const gridCard = document.getElementById("card-grid") as HTMLDivElement;
const gameMessage = document.getElementById("game-message");
const intentosSpan = document.getElementById("numero-intentos");
export const reiniciarPartidaButton =
  document.getElementById("reiniciar-button");

const disableOrEnableButton = (
  button: HTMLButtonElement,
  disable: boolean
): void => {
  button.disabled = disable;
};

export const cardsDiv: HTMLDivElement[] = Array.from(
  gridCard.children
) as HTMLDivElement[];

const updateGameMessage = (message: string, timeout: number): void => {
  if (gameMessage && gameMessage instanceof HTMLSpanElement) {
    gameMessage.innerText = message;
    setTimeout(() => {
      gameMessage.innerText = "";
    }, timeout);
  }
};

export const CompletarPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "PartidaCompleta";
  if (
    reiniciarPartidaButton &&
    reiniciarPartidaButton instanceof HTMLButtonElement
  ) {
    disableOrEnableButton(reiniciarPartidaButton, false);
  }
  updateGameMessage("¡Enhorabuena! Has completado la partida!", 200000);
};

const resetCards = (
  div: HTMLDivElement,
  cardA: number,
  cardGridArray: HTMLDivElement[],
  tablero: Tablero
) => {
  setTimeout(() => {
    div.style.backgroundImage = "";
    cardGridArray[cardA].style.backgroundImage = "";
    div.classList.remove("flipped");
    cardGridArray[cardA].classList.remove("flipped");
    tablero.estadoPartida = "CeroCartasLevantadas";
  }, 1000);
};

//*TODO: Refactorizar la funcion.
const prueba = (
  tablero: Tablero,
  index: number,
  div: HTMLDivElement,
  cardGridArray: HTMLDivElement[]
) => {
  let cardA = 0;
  if (sePuedeVoltearLaCarta(tablero, index)) {
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
      voltearLaCarta(tablero, index);
      div.classList.add("flipped");
      div.style.backgroundImage = `url('${tablero.cartas[index].imagen}')`;
      tablero.estadoPartida = "UnaCartaLevantada";
      cardA = index;
      console.log(tablero.estadoPartida);
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      voltearLaCarta(tablero, index);
      div.classList.add("flipped");
      div.style.backgroundImage = `url('${tablero.cartas[index].imagen}')`;
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.intentos++;
      console.log(tablero.estadoPartida);
      setIntentos(tablero);
      console.log(tablero.estadoPartida);
      if (sonPareja(cardA, index, tablero)) {
        tablero.estadoPartida = "CeroCartasLevantadas";
        console.log(tablero.estadoPartida);
        if (esPartidaCompleta(tablero)) {
          console.log("Completando partida....");
          CompletarPartida(tablero);
          console.log(tablero.estadoPartida);
        }
      } else {
        resetCards(div, cardA, cardGridArray, tablero);
      }
    }
  } else {
    updateGameMessage("No puedes voltear esta carta", 2000);
  }
};

//TODO: Crear funcion de inicializar partida.

//TODO: Esta funcion no tiene sentido, mover el inicializar fuera. Simplifar mas la funcion.
export const drawCards = (
  cardGridArray: HTMLDivElement[],
  tablero: Tablero
) => {
  if (
    reiniciarPartidaButton &&
    reiniciarPartidaButton instanceof HTMLButtonElement
  ) {
    disableOrEnableButton(reiniciarPartidaButton, true);
  }

  iniciaPartida(tablero);
  cardGridArray.forEach((div, index) => {
    div.id = tablero.cartas[index].idFoto.toString();
  });

  // let cardA: number = 0;

  if (!esPartidaCompleta(tablero)) {
    cardGridArray.forEach((div, index) => {
      //TODO: No dejar hacer click si la carta no se puede voltear o el estado de la partida no deja voltear la carta.
      div.addEventListener("click", () => {
        prueba(tablero, index, div, cardGridArray);
      });
    });
  }
};

const setIntentos = (tablero: Tablero) => {
  if (intentosSpan && intentosSpan instanceof HTMLSpanElement) {
    intentosSpan.innerText = tablero.intentos.toString();
  }
};

export const reiniciarPartida = (tablero: Tablero) => {
  tablero.cartas.forEach((card) => {
    card.estaVuelta = false;
    card.encontrada = false;
  });
  cardsDiv.forEach((div) => {
    div.style.backgroundImage = "";
  });
  tablero.intentos = 0;
  setIntentos(tablero);
  tablero.estadoPartida = "PartidaNoIniciada";
  iniciaPartida(tablero);
  drawCards(cardsDiv, tablero);
};
