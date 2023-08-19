const cell = document.querySelectorAll('.cell');
const player1scorespan = document.querySelector('.player1score');
const player2scorespan = document.querySelector('.player2score');
const restartbtn = document.querySelector('.restart');
const wincombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]
let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}
let flag = true;
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if (flag === true) {
            addcellsplayer(i);
        } else {
            addcellsplayer2(i);
        }
        checkwinner();
    })
}

function addcellsplayer(i) {
    cell[i].innerHTML = "x";
    player1.push(i);
    flag = false;
}

// function addcellsplayer1(i){
//     cell[i].innerHtml="x";
//     player1.push(i);
//     flag=false;
// }

function addcellsplayer2(i) {
    cell[i].innerHTML = "o";
    player2.push(i);
    flag = true;
}

function checkwinner() {
    wincombinations.find((item) => {
        if (item.filter((i) => player1.includes(i)).length === 3) {
            alert("player 1 won");
            score.player1++;
            drawscore();
            clearfield();
            return item;
        } else if (item.filter((i) => player2.includes(i)).length === 3) {
            alert("player 2 won");
            score.player2++;
            drawscore();
            clearfield();

        }
        return
    })
}

function drawscore() {
    player1scorespan.innerHTML = "player 1: " + score.player1;
    player2scorespan.innerHTML = "player 2: " + score.player2;

}
drawscore();

function clearfield() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;

}
restartbtn.addEventListener('click', () => {
    clearfield();
})