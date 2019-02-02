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
        const phrase = this.getPhrase();
        const phraseArr = phrase.split("");
        const start = `<div id="phrase" class="section"> <ul>`;
        const end = `</ul> </div>`;
        let li = phraseArr.reduce((acc, char) => 
            char === " " 
            ? acc + `<li class="space"> </li>` 
            : acc + `<li class="hide letter ${char}">${char}</li>`, start);
        li += end;
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