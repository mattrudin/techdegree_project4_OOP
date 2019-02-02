/**
 * Represents the Game board
 * @constructor
 * @param {number} misses - Tracks the number of missed guesses by the player. Initial values is 0.
 * @param {array} phrases - Array of five Phrase objects to use with the game. 
 * @param {string} activePhrase -  Phrase object that’s currently in play. Initial value is null.
 */

 class Game {
     constructor(missed = 0, phrases, activePhrase = null) {
        this._missed = missed;
        this._phrases = phrases;
        this._activePhrase = activePhrase;
     }

     /**
      * Getter method for _phrases
      * @returns {array} - Phrases array
      */
     getPhrases() {

     }

     /**
      * Setter method for phrase
      * @param {string} - Phrase string
      * @returns {void}
      */

     setActivePhrase() {

     }

     /**
      * Starts the game and shows a random hidden phrase on the display.
      * @returns {void}
      */
     startGame() {

     }

     /**
      * Gets a random phrase of the _phrases array and sets _activePhrase.
      * @returns {void}
      */
     getRandomPhrase() {

     }

     /**
      * Controls game logic
      * @returns {void}
      */
     handleInteraction() {

     }

     /**
      * Removes a life from the scoreboard
      * @returns {void}
      */
     removeLife() {

     }

     /**
      * Checks to see if the player has revealed all of the letters in the active phrase.
      * @returns {boolean}
      */
     checkForWin() {

     }

     /**
      * Shows a winner or looser screen
      * @returns {void}
      */
     gameOver() {

     }
 }