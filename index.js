const singularValue = 'singular';
const paucalValue = 'paucal';
const pluralValue = 'plural';

function determineGrammaticalNumber(value) {
    // In Slavic languages:
    // Singular numbers end with 1, except when they end with 11
    // Paucal numbers end with 2, 3, 4, except when they end with 12, 13, 14
    // Plural numbers end with 0, 5-19
    
    // Making sure logic works for negative values
    if (value < 0) {
      value = -value;
    }

    // Making sure logic works for non-integer numbers
    let stringValue = value.toString();
    if (stringValue.includes('-')) {
        stringValue = stringValue.split('-')[1];
    }
    
    // Retrieving last digit (0 if it does not exist)
    const ultimateDigitString = parseInt(stringValue[stringValue.length - 1], 10);
    const ultimateDigit = !Number.isNaN(ultimateDigitString) ? ultimateDigitString : 0;

    // Retrieving digit before last (0 if it does not exist)
    const penultimateDigitString = parseInt(stringValue[stringValue.length - 2], 10);
    const penultimateDigit = !Number.isNaN(penultimateDigitString) ? penultimateDigitString : 0;

    if (ultimateDigit === 1 && (stringValue.length === 1 || penultimateDigit !== 1)) {
      return singularValue;
    } else if (ultimateDigit >= 2 && ultimateDigit <= 4 && penultimateDigit !== 1) {
      return paucalValue;
    } else {
      return pluralValue;
    }
  }
