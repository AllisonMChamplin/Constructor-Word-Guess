var inquirer = require("inquirer");
var Letter = require("./letter");
var divider = "\r\r-------------------------------------------\r\r";
function Word(chosenWord) {

    this.lettersInChosenWord = chosenWord.split("");
    this.numBlanks = this.lettersInChosenWord.length;
    this.numGuesses = this.lettersInChosenWord.length;
    this.userGuesses = [];
    this.correctGuessTotal = 0;
    this.letterObjectArray = [];
    this.solved = false;

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
        var tempSelf = this;

        // Check if key pressed is a letter
        if (guess.toUpperCase() != guess.toLowerCase() && guess.length === 1) {

            // Check if user already guessed the letter
            if (!this.userGuesses.includes(guess.toLowerCase())) {

                // Add the user's guess to the array
                this.userGuesses.push(guess.toLowerCase());
                var letterFound = false;

                // Check each letter of the word against the guess
                for (var i = 0; i < this.numBlanks; i++) {
                    // Flag each letter guessedStatus true or false
                    this.letterObjectArray[i].checkCharacter(guess.toLowerCase());
                    if (guess === this.letterObjectArray[i].characterString) {
                        letterFound = true;
                        this.correctGuessTotal++;
                    }
                }

                if (letterFound === true) {
                    console.log("\n Guesses: ", this.userGuesses.join("  "));
                    console.log("\n CORRECT!");
                    console.log("\n");
                } else {
                    console.log("\n Guesses: ", this.userGuesses.join("  "));
                    console.log("\n INCORRECT!");
                    console.log("\n");
                    this.numGuesses--;
                }

                var guessOpt = ""
                
                if (this.numGuesses > 1) {
                    guessOpt = " guesses"
                } else if (this.numGuesses === 1) {
                    guessOpt = " guess"
                }
                var guessesText = "\r You have " + this.numGuesses + guessOpt + " left.\r";

                // console.log(this.showWord());

                if (this.numGuesses > 0)
                console.log(guessesText);
                this.getGuess();

            } else {
                console.log("\n You already guessed that letter! \n");
                this.getGuess();
            }

        } else {
            console.log("\n That key was not a letter. Guess again... \n");
            this.getGuess();
            return;
        }
    }

    this.getGuess = function () {
        var temp = this;
    
        if (this.correctGuessTotal === this.numBlanks) {
            console.log("\r");
            console.log("* * * * * YOU WIN! * * * * * ");
            console.log("\r");
            winCounter++;
            console.log(" Wins: " + winCounter + " Losses: " + lossCounter);
            console.log("\r");
            endRound();
        } else if (temp.numGuesses === 0) {
            console.log("\r");
            console.log("GAME OVER! \r ): You are out of guesses :(");
            console.log("\r");
            lossCounter++;
            console.log(" Wins: " + winCounter + " Losses: " + lossCounter);
            console.log("\r");
            endRound();
        } else {
            // console.log("do the Guess");
            console.log("\r");
            console.log(" " + this.showWord());
            console.log("\r");

            inquirer.prompt([
                {
                    name: "guess",
                    message: "Guess a letter: "
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