const keys = document.getElementsByClassName('key');
let tilePosition = 0;
let rowPosition = 0;
let randomNumber = Math.floor(Math.random() * validWords.length);
let randomWord = validWords[randomNumber];
// let randomUpperCaseWord = randomWord.toUpperCase();
let userWord = '';

// Function to initialise the game
function startGame() {

    for (let key of keys) {
        key.addEventListener('click', keyboardInput);
    }

    document.getElementById('enter').addEventListener('click', pressEnter);

    document.getElementById('backspace').addEventListener('click', pressBackspace);

    // document.addEventListener('keydown', (event) => {displayTile(event)})

}

startGame()

// Accepts keyboard events (click) and runs displayTile function
function keyboardInput(event) {

    let clickedElement = event.target
    
    if (clickedElement) {
        displayTile(clickedElement)
        return
    }
    
}

// Accepts character input, creates and displays tiles on each click.
function displayTile(char) {

    if (tilePosition <= 4) {
        let tileElement = document.getElementById(String(tilePosition + rowPosition));
        tilePosition = tilePosition + 1;
        tileElement.textContent = char.textContent;
        userWord = userWord + char.textContent.toUpperCase();
        tileElement.classList.add('char')
        tileElement.classList.add('popout-animation')
    }

}

// Checks the row position and increments by 5. Runs submitGuess function for logic check.
function pressEnter() {

    if (rowPosition >= 25) {
        document.getElementById('lose-state').removeAttribute('hidden')
        playAgain();
        return;
    }

    submitGuess();
    userWord = '';
    tilePosition = 0
    rowPosition = rowPosition + 5
    console.log(rowPosition);

}

// Backspace only works if condition is met. Decrements tilePosition and empties the textcontent and userWord.
function pressBackspace() {

    if (tilePosition > 0) {
        // Minus before the actual element
        tilePosition = tilePosition - 1;
        let PrevTileElement = document.getElementById(tilePosition + rowPosition);
        PrevTileElement.textContent = '';
        userWord = userWord.substring(0, userWord.length - 1)
    }
}

// Logic Check (2 cases of matches, green and yellow, else green)
function submitGuess() {

    // IF CORRECT WORD / RANDOM WORD
    if (userWord === randomWord) {
        document.getElementById('win-state').removeAttribute('hidden')
    }

    // IF LETTER IS CONTAINED IN COMPUTER WORD - DO SHIT
    // https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    for (let i = 0; i < userWord.length; i++) {
        // i in the userWord below will iterate and move to the next character
        if (randomWord.includes(userWord[i])) {

            // ITS IN THE RIGHT POSITION (GREEN)
            if (randomWord[i] === userWord[i]) {

                document.getElementById(String(rowPosition+i)).classList.add('greenTile')

                for (let key of keys) {
                    if (userWord[i] === key.textContent.toUpperCase()) {
                        key.classList.add('greenTile')
                    }
                }
                

            // ITS THE RIGHT LETTER WRONG POSITION (YELLOW)
            } else {
                document.getElementById(String(rowPosition+i)).classList.add('yellowTile')

                for (let key of keys) {
                    if (userWord[i] === key.textContent.toUpperCase()) {
                        key.classList.add('yellowTile')
                    }
                }

                if (randomWord[i] == userWord[i] && tilePosition != true) {
                    document.getElementById(String(rowPosition+i)).classList.add('greyTile')
                }

                
            }

            // ITS NOT IN THE WORD AT ALL
        } else {
            document.getElementById(String(rowPosition+i)).classList.add('greyTile')

            for (let key of keys) {
                if (userWord[i] === key.textContent.toUpperCase()) {
                    key.classList.add('greyTile')
                }
            }
        }
    }

}

// Resets the game by reload. WIP - to reset game without reloading.
function resetGame() {

    // tilePosition = 0;
    // rowPosition = 0;
    // userWord = '';

    // let tilesReset = document.getElementsByClassName('tile')

    // for (let tiles of tilesReset) {
    //     tiles.classList.remove('char')
    //     tiles.classList.remove('popout-animation')
    // }

    // document.getElementById(String(rowPosition+i)).classList.remove('greenTile')
    location.reload()

}

// Play Again Button for Modal
document.getElementById('play-again').addEventListener('click', function () {

    document.getElementById('win-state').setAttribute('hidden', false);

    resetGame();

})


    // --- Loop goes in here
    //      IF MATCH - CORRECT SPOT - GREEN
    //          IF POSITION - INCORRECT SPOT - YELLOW
    //      ELSE - PAINT IT GREY

