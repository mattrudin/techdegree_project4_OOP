// Phrases array. Can be changed.
const phrases = [
    `Hello you`,
    `How are you`,
    `What do you do`,
    `Do you like javascript`,
    `I dont like java`
]

// Game instance
let game;

// EventListener for the start button
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game(phrases);
    game.startGame();
})

// EventListener for the onScreen keyboard
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', event => {
    const letter = event.target.textContent; 
    if(letter.length === 1) game.handleInteraction(event);
})