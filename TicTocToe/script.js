const cells = document.querySelectorAll('.cell');
const restartBtn = document.querySelector('#restart');
const status = document.querySelector('#status');

let player = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Player ${player} has won!`;
const drawMessage = () => `Game ended in a draw!`;


const currentPlayerTurn = () => `It's ${player}'s turn`;


status.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', handleRestartGame);






function handleCellClick(clickedCellEvent) {
  
    let id = clickedCellEvent.target.id;

    let clickedCellIndex = parseInt(id);

    if (gameState[clickedCellIndex - 1] !== '' || !gameActive) {
        return;
    }
    gameState[clickedCellIndex - 1] = player;
    clickedCellEvent.target.innerHTML = player;
    checkWinner(clickedCellIndex);
    if (!gameActive) {
        return;
    }
    
    
    
    playerChange();
};





function playerChange() {
    player = player === 'X' ? 'O' : 'X';
    status.innerHTML = currentPlayerTurn();
};




function handleRestartGame() {
    player = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    status.innerHTML = currentPlayerTurn();
    cells.forEach(cell => cell.innerHTML = '');
}


function checkWinner(clickedCellIndex) {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]]; 
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        status.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        status.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

}