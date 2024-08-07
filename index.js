// In Slavic languages:
// Singular numbers end with 1, except when they end with 11
// Paucal numbers end with 2, 3, 4, except when they end with 12, 13, 14
// Plural numbers end with 0, 5-19

function determineGrammaticalNumber(value) {
    const singularValue = 'singular';
    const paucalValue = 'paucal';
    const pluralValue = 'plural';

    const stringValue = value !== undefined && value !== null ? value.toString() : 0;
    
    // Retrieving last digit (0 if it does not exist)
    const ultimateDigitString = stringValue.length > 0 ? parseInt(stringValue[stringValue.length - 1], 10) : 0;
    const ultimateDigit = !Number.isNaN(ultimateDigitString) ? ultimateDigitString : 0;

    // Retrieving digit before last (0 if it does not exist)
    const penultimateDigitString = stringValue.length > 1 ? parseInt(stringValue[stringValue.length - 2], 10) : 0;
    const penultimateDigit = !Number.isNaN(penultimateDigitString) ? penultimateDigitString : 0;

    if (ultimateDigit === 1 && penultimateDigit !== 1) return singularValue;
    if (ultimateDigit >= 2 && ultimateDigit <= 4 && penultimateDigit !== 1) return paucalValue;
    return pluralValue;
  }

  module.exports = determineGrammaticalNumber
