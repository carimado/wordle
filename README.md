# Wordle
Project 1 - Wordle for General Assembly!

Welcome to my project, here is a [link to my Wordle](https://carimado.github.io/wordle/)

How to play: 
- Guess the WORDLE in 6 tries.
- Each guess must be a valid 5-letter word. Hit the enter button to submit.
- After each guess, the color of the tiles will change to show how close your guess was to the word.

__________________________

Project Plan:
- [✓] Create HTML
    1. 1 Div - Containing all the textboxes - ✅
    2. 1 Div - Containing the keyboard - ✅

- [✓] Create CSS
    1. Get both Divs Centered and styled a lil - ✅
    2. Get the Keyboard keys styled a lil - ✅

- [✓] Create JS
    1. Keyboard Character Keys Working - ✅
    2. Keyboard Output to Display in Each Tile - ✅
    3. Get Backspace Working - ✅
    4. Get Enter Working - ✅
        - Function to Check Logic (UserWord === RandomWord etc.) - ✅
    5. Keyboard Colour States - ✅
        - If match, Green; if wrong position, Yellow; if incorrect, Dark Grey - ✅

- [ ] Make it legit!
    1. Align Everything (CSS) - ✅
    2. Create Modals for Win/Lose State (HTML / CSS) - ✅
    4. Popout animaton when tiles are displayed - ✅
    5. User to only use Valid Words - 
    6. Reset Game (JS) - 
    7. Flip and Shake Tiles (CSS / JS) - 
    8. How To Play Modal (HTML / CSS / JS) - 
    9. Listen for keyup on Keyboard - 
    10. User to use only valid words - 

✓✓✓✓✓
__________________________

Notes:
Issues / Major Roadblocks -

    - General structure of JS (e.g. how should I begin, write and make the code as neat as possible)
            - Learnings: 
                - For the game to actually work, what are the inputs required and wrote functions for each one of them

    - Keyboard Inputs / How to display on each tile
            - Learnings: 
                - Used to displaying output in one single element e.g. textarea or HTML element. Struggled identifying the ID of each individual tile. Discovered that you could essentially have a counter variable that increments and decrements as the user pushes keys or deletes them and this variable can be used to getElementById. Instead of passing in a string you pass in the variable instead. 
            
    - Move to the next row
            - Learnings: 
                - Knowing the above was valuable because if I can increment by 1 I can also increment by 5 to move to the next row when the user hits ENTER but also RESET the tile position back to 0 whenever that does happen.

    - I understood how the game works but I found it difficult matching positions 
            - Learnings: 
                - I knew I needed to use a combination of loops and conditionals to check the guess. This was both a syntactical issue and logical issue as previously I knew how to match whole words. Discovered that you can use the counter variable of [i] to match the position.
                - There are 2 cases of Matches (if Green or Yellow. If explicit it means green, if not in right position i used else to capture it, everything else is grey)