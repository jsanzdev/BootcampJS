import { showCard, updateScore } from "./ui";
import { Cartas } from "./types";

function generateNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function playCard(): void {
  let card = generateNumber();
  if (card > 7) {
    card += 2;
  }
  console.log(card);
  showCard(card as Cartas);
  updateScore(card);
}
