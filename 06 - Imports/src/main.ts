import "./style.css";
import { Cartas } from "./types";
import { generateNumber } from "./motor";
import { htmlObjects, showCard, updateMessage, updateScore } from "./ui";
import { game } from "./model";

function playCard(): void {
  let card = generateNumber();
  if (card > 7) {
    card += 2;
  }
  console.log(card);
  showCard(card as Cartas);
  updateScore(card);
}

// function disableButton(button: HTMLButtonElement): void {
//   if (button && button instanceof HTMLButtonElement) {
//     button.disabled = true;
//   }
// }

// function enableButton(button: HTMLButtonElement): void {
//   if (button && button instanceof HTMLButtonElement) {
//     button.disabled = false;
//   }
// }

function plantarse(): void {
  if (game.score < 4) {
    updateMessage("Has sido muy conservador");
  } else if (game.score === 5) {
    updateMessage("Te ha entrado el canguelo eh?");
  } else if (game.score === 6 || game.score === 7) {
    updateMessage("Casi casi...");
  }
  if (
    htmlObjects.botonPedirCarta &&
    htmlObjects.botonPedirCarta instanceof HTMLButtonElement
  ) {
    htmlObjects.botonPedirCarta.disabled = true;
  }
}

function restartGame(): void {
  game.score = 0;

  if (
    htmlObjects.scoreElement &&
    htmlObjects.scoreElement instanceof HTMLSpanElement
  ) {
    htmlObjects.scoreElement.innerText = game.score.toString();
  }
  if (
    htmlObjects.cardElement &&
    htmlObjects.cardElement instanceof HTMLImageElement
  ) {
    htmlObjects.cardElement.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (
    htmlObjects.botonPedirCarta &&
    htmlObjects.botonPedirCarta instanceof HTMLButtonElement
  ) {
    htmlObjects.botonPedirCarta.disabled = false;
  }
  if (
    htmlObjects.messageElement &&
    htmlObjects.messageElement instanceof HTMLSpanElement
  ) {
    htmlObjects.messageElement.innerText = "";
  }
}

if (
  htmlObjects.botonPedirCarta &&
  htmlObjects.botonPedirCarta instanceof HTMLButtonElement
) {
  htmlObjects.botonPedirCarta.addEventListener("click", () => {
    playCard();
  });
}

if (
  htmlObjects.botonPlantarse &&
  htmlObjects.botonPlantarse instanceof HTMLButtonElement
) {
  htmlObjects.botonPlantarse.addEventListener("click", () => {
    plantarse();
  });
}

if (
  htmlObjects.botonReiniciar &&
  htmlObjects.botonReiniciar instanceof HTMLButtonElement
) {
  htmlObjects.botonReiniciar.addEventListener("click", () => {
    restartGame();
  });
}
