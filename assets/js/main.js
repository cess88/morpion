let playerone = "👽";
let playertwo = "😼";
let currentPlayer = playerone;
let round = 1;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let gameOver = false;
let iaChoice = 0;
let iaVsPlayer = false;
let victoryconditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


function displaysymbol(element) {
    if (element.innerText == "" && gameOver == false) {
        element.innerText = currentPlayer;
        round++;
        victory();
        setCurrentPlayer()
       
    }
}

/******************fonction qui fait chacun son tour*******/

function setCurrentPlayer() {
    if (round % 2 == 0) {
        currentPlayer = playertwo;
        if (iaVsPlayer) {
            playerIA();  
        }
    } else {
        currentPlayer = playerone;
    }
}
/*****************fonction bouton 1J ou 2J*******/

function setModeOnePlayer() {
   /*iaVsPlayer = true;*/
   if (iaVsPlayer = true) {
    restart()
   }
}

function setModeTwoPlayer() {
    /* iaVsPlayer = false;*/
    if (iaVsPlayer = false) {
        restart()
       }
    }

/***************aleatoire pour que ia puisse jouer*******/
function playerIA() {
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        iaChoice = aleatoire(0, document.querySelectorAll("td").length - 1)
        if (document.querySelectorAll("td")[iaChoice].innerText == "") {
            document.querySelectorAll("td")[iaChoice].click()
            break
        }
    }
}

/******************fonction de victoire*******/

function victory() {
    for (let i = 0; i < victoryconditions.length; i++) {
        let cell1 = document.querySelectorAll("td")[victoryconditions[i][0]].innerText;
        let cell2 = document.querySelectorAll("td")[victoryconditions[i][1]].innerText;
        let cell3 = document.querySelectorAll("td")[victoryconditions[i][2]].innerText;
        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue;
        }
        if (cell1 == cell2 && cell2 == cell3) {
            if (cell1 == playerone) {
                document.querySelector("p").innerText = "Le gagnant est le joueur 1 👽";
                document.querySelector("p").classList.add("pulse")
                scorePlayerOne++
                document.querySelector("#playerone").innerText = `score 👽 : ${scorePlayerOne}`;
                gameOver = true
                break;

            } else if (cell1 == playertwo) {
                document.querySelector("p").innerText = "Le gagnant est le joueur 2 😼";
                document.querySelector("p").classList.add("pulse")

                scorePlayerTwo++
                document.querySelector("#playertwo").innerText = `score 😼 : ${scorePlayerTwo}`;
                gameOver = true
                break;
            }
        }
    }
    equality()

}

/******************fonction d egalité*******/
function equality() {
    let count = 0
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        let tab = document.querySelectorAll("td")[i].innerText;
        if (tab != "") {
            count++
        }
    }
    if (count == document.querySelectorAll("td").length) {
        document.querySelector("p").innerText = "Pas de gagnant \ud83d\ude21";
        document.querySelector("p").classList.add("pulse")
    }
}

/******************fonction recommencer*******/
function restart() {
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        document.querySelectorAll("td")[i].innerText = "";
    }
    document.querySelector("p").classList.remove("pulse")
    document.querySelector("p").innerText = ""
    round = 1
    gameOver = false
    currentPlayer = playerone

}


/************aleatoire*********/
function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
