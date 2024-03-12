import {
  winGame,
  gameOver,
  printUrlCard,
  setScore,
  updateMessage,
  htmlObjects,
  disableOrEnableButton,
} from "./ui";
import { game, getCardUrl } from "./model";

export const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

export const generateCardNumber = (randomNumber: number) => {
  if (randomNumber > 7) {
    randomNumber += 2;
  }

  return randomNumber;
};

export const getCardPoints = (card: number) => {
  if (card > 7) {
    return 0.5;
  }

  return card;
};

export const sumPoints = (point: number) => {
  return game.score + point;
};

export const checkGame = () => {
  if (game.score === 7.5) {
    winGame();
  } else if (game.score > 7.5) {
    gameOver();
  }
};

export const playCard = () => {
  game.state = "playing";
  const randomNumber = generateRandomNumber();
  const card = generateCardNumber(randomNumber);
  const urlCard = getCardUrl(card);
  printUrlCard(urlCard);
  const point = getCardPoints(card);
  const points = sumPoints(point);
  setScore(points);
  checkGame();
};

export const plantarse = () => {
  game.state = "stop";
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
    disableOrEnableButton(htmlObjects.botonPedirCarta, true);
  }
};

export const restartGame = () => {
  game.state = "stop";
  setScore(0);
  printUrlCard(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  updateMessage("");
  if (
    htmlObjects.botonPedirCarta &&
    htmlObjects.botonPedirCarta instanceof HTMLButtonElement
  ) {
    disableOrEnableButton(htmlObjects.botonPedirCarta, false);
  }
};
