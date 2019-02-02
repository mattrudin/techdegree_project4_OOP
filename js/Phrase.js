/**
 * Represents a Phrase.
 * @constructor
 * @param {string} phrase - Phrase for the game. Will be converted to lower case.
 */

class Phrase {
    constructor(phrase) {
        this._phrase = phrase.toLowerCase();
    }

    /**
     * Getter method for _phrase.
     * @returns {string} - Phrase
     */
    getPhrase() {
        return this._phrase;
    }

    /**
     * Adds the phrase to the HTML file
     * @returns {void}
     */
    addPhraseToDisplay() {

    }

    /**
     * Checks if the given letter is matched within the phrase
     * @param {string} - Character
     * @returns {boolean} - if the phrase contains the letter
     */
    checkLetter(character) {
        return this.getPhrase().includes(character);
    }

    /**
     * Reveals the matched letters on the HTML file
     * @returns {void}
     */
    showMatchedLetter() {
        
    }
}