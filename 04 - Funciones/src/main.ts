import "./style.css";

function nextTurn(number: number): number {
  return number + 1;
}

function resetTurn(): number {
    return 0;
}

function backTurn(number: number): number {
    if (number <= 0) {
        return 0;
    } else {
        return number - 1;
    }
}

function updateInnerHTML(numHtml: HTMLElement | null, turn: number) {
    if (numHtml !== null && numHtml !== undefined) {
      numHtml.innerHTML = turn.toString().padStart(2, "0");
    }
  }

let turn: number = 0;

const numHtml = document.getElementById("numero-turno");

document.getElementById("btn-next")?.addEventListener("click", () => {
    turn = nextTurn(turn);
    updateInnerHTML(numHtml, turn);
});

document.getElementById("btn-reset")?.addEventListener("click", () => {
    turn = resetTurn();
    updateInnerHTML(numHtml, turn);
});

document.getElementById("btn-back")?.addEventListener("click", () => {
    turn = backTurn(turn);
    updateInnerHTML(numHtml, turn);
});

const select = document.getElementById("input-turno") as HTMLSelectElement;


document.getElementById("btn-select")?.addEventListener("click", () => {
    let newTurn = parseInt(select.value);
    if (newTurn >= 0) {
        turn = newTurn;
        updateInnerHTML(numHtml, turn);
    }
});



