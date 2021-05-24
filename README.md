# grammaticalnumber
"1 čovjek", "3 čovjeka", "5 ljudi".

A function for determining whether a number (integer or floating point) is singular, plural, or paucal.

In Slavic languages such as Bosnian, Croatian, and Serbian, certain numbers (2, 3, 4) have a different grammatical form from the other plural values. This form is called paucal.

The function determineGrammaticalNumber takes a positive or negative number as argument and returns one of the following strings: 'singular', 'plural', 'paucal'.

This string can then be used in determining which message text to use with the number. In Bosnian and Croatian, one might write "1 čovjek", "3 čovjeka", "5 ljudi".

Examples of usage:
determineGrammaticalNumber(301); // returns 'singular'
determineGrammaticalNumber(9);   // returns 'plural'
determineGrammaticalNumber(23);  // returns 'paucal'

