// JavaScript Document

/* Gamestructure 

1.  Play game in between user and computer
        - wins
        - losses

2.  Before Game Start
        - User Guesses
            - guessesLeft
                - total 9 guesses left to start
            - guessedLetters
                - make sure empty out all guesses to left
            - letterToGuess
                - begin with empty to string

3.  computerChoices
        - give computer some choices of Words ("actor", "agent", "alone", "anger", "avoid", "beach", "birth", "brown", "built", "buyer", "chair", "china", "clean", "court", "crown")l
            - make sure the word that computer select clue also connect with that word...

        - letterToGuess
            - let computer guess random word from choices
        
        - updatLetterToGuess
            - update word everytime once game over

4.  userChoices
        - guesses
            - total 9 guesses to figure out what computer has selected.

        - updateGuessesLeft
            - To point out user how many guesses/guess left

        - updateGuessesSoFar
            - Show guesses user has selected and join them with ','

        - Let user select one key
            - onKeyUp
                - userGuess
                    - if userGuess match letterToGuess
                        - wins ++
                        - reset()
                        - update note to say "you are psychic"
                    - if userGuess is not matching
                        - check if guessLeft > 0
                            - if
                                - check userGuess is not repeating
                                    - if 
                                        - return false
                                    - else
                                        - put this guess into guessedLetters
                                        - update note to say "keep trying"
                            - else
                                - loose ++
                                - reset()
                                - update note to say "you are not psychic, try again!"



5.  Reset
        - guessesLeft = 9;
        - guessedLetters = [];
        - updateLetterToGuess();
        - updateGuessesLeft();
        - updateGuessesSoFar();
        - updateComputerGuess(); // background color change

6.  Extra
        - colors
            - change background color everytime when update on computer guess //updateComputerGuess()

*/

//1
var wins = 0;
var losses = 0;

//2
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess1 = null;
var letterToGuess2 = null;
var letterToGuess3 = null;
var letterToGuess4 = null;
var letterToGuess5 = null;

//6
var color = "rgb(" + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + "," + Math.floor(Math.random() * 56) + ")"

var updateComputerGuess = function() {
    document.querySelector('.bg').style.backgroundColor = color;
};

//3
var computerChoices = ["actor", "agent", "alone", "anger", "avoid", "beach", "birth", "brown", "built", "buyer", "chair", "china", "clean", "court", "crown"];

var wordToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(wordToGuess);

//computer guess one letter and once it match (or not) it updates
var updateLetterToGuess = function() {
    this.letterToGuess1 = this.wordToGuess.charAt(0);
    this.letterToGuess2 = this.wordToGuess.charAt(1);
    this.letterToGuess3 = this.wordToGuess.charAt(2);
    this.letterToGuess4 = this.wordToGuess.charAt(3);
    this.letterToGuess5 = this.wordToGuess.charAt(4);
};


//5
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
    updateComputerGuess();
};

//4
var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    if (guessesLeft >= 2) {
        document.querySelector("#aNumChg").innerHTML = "You have <span style='white-space: nowrap;'>" + guessesLeft + " chances</span> <span style='white-space: nowrap;'>to match that</span> character!";
    } else { document.querySelector("#aNumChg").innerHTML = "You have last chance <span style='white-space: nowrap;'>to match that</span> character!"; }
};

var updateGuessesSoFar = function() {
    document.querySelector('#youGuessLetters').innerHTML = guessedLetters.join(', ');
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    function check(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return false;
            }
        }
        list.push(obj);
        guessesLeft--;
    }

    check(userGuess, guessedLetters);

    updateGuessesLeft();
    updateGuessesSoFar();
    console.log(letterToGuess1);

    if (guessesLeft > 0) {
        for (var j = 0; j < 5; j++) {
            if (userGuess == letterToGuess[j]) {
                wins++;
                document.querySelector('#win').innerHTML = "Wins: " + wins;
                document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
                document.querySelector('#compGuessDisplay1').innerHTML = letterToGuess1;
                document.querySelector('#compGuessDisplay2').innerHTML = letterToGuess2;
                document.querySelector('#compGuessDisplay3').innerHTML = letterToGuess3;
                document.querySelector('#compGuessDisplay4').innerHTML = letterToGuess4;
                document.querySelector('#compGuessDisplay5').innerHTML = letterToGuess5;
                reset();
            } else {
                document.querySelector('#areYouReady').innerHTML = "Keep trying!";
            }
        }
        // if (userGuess == letterToGuess1) {
        //     wins++;
        //     document.querySelector('#win').innerHTML = "Wins: " + wins;
        //     document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
        //     document.querySelector('#compGuessDisplay1').innerHTML = letterToGuess1;
        //     document.querySelector('#compGuessDisplay2').innerHTML = letterToGuess2;
        //     document.querySelector('#compGuessDisplay3').innerHTML = letterToGuess3;
        //     document.querySelector('#compGuessDisplay4').innerHTML = letterToGuess4;
        //     document.querySelector('#compGuessDisplay5').innerHTML = letterToGuess5;
        //     reset();
        // } else {
        //     document.querySelector('#areYouReady').innerHTML = "Keep trying!";
        // }

    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        document.querySelector('#areYouReady').innerHTML = "Nope, you are NOT psychic, play again!";
        document.querySelector('#compGuessDisplay1').innerHTML = letterToGuess1;
        document.querySelector('#compGuessDisplay2').innerHTML = letterToGuess2;
        document.querySelector('#compGuessDisplay3').innerHTML = letterToGuess3;
        document.querySelector('#compGuessDisplay4').innerHTML = letterToGuess4;
        document.querySelector('#compGuessDisplay5').innerHTML = letterToGuess5;
        reset();
    }
};