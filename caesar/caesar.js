const caesar = function(sentence, rawOffset) {
    const offset = rawOffset % 26;
    return sentence.replace(/([a-zA-Z])/g, shiftTheLetter(offset));
};

const zSpot = char => (char >= 65 && char <= 90) ? 90 : 122;

function shiftTheLetter(offset) {
    return function shift(match) {
        const letterValue = match.charCodeAt(0);
        let cipherLetterValue = letterValue + offset;
        if (cipherLetterValue < 65) cipherLetterValue += 26;
        if (cipherLetterValue > zSpot(letterValue)) cipherLetterValue -= 26;
        return String.fromCharCode(cipherLetterValue);
    };
}

module.exports = caesar;
