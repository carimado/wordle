// FUNCTION ANALOGY
// HEART (get oxygen) > LUNG (how much) > MOUTH ()
 

// Steps:
// Get Keyboard Character Keys Working - DONE
// Get Keyboard to Display in Each Tile - DONE
// Get Backspace Working (Minus the Position on the Board) - DONE
// Get Enter Working
//      - Function to Check the UserInput vs Random Word

// Notes:
// Work with the classes and not the textContent

const keys = document.getElementsByClassName('key');
let tilePosition = 1;
let randomNumber = Math.floor(Math.random() * validWords.length);
let randomWord = 'APPLE'
// validWords[randomNumber];
let userWord = '';

function startGame() {

    for (let key of keys) {
        key.addEventListener('click', keyboardInput);
    }

    document.getElementById('enter').addEventListener('click', submitGuess);

    document.getElementById('backspace').addEventListener('click', backspace);

}

startGame()

function keyboardInput(event) {

    let clickedElement = event.target
    
    if (clickedElement) {
        // console.log(clickedElement.textContent)
        displayTile(clickedElement)
        return
    }
    
}

function displayTile(char) {

    let tileElement = document.getElementById(tilePosition);
    tilePosition = tilePosition + 1;
    tileElement.textContent = char.textContent;
    // userWord.push(char.textContent)
    // console.log(userWord)
    userWord = userWord + char.textContent.toUpperCase();
    console.log(userWord)

}

function backspace() {

    if (tilePosition > 0) {
        let tileElement = document.getElementById(tilePosition);
        tilePosition = tilePosition - 1;
        tileElement.textContent = '';
        userWord = '';
    } else {
        tilePosition = 0;
    }
}

function submitGuess() {

    let resultColors = getResult(userWord, randomWord)

    // logic to only have 5 characters

    // IF LETTER IS CONTAINED IN COMPUTER WORD - DO SHIT
    // https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript


}

function getResult(inputWord, realWord) {

    for (let i = 0; i < userWord.length; i++) {
        // i in the userWord below will iterate and move to the next character
        if (randomWord.includes(userWord[i])) {
            //DO SHIT
            // ITS IN THE RIGHT POSITION
            console.log(`${userWord[i]} is in the word` + ' YOU WIN')

            // ITS NOT IN THE RIGHT POSITION BUT IN THE WORD


        // ITS NOT IN THE WORD AT ALL
        } else {
            console.log(`${userWord[i]} is not in the word - paint it grey`)
            console.log('you lose')
            document.getElementById(tilePosition).style.backgroundColor = 'grey'
        }
    }

    return []

}







    // --- Loop goes in here
    //      IF MATCH - CORRECT SPOT - GREEN
    //      IF POSITION - INCORRECT SPOT - YELLOW
    // ELSE - PAINT IT GREY



            // ITS NOT IN THE RIGHT POSITION BUT IN THE WORD
            // if (randomWord.includes(userWord[i]) !== tileElement.textContent) {
            //     document.getElementById(tilePosition).style.backgroundColor = 'yellow'
            // }