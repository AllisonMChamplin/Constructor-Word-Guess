function Letter (characterString) {

    this.characterString = characterString;
    this.placeHolder = "_";
    this.guessedStatus = false;

    this.showCharacter = function () {
        if (this.guessedStatus === true) {
            return this.characterString;
        } else {
            return this.placeHolder;
        }
    }

    this.checkCharacter = function (characterGuess) {
        if (characterGuess === this.characterString) {
            this.guessedStatus = true;
            return true;
        } 
    }
}

module.exports = Letter;


// console.log("Hi");
// var letterOne = new Letter("c");
// console.log("letterOne: ", letterOne);
// console.log("checkGuessedStatus of letterOne upon construction: ", letterOne.checkGuessedStatus());
// console.log("Running checkCharacter on c: ", letterOne.checkCharacter("c"));
// console.log("checkGuessedStatus of letterOne now: ", letterOne.checkGuessedStatus());


