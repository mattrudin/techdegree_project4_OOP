/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrases = [
    `Hello you`,
    `How are you`,
    `What do you do`,
    `Do you like javascript`,
    `I don't like java`
]


const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
    const game = new Game(phrases);
    game.startGame();
})