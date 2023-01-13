let globalMaxScore = 1;
let globalPlayerOneScore = 0;
let globalPlayerTwoScore = 0;

const maxScore = document.querySelector('#maxscore');
const btnPlayer1 = document.querySelector('#player1');
const btnPlayer2 = document.querySelector('#player2');
const scorePlayer1 = document.querySelector('#p1score');
const scorePlayer2 = document.querySelector('#p2score');
const reset = document.querySelector('#reset');
const winner = document.querySelector('#winner');

function checkWinner() {
    if (globalPlayerOneScore > globalPlayerTwoScore && globalPlayerOneScore >= globalMaxScore) {
        winner.innerText = "The Winner is Player One";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    } else if (globalPlayerTwoScore >= globalMaxScore) {
        winner.innerText = "The Winner is Player Two";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    }
}

maxScore.addEventListener('input', () => {
    globalMaxScore = maxScore.value;
    maxScore.disabled = true;
    console.log('Max SCORE', globalMaxScore);
})

btnPlayer1.addEventListener('click', () => {
    globalPlayerOneScore++;
    scorePlayer1.innerText = globalPlayerOneScore;
    checkWinner();
    // console.log(globalPlayerOneScore)
})

btnPlayer2.addEventListener('click', () => {
    globalPlayerTwoScore++;
    scorePlayer2.innerText = globalPlayerTwoScore;
    checkWinner();
    // console.log(globalPlayerTwoScore)
})

reset.addEventListener('click', () => {
    globalPlayerOneScore = 0;
    globalPlayerTwoScore = 0;
    scorePlayer1.innerText = globalPlayerOneScore;
    scorePlayer2.innerText = globalPlayerTwoScore;
    winner.innerText = "";
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
    maxScore.disabled = false;
})

