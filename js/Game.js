/**
 * Represents the Game board
 * @constructor
 * @param {number} misses - Tracks the number of missed guesses by the player. Initial values is 0.
 * @param {array} phrases - Array of five Phrase objects to use with the game. 
 * @param {object} activePhrase -  Phrase object that’s currently in play. Initial value is null.
 */

 class Game {
     constructor(phrases, missed = 0, activePhrase = null) {
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
      * @returns {array} Phrases array
      */
     getPhrases() {
        return this._phrases;
     }

     /**
      * Setter method for phrase.
      * @param {object} phraseObj
      * @returns {void}
      */
     setActivePhrase(phraseObj) {
        this._activePhrase = phraseObj;
     }

     /**
      * Getter method for activePhrase
      * @returns {object} Phrase object
      */
     getActivePhrase() {
         return this._activePhrase;
     }

     /**
      * Starts the game and shows a random hidden phrase on the display.
      * @returns {void}
      */
     startGame() {
        this.changeOverlay('none');
        const phrase = this.getRandomPhrase();
        this.setActivePhrase(new Phrase(phrase));
        const phraseObj = this.getActivePhrase();
        phraseObj.addPhraseToDisplay();
     }

     /**
      * Gets a random phrase of the _phrases array.
      * @returns {string} Random phrase
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
     handleInteraction(event) {
        const letter = event.target.textContent;
        const phrase = this.getActivePhrase();

        this.disableElement(event);
        if(phrase.checkLetter(letter)) {
            this.addClassToElement(event, 'chosen');
            phrase.showMatchedLetter(letter);
            if(this.checkForWin()) this.gameOver('win');
        } else {
            this.addClassToElement(event, 'wrong');
            this.removeLife();
        }
     }

     /**
      * Removes a life from the scoreboard
      * @returns {void}
      */
     removeLife() {
         this.increaseMissed()
         this.changePictureSrc();
         if(this.getMissed() >= 5) this.gameOver('lose');
     }

     /**
      * Checks to see if the player has revealed all of the letters in the active phrase.
      * @returns {boolean}
      */
     checkForWin() {
        const lettersLength = document.getElementsByClassName('show').length;
        const letterCounter = this.getActivePhrase().getLetterCounter();
        return lettersLength === letterCounter;
     }

     /**
      * Shows a winner or looser screen
      * @param {String} outcome win or lose
      * @returns {void}
      */
     gameOver(outcome) {
        this.changeOverlay('flex');
        this.addClassToOverlay(outcome);
     }

     /**
      * Changes the overlay on the HTML ('flex' or 'none')
      * @returns {void}
      */
     changeOverlay(display) {
         const overlay = document.getElementById("overlay");
         overlay.style.display = display;
     }

     addClassToOverlay(className) {
        const overlay = document.getElementById("overlay");
        overlay.style.className = className;
     }

     /**
      * Adds a class to an HTML element
      * @param {String} letter 
      * @param {String} className 
      * @returns {void}
      */
     addClassToElement(event, className) {
        event.target.classList.add(className);
     }

     /**
      * Disables the given element
      * @param {Object} event Event obj
      */
     disableElement(event) {
        event.target.setAttribute('disabled', 'disabled');
     }

     /**
      * Changes the picture source of the hearts image
      * @returns {void}
      */
     changePictureSrc() {
         const hearts = document.getElementsByClassName('tries');
         const heartsLength = hearts.length;
         const missed = this.getMissed();
         hearts[heartsLength - missed].firstChild.src='images/lostHeart.png';
     }
 }