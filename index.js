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

    const stringValue = value.toString();
    const ultimateDigit = parseInt(stringValue[stringValue.length - 1]);
    const penultimateDigit = parseInt(stringValue[stringValue.length - 2]);

    if (ultimateDigit === 1 && penultimateDigit !== 1) {
      return singularValue;
    } else if (ultimateDigit >= 2 && ultimateDigit <= 4 && penultimateDigit !== 1) {
      return paucalValue;
    } else {
      return pluralValue;
    }
  }
