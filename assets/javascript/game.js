// Word bank and hints for each wordBank
var wordBank = ["naruto uzamaki", "ichigo", "gon", "sakura", "itachi", "zoro", "hunter"];
var hints = [""];
var word;
var wordBankSpace;
var wordBankSpaceAnswer;
var wins = 0;
var tries = 0;
var incorrectGuesses = [" "];
var userInput;
var UserInputTester;

// picks a random element from the wordBank array and generates blank spaces
var wordGenorator = function() {
    incorrectGuesses = [""]
    tries = 15
    document.getElementById('tries').innerHTML = (tries)
    var guesses = [" "]
        // Need to add code to clear word
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    wordBankSpace = [" "];
    wordBankSpaceAnswer = [" "];
    console.log(word);
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            wordBankSpace.push("&nbsp; &nbsp; &nbsp;");
            wordBankSpaceAnswer.push("&nbsp; &nbsp; &nbsp;");
        } else {
            wordBankSpace.push("_ ");
            wordBankSpaceAnswer.push(word.charAt(i));
        }

    }
    // console.log(wordBankSpace);
    // console.log(wordBankSpaceAnswer);
    document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
}



// Code for recognizing characters pressed and putting it into array

// }
// // }
document.onkeydown = function userGuesses() {
    // store the letter that was pressed
    userInput = event.key;
    // Function determines when the user has won the game;
    if (isALetter() === true) {
        for (i = 0; i < wordBankSpaceAnswer.length; i++) {
            if ((userInput == word.charAt(i))) {
                wordBankSpace[i + 1] = userInput;
                console.log(wordBankSpace);
                console.log(wordBankSpaceAnswer);
                // replaces _ with letter if guessed corretly 
                document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
                // Add events that happen when the user wins. 
                areWeDone();
            }
        }

    } else
    if (userWordBank() === true) {
        incorrectGuesses.push(userInput);
        document.getElementById('incorrectWordBank').innerHTML = incorrectGuesses.join("  ");
        document.getElementById('tries').innerHTML = tries--;
        console.log(incorrectGuesses);
    } else if (userWordBank() === false) {
        alert("You already guessed that!  Try Something else");
    }
}



// Determines when the game is finished
// Works by converting both arrays to string, then comparing them
function areWeDone() {
    confirm1 = wordBankSpace.join();
    confirm2 = wordBankSpaceAnswer.join();
    if (confirm1 == confirm2) {
        document.getElementById("wins").innerHTML = wins++;
    }
}

// Determines if the userGuess is within correct answer
function isALetter() {
    for (i = 0; i < word.length; i++) {
        UserInputTester = (userInput === word[i]);
        if (UserInputTester === true) {
            return true;
            break;
        }

        console.log(UserInputTester);
    }


}

// Determines if the incorrect guess has already been guessed
function userWordBank() {
    var isAlreadyGuessed;
    for (var i = 0; i < incorrectGuesses.length; i++) {
        isAlreadyGuessed = (userInput === incorrectGuesses[i])
        if (isAlreadyGuessed === true) {
            return false;
            break;
        }
    }
    if (isAlreadyGuessed === false) {
    	return true;
    }
}
