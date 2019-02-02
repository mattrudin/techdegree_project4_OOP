/**
 * Represents the Game board
 * @constructor
 * @param {number} misses - Tracks the number of missed guesses by the player. Initial values is 0.
 * @param {array} phrases - Array of five Phrase objects to use with the game. 
 * @param {object} activePhrase -  Phrase object that’s currently in play. Initial value is null.
 */

 class Game {
     constructor(missed = 0, phrases, activePhrase = null) {
        this._missed = missed;
        this._phrases = phrases;
        this._activePhrase = activePhrase;
     }

     /**
      * Increases _missed attribute by 1.
      * @returns {void}
      */
     increaseMissed() {
         this._missed ++;
     }

     /**
      * Getter method for _missed.
      * @returns {number}
      */
     getMissed() {
         return this._missed;
     }

     /**
      * Getter method for _phrases.
      * @returns {array} - Phrases array
      */
     getPhrases() {
        return this._phrases;
     }

     /**
      * Setter method for phrase.
      * @param {object} - Phrase object
      * @returns {void}
      */
     setActivePhrase(phraseObj) {
        this._activePhrase = phraseObj;
     }

     /**
      * Getter method for activePhrase
      * @returns {object} - Phrase object
      */
     getActivePhrase() {
         return this._activePhrase;
     }

     /**
      * Starts the game and shows a random hidden phrase on the display.
      * @returns {void}
      */
     startGame() {
        this.hideOverlay();
        const phrase = this.getRandomPhrase();
        this.setActivePhrase = new Phrase(phrase);
        const phraseObj = this.getActivePhrase();
        phraseObj.addPhraseToDisplay();
     }

     /**
      * Gets a random phrase of the _phrases array.
      * @returns {string} - Random phrase
      */
     getRandomPhrase() {
        const phraseArr = this.getPhrases();
        const phraseArrLen = phraseArr.length;
        const randomNumber = Math.floor(Math.random() * phraseArrLen);
        return phraseArr[randomNumber];
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

     /**
      * Hides the overlay on the HTML
      * @returns {void}
      */
     hideOverlay() {
         const overlay = document.getElementById("overlay");
         overlay.style.display = "none";
     }
 }