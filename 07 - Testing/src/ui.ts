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

export const printUrlCard = (urlCard: string) => {
  if (
    htmlObjects.cardElement &&
    htmlObjects.cardElement instanceof HTMLImageElement
  ) {
    htmlObjects.cardElement.src = urlCard;
  }
};

export const updateMessage = (message: string) => {
  if (
    htmlObjects.messageElement &&
    htmlObjects.messageElement instanceof HTMLSpanElement
  ) {
    htmlObjects.messageElement.innerText = message;
  }
};

export const setScore = (newPoints: number) => {
  game.score = newPoints;
  if (
    htmlObjects.scoreElement &&
    htmlObjects.scoreElement instanceof HTMLSpanElement
  ) {
    htmlObjects.scoreElement.innerText = game.score.toString();
  }
};

export const winGame = () => {
  game.state = "win";
  updateMessage("Has ganado!");
  if (
    htmlObjects.botonPedirCarta &&
    htmlObjects.botonPedirCarta instanceof HTMLButtonElement
  ) {
    disableOrEnableButton(htmlObjects.botonPedirCarta, true);
  }
};

export const gameOver = () => {
  game.state = "lose";
  updateMessage("Has perdido!");
  if (
    htmlObjects.botonPedirCarta &&
    htmlObjects.botonPedirCarta instanceof HTMLButtonElement
  ) {
    disableOrEnableButton(htmlObjects.botonPedirCarta, true);
  }
};

export const disableOrEnableButton = (
  button: HTMLButtonElement,
  disable: boolean
): void => {
  button.disabled = disable;
};
