import "./style.css";
import { tablero } from "./model";
import { cardsDiv, drawCards, reiniciarPartidaButton } from "./ui";
import { iniciaPartida } from "./motor";

iniciaPartida(tablero);
drawCards(cardsDiv, tablero);

if (
  reiniciarPartidaButton &&
  reiniciarPartidaButton instanceof HTMLButtonElement
) {
  reiniciarPartidaButton.addEventListener("click", () => {
    iniciaPartida(tablero);
    drawCards(cardsDiv, tablero);
  });
}
