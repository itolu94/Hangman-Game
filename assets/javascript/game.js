// Word bank and hints for each wordBank
var wordBank = [{
    name: "naruto uzamaki",
    image: "assets/images/Naruto's_Sage_Mode.png",
    hint: "He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood.",
    music: "assets/mp3/bensound-jazzyfrenchy.mp3"
}, {
    name: "ichigo",
    image: "assets/images/ichigo.png",
    hint: "A human who has Shinigami powers and is a Substitute Shinigami.",
    music: "assets/mp3/bensound-happyrock.mp3"
}, {
    name: "gon",
    image: "assets/images/Gon.jpg",
    hint: "A Hunter and the son of Ging Freecss.",
    music: "assets/mp3/bensound-jazzyfrenchy.mp3"
}, {
    name: "rider",
    image: "assets/images/Rider.jpg",
    hint: "Servant of Waver Velvet in the Fourth Holy Grail War of Fate/Zero.",
    music: "assets/mp3/bensound-happyrock.mp3"
}, {
    name: "itachi",
    image: "assets/images/itachi.jpg",
    hint: "He became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke.",
    music: "assets/mp3/bensound-jazzyfrenchy.mp3"
}, {
    name: "zoro",
    image: "assets/images/zoro.jpg",
    hint: "He is one of the top three fighters in the straw hat crew",
    music: "assets/mp3/bensound-happyrock.mp3"
}]
var word, wordBankSpace, wordBankSpaceAnswer, userInput;
var wins = 1;
var loses = 1;
var tries = 0;
var incorrectGuesses = [" "];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var index;

// When Start is clicked, this function picks a random word from the wordBank and genreates underscores seen on page.  
var wordGenorator = function() {

    // zeros out incorrectGuesses array every time this function is ran
    incorrectGuesses = ['']
    tries = 8;
    document.getElementById('tries').innerHTML = tries;
    document.getElementById('guessesArrary').innerHTML = incorrectGuesses;
    // Need to add code to clear word
    word = wordBank[Math.floor(Math.random() * wordBank.length)].name;

    // determines the index of the word in the array
    arraryIndexLocation();
    wordBankSpace = [" "];
    wordBankSpaceAnswer = [" "];
    console.log(word);

    // Generates underscores on the page
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " ") {
            wordBankSpace.push("&nbsp; &nbsp;");
            wordBankSpaceAnswer.push("&nbsp; &nbsp;");
        } else {
            wordBankSpace.push("_ ");
            wordBankSpaceAnswer.push(word.charAt(i));
        }

    }
    // pushes the underscores to HTML page
    document.getElementById('wordSpot').innerHTML = wordBankSpace.join("");
}



// generates hints for the user
var hintGenorator = function() {
    document.getElementById('hint').innerHTML = wordBank[index].hint;
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



// Determines when the game is finished.  Works by converting both arrays to string, then comparing them
function areWeDone() {


    // get the solution and what the user has guessed so far and convert it into a string
    confirm1 = wordBankSpace.join(' ');
    confirm2 = wordBankSpaceAnswer.join(" ");

    // users strings and the answer are compared to see if the game has finshed
    if (confirm1 == confirm2) {
        incorrectGuesses = [''];
        document.getElementById("wins").innerHTML = wins++;
        document.getElementById('guessesArrary').innerHTML = incorrectGuesses.join(" ");
        document.getElementById('animeImagesSlot').src = wordBank[index].image;
        document.getElementById('characterName').innerHTML = wordBank[index].name;
           // When I look inside of devTools, I can see the audio source changing but that does not affect the current song playing
            document.getElementById('hangmanAudio').src = wordBank[index].music;
          

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

// Determines the index that the objects are located in the arrary
function arraryIndexLocation() {
    for (var i = 0; i < wordBank.length; i++) {
        if (word === wordBank[i].name) {
            index = i;
            return index;
        }
    }
}
