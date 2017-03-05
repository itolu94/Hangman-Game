// Word bank and hints for each wordBank
var wordBank = {
    name: ["naruto uzamaki", "ichigo", "gon", "rider", "itachi", "zoro", ],
    images: ["assets/images/Naruto's_Sage_Mode.png", "assets/images/ichigo.png", "assets/images/Gon.jpg", "assets/images/Rider.jpg", "assets/images/itachi.jpg", "assets/images/zoro.jpg"],
    hints: ["He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood.",
        "A human who has Shinigami powers and is a Substitute Shinigami.", "A Hunter and the son of Ging Freecss.",
        "Servant of Waver Velvet in the Fourth Holy Grail War of Fate/Zero.",
        "He became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke.",
        "He is one of the top three fighters in the straw hat crew"
    ]
};
var word, wordBankSpace, wordBankSpaceAnswer, userInput;
var wins = 1;
var loses = 1;
var tries = 0;
var incorrectGuesses = [" "];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// picks a random element from the wordBank array and generates blank spaces
var wordGenorator = function() {
    incorrectGuesses = ['']
    tries = 3;
    document.getElementById('tries').innerHTML = (tries);
    document.getElementById('guessesArrary').innerHTML = (incorrectGuesses);
    var guesses = [" "]
        // Need to add code to clear word
    word = wordBank.name[Math.floor(Math.random() * wordBank.name.length)];
    console.log(wordBank.name.indexOf(word));
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
    document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
}

// generates hints for the user
var hintGenorator = function() {
    var index = wordBank.name.indexOf(word);
    console.log(typeof index);
    if (index === undefined) {
        console.log(index);
        document.getElementById('hint').innerHTML = "You have to start the game before you get hints.";
    } else {
        document.getElementById('hint').innerHTML = wordBank.hints[index];
    }
}

// Code for recognizing characters pressed and putting it into array

document.onkeydown = function userGuesses() {
    // store the letter that was pressed
    userInput = event.key;
    // Function determines when the user has won the game;
    if (isAAlphebetCharacter() === true) {
        if (isALetter() === true) {
            for (i = 0; i < wordBankSpaceAnswer.length; i++) {
                if ((userInput == word.charAt(i))) {
                    wordBankSpace[i + 1] = userInput;
                    // replaces _ with letter if guessed corretly 
                    document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
                    // Add events that happen when the user wins. 
                    areWeDone();
                }
            }

        } else if (userWordBank() === true) {
            incorrectGuesses.push(userInput);
            document.getElementById('guessesArrary').innerHTML = incorrectGuesses.join(" ");
            tries--;
            document.getElementById('tries').innerHTML = tries;
            console.log(tries);
            if (tries === 0) {
                document.getElementById('tries').innerHTML = tries;
                document.getElementById('loses').innerHTML = loses++;
                wordGenorator();
            }
        } else if (userWordBank() === false) {
            alert("You already guessed that!  Try Something else");
        }
    }
}

// Determines when the game is finished
// Works by converting both arrays to string, then comparing them
function areWeDone() {
    // finds the index number of the word, images have the same location
    var index = wordBank.name.indexOf(word);
    incorrectGuesses = ['']
        // get the solution and what the user has guessed so far and convert it into a string
    confirm1 = wordBankSpace.join(' ');
    confirm2 = wordBankSpaceAnswer.join(" ");

    // users strings and the answer are compared to see if the game has finshed
    if (confirm1 == confirm2) {
        incorrectGuesses = ['']
        document.getElementById("wins").innerHTML = wins++;
        document.getElementById('guessesArrary').innerHTML = incorrectGuesses.join(" ")
        document.getElementById('animeImagesSlot').src = wordBank.images[index]
            // We run the wordGenorator funcctio to clear the board and reset the number of tries 
        wordGenorator();
    }
}



// Determines if the userGuess is within correct answer
function isALetter() {
    for (i = 0; i < word.length; i++) {
        UserInputTester = (userInput === word[i]);
        if (UserInputTester === true) {
            return true;

        }
    }
}

// Determines if the incorrect guess has already been guessed
function userWordBank() {
    var isAlreadyGuessed;
    for (var i = 0; i < incorrectGuesses.length; i++) {
        isAlreadyGuessed = (userInput === incorrectGuesses[i])
            // returns false if the user already guessed a incorrecct
        if (isAlreadyGuessed === true) {
            return false;
        }
    }
    if (isAlreadyGuessed === false) {
        return true;
    }
}

// Determines if the key ressed is a letter 
function isAAlphebetCharacter() {
    for (i = 0; i < alphabet.length; i++) {
        if (userInput === alphabet[i]) {
            return true;
        }
    }
}
