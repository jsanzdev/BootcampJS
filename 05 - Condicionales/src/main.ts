import "./style.css";

const score: number = 0;

if (score > 5) {
  console.log("You win!");
}

type Cartas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

function generateNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

function showCard(card: Cartas) {
    let cardImage:string = "";

    switch (card) {
        case 1:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12:
            cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
            default:
                cardImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
                break;
    }

    let cardElement = document.getElementById("card") as HTMLImageElement;

    if (cardElement) {
        cardElement.src = cardImage;
    }
}

document.getElementById("pedir-carta")?.addEventListener("click", () => {
    let card = generateNumber();
    if (card > 7) {
        card += 2;
    }
    console.log(card);
    showCard(card as Cartas);
});

