/**
 * Represents a Phrase.
 * @constructor
 * @param {string} phrase - Phrase for the game. Will be converted to lower case.
 */

class Phrase {
    constructor(phrase) {
        this._phrase = phrase.toLowerCase();
        this._letterCounter = 0;
    }

    /**
     * Getter method for _phrase.
     * @returns {string} _phrase
     */
    getPhrase() {
        return this._phrase;
    }

    /**
     * Getter method for _letterCounter.
     * @returns {number} _letterCounter
     */
    getLetterCounter() {
        return this._letterCounter;
    }

    /**
      * Increases _letterCounter attribute by 1.
      * @returns {void}
      */
    increaseLetterCounter() {
        this._letterCounter ++;
    }

    /**
     * Adds the phrase to the HTML file
     * @returns {void}
     */
    addPhraseToDisplay() {
        const phrase = this.getPhrase();
        const list = this.formatPhraseToList(phrase);
        const div = document.getElementById("phrase");
        if(div.firstElementChild) {
            div.firstChild.remove();
        } else {
            div.appendChild(list);
        }
    }

    /**
     * Checks if the given letter is matched within the phrase
     * @param {string} character
     * @returns {boolean} if the phrase contains the letter
     */
    checkLetter(character) {
        return this.getPhrase().includes(character);
    }

    /**
     * Reveals the matched letters on the HTML file
     * @returns {void}
     */
    showMatchedLetter(letter) {
        const letters = document.getElementsByClassName(`${letter}`);
        for(let i = 0; i < letters.length; i++) {
            const letterClassList = letters[i].classList;
            letterClassList.remove('hide');
            letterClassList.add('show');
        }
    }

    /**
     * Formats the input string to a list element
     * @param {string} phrase 
     * @returns {nodeObject} formated list
     */
    formatPhraseToList(phrase) {
        const phraseArr = phrase.split("");
        let ul = document.createElement('ul');
        for(let i = 0; i < phraseArr.length; i++) {
            const letter = phraseArr[i];
            let className;
            let li = document.createElement('li');

            if(letter === " ") {
                className = `space`;
            } else {
                className = `hide letter ${letter}`;
                this.increaseLetterCounter();
            }

            li.className = className;
            li.textContent = letter;
            ul.appendChild(li);
        }
        return ul;
    }

    /**
     * Resets all Letter divs to 'hide'
     * @returns {void}
     */
    resetLetters() {
        const letters = document.getElementsByClassName(`letter`);
        for(let i = 0; i < letters.length; i++) {
            const letterClassList = letters[i].classList;
            letterClassList.remove('show');
            letterClassList.add('hide');
        }
    }
}