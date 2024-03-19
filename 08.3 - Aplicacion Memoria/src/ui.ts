import { Tablero } from "./model";
import {
  voltearLaCarta,
  sonPareja,
  esPartidaCompleta,
  iniciaPartida,
  sePuedeVoltearLaCarta,
} from "./motor";

// we grab all de divs inside grid-card and fill it with cards.
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

//Grab all the divs from grid-card and fill them with cards
export const cardsDiv: HTMLDivElement[] = Array.from(
  gridCard.children
) as HTMLDivElement[];

const updateGameMessage = (message: string): void => {
  if (gameMessage && gameMessage instanceof HTMLSpanElement) {
    gameMessage.innerText = message;
    setTimeout(() => {
      gameMessage.innerText = "";
    }, 3000);
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
  updateGameMessage("¡Enhorabuena! Has completado la partida");
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

  let cardA: number = 0;

  if (!esPartidaCompleta(tablero)) {
    cardGridArray.forEach((div, index) => {
      div.addEventListener("click", () => {
        // we call the function to flip the card and change the image of the card
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
          updateGameMessage("No puedes voltear esta carta");
        }
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
