let boxes = document.querySelectorAll(".game button");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset-btn");

let player = "X";
let gameOver = false;

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let j = 0; j < wins.length; j++) {
        let [a, b, c] = wins[j];
        if (
            boxes[a].innerText === player &&
            boxes[b].innerText === player &&
            boxes[c].innerText === player
        ) {
            boxes[a].classList.add("win");
            boxes[b].classList.add("win");
            boxes[c].classList.add("win");
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText === "") return false;
    }
    return true;
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (boxes[i].innerText !== "" || gameOver) return;

        boxes[i].innerText = player;
        boxes[i].classList.add(player.toLowerCase());

        if (checkWinner()) {
            message.innerText = "Player " + player + " wins!";
            gameOver = true;
            return;
        }

        if (isDraw()) {
            message.innerText = "It's a draw!";
            gameOver = true;
            return;
        }

        player = player === "X" ? "O" : "X";
        message.innerText = "Player " + player + " Turn";
    };
}

reset.onclick = function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
        boxes[i].classList.remove("x", "o", "win");
    }
    player = "X";
    gameOver = false;
    message.innerText = "Player X Turn";
};