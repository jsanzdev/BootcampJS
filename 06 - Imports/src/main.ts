import "./style.css";
import { playCard } from "./motor";
import { htmlObjects, restartGame, plantarse } from "./ui";

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
