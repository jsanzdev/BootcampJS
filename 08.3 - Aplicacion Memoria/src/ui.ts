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

/*
  Dos variables para las cartas para que todas las funciones puedan acceder a ellas.
*/
let cardA = 0;
let cardB = 0;

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
  cardA: number,
  cardB: number,
  cardGridArray: HTMLDivElement[],
  tablero: Tablero
) => {
  setTimeout(() => {
    cardGridArray[cardA].style.backgroundImage = "";
    cardGridArray[cardB].style.backgroundImage = "";
    cardGridArray[cardA].classList.remove("flipped");
    cardGridArray[cardB].classList.remove("flipped");
    tablero.estadoPartida = "CeroCartasLevantadas";
    cardA = 0;
    cardB = 0;
  }, 1000);
};

const playCardUI = (
  index: number,
  cardGridArray: HTMLDivElement[],
  tablero: Tablero
) => {
  cardGridArray[index].classList.add("flipped");
  cardGridArray[
    index
  ].style.backgroundImage = `url('${tablero.cartas[index].imagen}')`;
  voltearLaCarta(tablero, index);
};

//*TODO: Refactorizar la funcion.
const playCard = (
  tablero: Tablero,
  index: number,
  cardGridArray: HTMLDivElement[]
) => {
  if (sePuedeVoltearLaCarta(tablero, index)) {
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
      cardA = index;
      playCardUI(cardA, cardGridArray, tablero);
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      cardB = index;
      playCardUI(cardB, cardGridArray, tablero);
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.intentos++;
      updateIntentosDiv(tablero);
      if (sonPareja(cardA, index, tablero)) {
        tablero.estadoPartida = "CeroCartasLevantadas";
        if (esPartidaCompleta(tablero)) {
          CompletarPartida(tablero);
        }
      } else {
        resetCards(cardA, cardB, cardGridArray, tablero);
      }
    }
  } else {
    updateGameMessage("No puedes voltear esta carta", 2000);
  }
};

//TODO: Esta funcion no tiene sentido, mover el inicializar fuera. Simplifar mas la funcion.
export const playCards = (
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

  if (
    !esPartidaCompleta(tablero) ||
    tablero.estadoPartida === "DosCartasLevantadas"
  ) {
    cardGridArray.forEach((div, index) => {
      //TODO: No dejar hacer click si la carta no se puede voltear o el estado de la partida no deja voltear la carta.
      if (cardA === 0 || cardB === 0) {
        div.addEventListener("click", () => {
          playCard(tablero, index, cardGridArray);
        });
      }
    });
  }
};

//TODO: Crear funcion de inicializar partida.

export const startGame = (tablero: Tablero) => {
  iniciaPartida(tablero);
  playCards(cardsDiv, tablero);
};

const updateIntentosDiv = (tablero: Tablero) => {
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
  updateIntentosDiv(tablero);
  tablero.estadoPartida = "PartidaNoIniciada";
  iniciaPartida(tablero);
  playCards(cardsDiv, tablero);
};
