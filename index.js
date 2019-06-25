var inquirer = require("inquirer");
// Game counters
global.winCounter = 0;
global.lossCounter = 0;
global.gameTotal = 0;
global.firstGame = true;
global.endRound = function () {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "Exit"],
            name: "game"
        }
    ]).then(function (answers) {
        // console.log("***** Answers: ", answers);
        if (answers.game === "Yes") {
            startGame();
        } else {
            return false;
        }
    }).catch(
        // Log the rejection reason
        (reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
}

var Word = require("./word");
var wordsList = ["mercury", "venus", "earth", "mars", "jupiter", "saturn",
    "uranus", "neptune", "pluto", "intersteller", "supernova"];

function startGame() {
    // Solution is chosen randomly from wordsList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log("\n");
    console.log(" * * * * * * * * * * * * * * * * * * *");
    console.log("  WELCOME TO NODE GALACTIC WORD GUESS!  ");
    console.log("\n");
    // console.log(" * * * * * * * * * * * * * * * * * * *");
    console.log("  Can you guess the word? Good luck!");
    console.log(" * * * * * * * * * * * * * * * * * * *");
    // console.log("\n");

    var gameWordObject = new Word(chosenWord);

    if (firstGame === false) {
        console.log("\n Your score: " + winCounter + " wins, " + lossCounter + " losses. \n\n");
    }

    gameWordObject.getGuess();

}

startGame();