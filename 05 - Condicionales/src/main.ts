import "./style.css";

let score: number = 0;
// Element variables
const scoreElement = document.getElementById("puntuacion");
const botonPedirCarta = document.getElementById("pedir-carta");
const botonReiniciar = document.getElementById("reiniciar");
const botonPlantarse = document.getElementById("plantarse");
const messageElement = document.getElementById("mensaje");

type Cartas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

function generateNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

function showCard(card: Cartas) {
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

function updateScore(newScore: number) {
  if (newScore > 7) {
    score += 0.5;
  } else {
    score += newScore;
  }
  if (scoreElement && scoreElement instanceof HTMLSpanElement) {
    scoreElement.innerText = score.toString();
  }
  if (score === 7.5) {
    updateMessage("Has ganado!");
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
      botonPedirCarta.disabled = true;
    }
  } else if (score > 7.5) {
    updateMessage("Has perdido!");
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
      botonPedirCarta.disabled = true;
    }
  }
}

function updateMessage(message: string): void {
  if (messageElement && messageElement instanceof HTMLSpanElement) {
    messageElement.innerText = message;
  }
}

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
  if (score < 4) {
    updateMessage("Has sido muy conservador");
  } else if (score === 5) {
    updateMessage("Te ha entrado el canguelo eh?");
  } else if (score === 6 || score === 7) {
    updateMessage("Casi casi...");
  }
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = true;
  }
}

function restartGame(): void {
  score = 0;
  let scoreElement = document.getElementById("puntuacion");
  if (scoreElement && scoreElement instanceof HTMLSpanElement) {
    scoreElement.innerText = score.toString();
  }
  let cardElement = document.getElementById("card") as HTMLImageElement;
  if (cardElement && cardElement instanceof HTMLImageElement) {
    cardElement.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    botonPedirCarta.disabled = false;
  }
  if (messageElement && messageElement instanceof HTMLSpanElement) {
    messageElement.innerText = "";
  }
}

if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
  botonPedirCarta.addEventListener("click", () => {
    playCard();
  });
}

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", () => {
    plantarse();
  });
}

if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", () => {
    restartGame();
  });
}
