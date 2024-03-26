import "./style.css";
import { tablero } from "./model";
import {
  cardsDiv,
  drawCards,
  reiniciarPartidaButton,
  reiniciarPartida,
} from "./ui";

drawCards(cardsDiv, tablero);

if (
  reiniciarPartidaButton &&
  reiniciarPartidaButton instanceof HTMLButtonElement
) {
  //* Mover al UI
  reiniciarPartidaButton.addEventListener("click", () => {
    reiniciarPartida(tablero);
  });
}
