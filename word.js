// var chosenWord = "be";
var inquirer = require("inquirer");
var Letter = require("./letter");

function Word(chosenWord) {

    this.lettersInChosenWord = chosenWord.split("");
    this.numBlanks = this.lettersInChosenWord.length;
    this.numGuesses = this.lettersInChosenWord.length;
    this.userGuesses = [];

    this.letterObjectArray = [];
    for (var i = 0; i < this.numBlanks; i++) {
        var x = new Letter(this.lettersInChosenWord[i]);
        this.letterObjectArray.push(x);
    }







    // function getGuess(gameWordObject) {
    //     console.log("word: ", chosenWord);
    //     inquirer.prompt([
    //         {
    //             name: "guess",
    //             message: "Guess a letter:"
    //         }
    //     ]).then(function (answers) {
    //         var guess = answers.guess;
    //         gameWordObject.makeGuess(guess);
    //     });
    // }





    this.showWord = function () {
        var x = "";
        for (var i = 0; i < this.numBlanks; i++) {
            x = x.concat(this.letterObjectArray[i].showCharacter());
            x = x.concat(" ");
        }
        return x;
    }

    this.makeGuess = function (guess) {
        console.log("\n\n hi makeGuess");
        for (var i = 0; i < this.numBlanks; i++) {
            this.letterObjectArray[i].checkCharacter(guess);
        }

        console.log(this.showWord());
        this.numGuesses = this.numGuesses - 1;

        if (this.numGuesses > 0) {
            this.getGuess(this);
        }
    }

    this.getGuess = function () {
        console.log("word: ", chosenWord);
        var temp = this;
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter:"
            }
        ]).then(function (answers) {
            var guess = answers.guess;
            // console.log("******");
            temp.makeGuess(guess);
        }).catch(
            // Log the rejection reason
            (reason) => {
                console.log('Handle rejected promise (' + reason + ') here.');
            });
    }

};

module.exports = Word;
