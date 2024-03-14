import { game } from "./model";

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
