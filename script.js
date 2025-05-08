let player1name;
let player2name;
let playerTurn;

let submitButton = document.getElementById("submit");
let userInput = document.getElementById("player-name");

submitButton.addEventListener("click", () => {
    if (!player1name) {
        player1name = userInput.value;
        userInput.value = "";
    } else {
        player2name = userInput.value;
        userInput.value = "";
        userInput.disabled = true;      
        submitButton.disabled = true;
        startGame();  
    }
});

function startGame() {
    playerTurn = 1;
    let tds = document.getElementsByTagName("td");
    for (let i=0; i<tds.length; i++) {
        tds[i].addEventListener("click", (e) => {
            if (playerTurn == 1) tds[i].innerText = "X";
            else tds[i].innerText = "O";
            checkWin();
            checkDraw();
            changeTurn();
        })
    }
}

function changeTurn() {
    if (playerTurn == 1) playerTurn = 2;
    else playerTurn = 1;
}