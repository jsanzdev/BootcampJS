import { Tablero } from "./model";
import { voltearLaCarta, sonPareja, esPartidaCompleta } from "./motor";

// we grab all de divs inside grid-card and fill it with cards.
const gridCard = document.getElementById("card-grid") as HTMLDivElement;
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
  cardGridArray.forEach((div, index) => {
    // We assign to each div in cardGridArray a carta from the tablero
    div.id = tablero.cartas[index].idFoto.toString();
  });
  // now we add the event listener to each card
  let cardA: number = 0;
  cardGridArray.forEach((div, index) => {
    div.addEventListener("click", () => {
      // we call the function to flip the card and change the image of the card
      if (tablero.estadoPartida !== "PartidaCompleta") {
        if (tablero.estadoPartida === "CeroCartasLevantadas") {
          voltearLaCarta(tablero, index);
          div.classList.add("flipped");
          div.style.backgroundImage = `url('${tablero.cartas[index].imagen}')`;
          tablero.estadoPartida = "UnaCartaLevantada";
          cardA = index;
        } else if (tablero.estadoPartida === "UnaCartaLevantada") {
          voltearLaCarta(tablero, index);
          div.classList.add("flipped");
          div.style.backgroundImage = `url('${tablero.cartas[index].imagen}')`;
          tablero.estadoPartida = "DosCartasLevantadas";
          tablero.intentos++;
          setIntentos(tablero);
          esPartidaCompleta(tablero);
          if (sonPareja(cardA, index, tablero)) {
            tablero.estadoPartida = "CeroCartasLevantadas";
          } else {
            setTimeout(() => {
              div.style.backgroundImage = "";
              cardGridArray[cardA].style.backgroundImage = "";
              div.classList.remove("flipped");
              cardGridArray[cardA].classList.remove("flipped");
              tablero.estadoPartida = "CeroCartasLevantadas";
            }, 1000);
          }
        }
      } else {
        if (
          reiniciarPartidaButton &&
          reiniciarPartidaButton instanceof HTMLButtonElement
        ) {
          disableOrEnableButton(reiniciarPartidaButton, false);
        }
      }
    });
  });
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
  tablero.estadoPartida = "PartidaNoIniciada";
};
