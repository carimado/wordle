// FUNCTION ANALOGY
// HEART (get oxygen) > LUNG (how much) > MOUTH ()
 
// Steps:
// Get Keyboard Character Keys Working - DONE
// Get Keyboard to Display in Each Tile - DONE
// Get Backspace Working (Minus the Position on the Board) - DONE
// Get Enter Working - DONE
//      - Function to Check the UserInput vs Random Word - DONE
// Get 1 ROW working FUCK - DONE
// Get Finish Game Logic to Work
// Keyboard States
// Spruce up the styles

const keys = document.getElementsByClassName('key');
let tilePosition = 0;
let rowPosition = 0;
let randomNumber = Math.floor(Math.random() * validWords.length);
let randomWord = validWords[randomNumber];
let userWord = '';

function startGame() {

    for (let key of keys) {
        key.addEventListener('click', keyboardInput);
    }

    document.getElementById('enter').addEventListener('click', pressEnter);

    document.getElementById('backspace').addEventListener('click', pressBackspace);

}

startGame()

function keyboardInput(event) {

    let clickedElement = event.target
    
    if (clickedElement) {
        displayTile(clickedElement)
        return
    }
    
}

function displayTile(char) {

    let tileElement = document.getElementById(String(tilePosition + rowPosition));
    tilePosition = tilePosition + 1;
    tileElement.textContent = char.textContent;
    userWord = userWord + char.textContent.toUpperCase();
    tileElement.classList.add('char')
    // console.log(tilePosition)

}

function pressEnter() {

    submitGuess();
    userWord = '';
    tilePosition = 0
    rowPosition = rowPosition + 5
    console.log(rowPosition);

}

function pressBackspace() {

    if (tilePosition <= 5) {
        let tileElement = document.getElementById(String(tilePosition + rowPosition));
        tilePosition = tilePosition - 1;
        tileElement.textContent = '';
        userWord = '';
    } else {
        tilePosition = 0;
    }
}

function submitGuess() {

    // IF LETTER IS CONTAINED IN COMPUTER WORD - DO SHIT
    // https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    for (let i = 0; i < userWord.length; i++) {
        // i in the userWord below will iterate and move to the next character
        if (randomWord.includes(userWord[i])) {

            // ITS IN THE RIGHT POSITION (GREEN)
            if (randomWord[i] === userWord[i]) {

                document.getElementById(String(rowPosition+i)).style.backgroundColor = 'green'
            // ITS THE RIGHT LETTER WRONG POSITION (YELLOW)
            } else {
                document.getElementById(String(rowPosition+i)).style.backgroundColor = 'yellow'
            }

            // ITS NOT IN THE WORD AT ALL
        } else {
            document.getElementById(String(rowPosition+i)).style.backgroundColor = 'grey'
        
        }
    }

}


// Clarence's Notes: 
// - 
// - 
// - 



    // --- Loop goes in here
    //      IF MATCH - CORRECT SPOT - GREEN
    //          IF POSITION - INCORRECT SPOT - YELLOW
    //      ELSE - PAINT IT GREY

