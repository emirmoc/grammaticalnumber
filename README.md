# grammaticalnumber
"1 čovjek", "3 čovjeka", "5 ljudi".

A simple function determining whether a number (integer or floating point) is singular, plural, or paucal.

Paucal is used, among others, in Slavic languages, where certain numbers (2, 3, 4) may have a different grammatical form from other plural values. 

Additionally, in certain Slavic languages, all numbers ending in '1X' are considered plural, all multi-digit numbers ending in '1' are considered singular (except those ending in '11', which are considered plural).

The function determineGrammaticalNumber(value) accepts a positive or negative number and returns one of the following strings: 'singular', 'plural', or 'paucal'.

This string can then be used e.g. in determining which text to use with the number. In Bosnian and Croatian, one might say "1 čovjek", "3 čovjeka", "5 ljudi".

Examples of usage:  
determineGrammaticalNumber(301) will return the value 'singular'.  
determineGrammaticalNumber(9) will return the value 'plural'.  
determineGrammaticalNumber(23) will return the value 'paucal'.  

The function is written in JavaScript, and most of the algorithm can be translated to other programming languages.
