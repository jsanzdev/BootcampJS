import { Cartas } from "./types";
import { game } from "./model";

interface HTMLObjects {
  scoreElement: HTMLSpanElement | null;
  messageElement: HTMLSpanElement | null;
  botonPedirCarta: HTMLElement | null;
  botonReiniciar: HTMLElement | null;
  botonPlantarse: HTMLElement | null;
  cardElement: HTMLElement | null;
}

export const htmlObjects: HTMLObjects = {
  scoreElement: document.getElementById("puntuacion"),
  messageElement: document.getElementById("mensaje"),
  botonPedirCarta: document.getElementById("pedir-carta"),
  botonReiniciar: document.getElementById("reiniciar"),
  botonPlantarse: document.getElementById("plantarse"),
  cardElement: document.getElementById("card"),
};

export function showCard(card: Cartas) {
  let cardImage: string = "";

  switch (card) {
    case 1:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      cardImage =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }

  let cardElement = document.getElementById("card") as HTMLImageElement;

  if (cardElement && cardElement instanceof HTMLImageElement) {
    cardElement.src = cardImage;
  }
}

export function updateScore(newScore: number) {
  if (newScore > 7) {
    game.score += 0.5;
  } else {
    game.score += newScore;
  }
  if (
    htmlObjects.scoreElement &&
    htmlObjects.scoreElement instanceof HTMLSpanElement
  ) {
    htmlObjects.scoreElement.innerText = game.score.toString();
  }
  if (game.score === 7.5) {
    updateMessage("Has ganado!");
    if (
      htmlObjects.botonPedirCarta &&
      htmlObjects.botonPedirCarta instanceof HTMLButtonElement
    ) {
      htmlObjects.botonPedirCarta.disabled = true;
    }
  } else if (game.score > 7.5) {
    updateMessage("Has perdido!");
    if (
      htmlObjects.botonPedirCarta &&
      htmlObjects.botonPedirCarta instanceof HTMLButtonElement
    ) {
      htmlObjects.botonPedirCarta.disabled = true;
    }
  }
}

function updateMessage(message: string): void {
  if (
    htmlObjects.messageElement &&
    htmlObjects.messageElement instanceof HTMLSpanElement
  ) {
    htmlObjects.messageElement.innerText = message;
  }
}

export function restartGame(): void {
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

export function plantarse(): void {
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
