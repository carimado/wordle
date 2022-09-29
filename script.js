// Model 

// let word = [];
let tileIndex = 1;
const keyboard = document.getElementsByClassName('key');
let randomNumber = Math.floor(Math.random() * validWords.length); // These only work when page refreshes
let randomWord = validWords[randomNumber];
// View


// Keyboard Function
function keyboardInput() {
    
    for (let key of keyboard) {
        key.addEventListener('click', function () {

            let keySelected = key.textContent;

            if (keySelected === 'BACKSPACE') {
                console.log('BACKSPACE')
                //function to handle BACKSPACE
                backspace(keySelected)
            }

            if (keySelected === 'ENTER') {
                console.log('ENTER')
                //function to handle the ENTER/GUESS
                word.join('')
                console.log(word)
                // checkGuess();
            }

            if (keySelected) {
                console.log('i pushed ' + keySelected)
                // function to handle KEY
                keyboardOutput(keySelected);
            }

        })

}};

keyboardInput();

function backspace(key) {

    const lastTileIndexElement = document.getElementById(String(tileIndex))
    tileIndex = tileIndex - 1
    lastTileIndexElement.textContent = key

}

function keyboardOutput(key) {
    if (tileIndex > 5) {
        //something to handle this
        alert('no more bruh')

    }

    if (tileIndex <= 5) {
        const nextTileIndexElement = document.getElementById(String(tileIndex))
        tileIndex = tileIndex + 1
        nextTileIndexElement.textContent = key
        // word.push(key)
    }
};

// function getRandomWord() {
//     let randomWord = Math.floor(Math.random() * validWords.length);
//     return validWords[randomWord]
// }


function checkGuess() {


    console.log(validWords)

    //HANDLE BOTH
    // if (userWord === computerWord) {
    //     console.log('lol')
    // }
}





// for (let keySelected of keys) {
//     keySelected.addEventListener('click', function () {

//         if (tileIndex <= 5) {
//             let key = keySelected.textContent;
//             console.log('i selected ' + key)
//             word.push(key)
//             console.log(word)

//             const tileIndexElement = document.getElementById(String(tileIndex))
//             tileIndex = tileIndex + 1
//             tileIndexElement.textContent = key
//         } 

//     })
// }




            // let key = keySelected.textContent;
            // console.log('i selected ' + key)
            // word.push(key)
            // console.log(word)

            // const tileIndexElement = document.getElementById(String(tileIndex))
            // tileIndex = tileIndex + 1
            // tileIndexElement.textContent = key











