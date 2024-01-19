/*JavaScript for TicTacToe game*/
/* The Game starts with x and followed by o. A player wins if he has 3 consecutive horizontal/vertical/diagonal */
/* Create a simple front-end Tic Tac Toe game using HTML, CSS, and JavaScript. The game should allow two players to take turns to play on a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. If all nine squares are filled and no player has three marks in a row, the game is a draw.*/
var i = 0;
board = document.getElementById("board");
var boardArray = new Array(9);
var player = "X";
var winner = false;
var win = document.getElementById("status");
var resetButton = document.getElementById("restartButton");


for (var i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("click", function () {
        if (this.innerHTML == "" && !winner) {
            this.innerHTML = player;
            i++;
            var x = this.getAttribute("data-index");
            boardArray[x] = player;
            if (player == "X") {
                player = "O";
            } else {
                player = "X";
            }
            win.innerHTML = "Player " + player + "'s turn!";
            checkWin();
        }
    });
}

function checkWin() {

    if (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2] && boardArray[0] != undefined) {
        win.innerHTML = "Player " + boardArray[0] + " wins!";
        winner = true;
    }
    if (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5] && boardArray[3] != undefined) {
        win.innerHTML = "Player " + boardArray[3] + " wins!";
        winner = true;
    }
    if (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8] && boardArray[6] != undefined) {
        win.innerHTML = "Player " + boardArray[6] + " wins!";        
        winner = true;
    }
    if (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6] && boardArray[0] != undefined) {
        win.innerHTML = "Player " + boardArray[0] + " wins!";        
        winner = true;
    }
    if (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7] && boardArray[1] != undefined) {
        win.innerHTML = "Player " + boardArray[1] + " wins!";        
        winner = true;
    }
    if (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8] && boardArray[2] != undefined) {
        win.innerHTML = "Player " + boardArray[2] + " wins!";        
        winner = true;
    }
    if (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8] && boardArray[0] != undefined) {
        win.innerHTML = "Player " + boardArray[0] + " wins!";        
        winner = true;
    }
    if (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6] && boardArray[2] != undefined) {
        win.innerHTML = "Player " + boardArray[2] + " wins!";        
        winner = true;
    }
    if(i == 9 && !winner){
        win.innerHTML = "It's a draw!";
    }
}

resetButton.addEventListener("click", reset);

function reset() {
    win.innerHTML = "Player X's turn";
    winner = false;
    player = "X";
    for (var i = 0; i < boardArray.length; i++) {
        boardArray[i] = "";
    }
    for (var i = 0; i < board.children.length; i++) {
        board.children[i].innerHTML = "";
    }
}
