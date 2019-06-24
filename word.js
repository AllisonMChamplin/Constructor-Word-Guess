var inquirer = require("inquirer");
var Letter = require("./letter");

function Word(chosenWord) {


    // console.log("hi Word constructor");
    this.lettersInChosenWord = chosenWord.split("");
    this.numBlanks = this.lettersInChosenWord.length;
    this.numGuesses = this.lettersInChosenWord.length;
    this.userGuesses = [];
    this.userWrongGuesses = [];
    this.letterObjectArray = [];

    for (var i = 0; i < this.numBlanks; i++) {
        var x = new Letter(this.lettersInChosenWord[i]);
        this.letterObjectArray.push(x);
    }

    this.showWord = function () {
        var x = "";
        for (var i = 0; i < this.numBlanks; i++) {
            x = x.concat(this.letterObjectArray[i].showCharacter());
            x = x.concat(" ");
        }
        return x;
    }

    this.makeGuess = function (guess) {
        var letterFoundCount = 0;
        // console.log("1. TRUE OR FALSE? ", this.userGuesses.includes(guess.toLowerCase()));

        // Check if key pressed is a letter
        if (guess.toUpperCase() != guess.toLowerCase() && guess.length === 1) {

            // Check if user already guessed the letter
            if (!this.userGuesses.includes(guess.toLowerCase())) {

                // console.log("guess array: ", this.userGuesses);
                // console.log("2. TRUE OR FALSE? ", this.userGuesses.includes(guess.toLowerCase()));

                // Add the letter to the guessed array
                this.userGuesses.push(guess.toLowerCase());
                // Reset letterFound to false
                var letterFound = false;

                // Check each letter of the word against the guess
                for (var i = 0; i < this.numBlanks; i++) {
                    // Flag each letter guessedStatus true or false
                    this.letterObjectArray[i].checkCharacter(guess.toLowerCase());
                    // If letter is in position i
                    // console.log("TESTING:");
                    // console.log("Guess / this.characterString: ", guess + " / " + this.letterObjectArray[i].characterString);
                    if (guess === this.letterObjectArray[i].characterString) {
                        letterFound = true;
                    }
                }

                if (letterFound === true) {
                    console.log("\n *** CORRECT! *** \n");
                    // console.log("letterFound", letterFound);
                } else {
                    console.log("\n *** INCORRECT! *** \n");
                }

                console.log(this.showWord());
                console.log("\n You have " + this.numGuesses + " Guesses left. \n");
                // console.log("guess array: ", this.userGuesses);
                // console.log("letterfound: ", letterFound);
                this.getGuess();

            } else {
                console.log("\n WOOPS!!! YOU ALREADY GUESSED THAT LETTER! TRY AGAIN! \n");
                this.getGuess();
            }

        } else {
            console.log("\n That key was not a letter. Guess again... \n");
            this.getGuess();
            return;
        }
    }

    this.getGuess = function () {
        // console.log("GetGuess ");
        var temp = this;
        // console.log("numGuesses", temp.numGuesses);

        if (temp.numGuesses === 0) {
            console.log("GAME OVER GUESSES = 0");
        } else {
            // console.log("do the Guess");
            inquirer.prompt([
                {
                    name: "guess",
                    message: "Guess a letter:"
                }
            ]).then(function (answers) {
                // console.log("Guesses left: ", temp.numGuesses);
                var guess = answers.guess;
                temp.makeGuess(guess);
            }).catch(
                // Log the rejection reason
                (reason) => {
                    console.log('Handle rejected promise (' + reason + ') here.');
                });
        }

    }

}


module.exports = Word;