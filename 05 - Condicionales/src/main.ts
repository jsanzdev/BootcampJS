import "./style.css";

let score: number = 0;
// Element variables
const scoreElement = document.getElementById("puntuacion");
const botonPedirCarta = document.getElementById("pedir-carta");
const botonReiniciar = document.getElementById("reiniciar");
const botonPlantarse = document.getElementById("plantarse");
const messageElement = document.getElementById("mensaje");
const cardElement = document.getElementById("card");

const generateRandomNumber = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const getCardUrl = (card: number) => {
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

  return cardImage;
};

const printUrlCard = (urlCard: string) => {
  if (cardElement && cardElement instanceof HTMLImageElement) {
    cardElement.src = urlCard;
  }
};

const updateMessage = (message: string) => {
  if (messageElement && messageElement instanceof HTMLSpanElement) {
    messageElement.innerText = message;
  }
};

const generateCardNumber = (randomNumber: number) => {
  if (randomNumber > 7) {
    randomNumber += 2;
  }

  return randomNumber;
};

const getCardPoints = (card: number) => {
  if (card > 7) {
    return 0.5;
  }

  return card;
};

const sumPoints = (point: number) => {
  return score + point;
};

const setScore = (newPoints: number) => {
  score = newPoints;
  if (scoreElement && scoreElement instanceof HTMLSpanElement) {
    scoreElement.innerText = score.toString();
  }
};

const checkGame = () => {
  if (score === 7.5) {
    winGame();
  } else if (score > 7.5) {
    gameOver();
  }
};

const winGame = () => {
  updateMessage("Has ganado!");
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    disableOrEnableButton(botonPedirCarta, true);
  }
};

const gameOver = () => {
  updateMessage("Has perdido!");
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    disableOrEnableButton(botonPedirCarta, false);
  }
};

const playCard = () => {
  const randomNumber = generateRandomNumber();
  const card = generateCardNumber(randomNumber);
  const urlCard = getCardUrl(card);
  printUrlCard(urlCard);
  const point = getCardPoints(card);
  const points = sumPoints(point);
  setScore(points);
  checkGame();
};

const disableOrEnableButton = (
  button: HTMLButtonElement,
  disable: boolean
): void => {
  button.disabled = disable;
};

const plantarse = () => {
  if (score < 4) {
    updateMessage("Has sido muy conservador");
  } else if (score === 5) {
    updateMessage("Te ha entrado el canguelo eh?");
  } else if (score === 6 || score === 7) {
    updateMessage("Casi casi...");
  }
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    disableOrEnableButton(botonPedirCarta, true);
  }
};

const restartGame = () => {
  setScore(0);
  printUrlCard(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  updateMessage("");
  if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
    disableOrEnableButton(botonPedirCarta, false);
  }
};

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
