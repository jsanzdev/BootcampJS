import "./style.css";
import { tablero } from "./model";
import { startGame, reiniciarPartidaButton, reiniciarPartida } from "./ui";

startGame(tablero);

if (
  reiniciarPartidaButton &&
  reiniciarPartidaButton instanceof HTMLButtonElement
) {
  //* Mover al UI
  reiniciarPartidaButton.addEventListener("click", () => {
    reiniciarPartida(tablero);
  });
}
