/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrases = [
    `Hello you`,
    `How are you`,
    `What do you do`,
    `Do you like javascript`,
    `I dont like java`
]

let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    game = new Game(phrases);
    game.startGame();
})

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', event => {
    const letter = event.target.textContent; 
    if(letter.length === 1) game.handleInteraction(event);
})