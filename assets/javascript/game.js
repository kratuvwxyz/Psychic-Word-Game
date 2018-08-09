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
            - make sure the word that computer select clue also connect with that word... (under construction!)

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




5.  Reset
        - guessesLeft = 9;
        - guessedLetters = [];
        - updateLetterToGuess();
        - updateGuessesLeft();
        - updateGuessesSoFar();
        - updateComputerGuess(); // background color change

*/

//1
var wins = 0;
var losses = 0;

//2
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var wordToGuess = null;
var letterToGuess1 = null;
var letterToGuess2 = null;
var letterToGuess3 = null;
var letterToGuess4 = null;
var letterToGuess5 = null;
var guess1 = false;
var guess2 = false;
var guess3 = false;
var guess4 = false;
var guess5 = false;

//3
var computerChoices = ["actor", "agent", "audio", "anger", "avoid", "beach", "birth", "brown", "built", "buyer", "chair", "china", "clock", "court", "child", "dance", "dream", "drink", "dozen", "dying", "earth", "eight", "empty", "enjoy", "equal", "extra", "faith", "false", "fight", "fixed", "force", "fruit", "globe", "grace", "great", "group", "guard", "guest", "heart", "horse", "house", "human", "ideal", "image", "index", "input", "joint", "judge", "label", "large", "later", "laugh", "learn", "light", "magic", "maker", "match", "media", "metal", "minus", "mixed", "money", "month", "movie", "music", "night", "noise", "north", "noted", "novel", "nurse", "ocean", "other", "paint", "party", "phone", "pilot", "plate", "power", "print", "proud", "quick", "quiet", "radio", "ready", "right", "rough", "royal", "scale", "sixty", "speak", "south", "stand", "taken", "thick", "touch", "truly", "twice", "under", "until", "upset", "usage", "urban", "video", "virus", "value", "waste", "water", "white", "women", "world", "write", "wrong", "yield", "young", "youth"];

var updateWordToGuess = function() {
    this.wordToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    this.letterToGuess1 = this.wordToGuess.charAt(0);
    this.letterToGuess2 = this.wordToGuess.charAt(1);
    this.letterToGuess3 = this.wordToGuess.charAt(2);
    this.letterToGuess4 = this.wordToGuess.charAt(3);
    this.letterToGuess5 = this.wordToGuess.charAt(4);
}

//5
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    letterToGuess1 = null;
    letterToGuess2 = null;
    letterToGuess3 = null;
    letterToGuess4 = null;
    letterToGuess5 = null;
    guess1 = false;
    guess2 = false;
    guess3 = false;
    guess4 = false;
    guess5 = false;

    document.querySelector('#compGuessDisplay1').innerHTML = "?";
    document.querySelector('#compGuessDisplay2').innerHTML = "?";
    document.querySelector('#compGuessDisplay3').innerHTML = "?";
    document.querySelector('#compGuessDisplay4').innerHTML = "?";
    document.querySelector('#compGuessDisplay5').innerHTML = "?";

    updateWordToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();

    document.querySelector('#youGuessLetters').innerHTML = "?";
};

//4
var updateGuessesLeft = function() {
    if (guessesLeft >= 2) {
        document.querySelector("#aNumChg").innerHTML = "You have <span style='white-space: nowrap;'>" + guessesLeft + " chances</span> <span style='white-space: nowrap;'>to match that</span> character!";
    } else { document.querySelector("#aNumChg").innerHTML = "You have last chance <span style='white-space: nowrap;'>to match that</span> character!"; }
};

var updateGuessesSoFar = function() {
    document.querySelector('#youGuessLetters').innerHTML = guessedLetters.join(', ');
};

updateWordToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    function check(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return false;
            }
        }
        list.push(obj);
    }

    check(userGuess, guessedLetters);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (userGuess === letterToGuess1) {
        document.querySelector('#compGuessDisplay1').innerHTML = letterToGuess1;
        guess1 = true;
    } else if (userGuess === letterToGuess2) {
        document.querySelector('#compGuessDisplay2').innerHTML = letterToGuess2;
        guess2 = true;
    } else if (userGuess === letterToGuess3) {
        document.querySelector('#compGuessDisplay3').innerHTML = letterToGuess3;
        guess3 = true;
    } else if (userGuess === letterToGuess4) {
        document.querySelector('#compGuessDisplay4').innerHTML = letterToGuess4;
        guess4 = true;
    } else if (userGuess === letterToGuess5) {
        document.querySelector('#compGuessDisplay5').innerHTML = letterToGuess5;
        guess5 = true;
    } else {
        guessesLeft--;
    }

    if (guessesLeft > 0) {

        if (guess1 && guess2 && guess3 && guess4 && guess5) {
            wins++;
            document.querySelector('#win').innerHTML = "&#128077; : " + wins;
            document.querySelector('#areYouReady').innerHTML = "Yes, you are psychic!!";
            reset();
            console.log(reset);
        } else {
            document.querySelector('#areYouReady').innerHTML = "Keep trying!";
        }

    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "&#128078; : " + losses;
        document.querySelector('#areYouReady').innerHTML = "Nope, right word was <span class='text-danger'>" + wordToGuess + "</span>, play again!";
        reset();
    }
};