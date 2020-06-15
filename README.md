# grammaticalnumber
A simple function determining whether a number is singular, plural, or paucal. 

Paucal is used, among others, in Slavic languages, where certain numbers (2, 3, 4) may have a different grammatical form from other plural values. Additionally, integers ending in '11' are considered singular in Slavic languages.

The function determineGrammaticalNumber(value) accepts a positive or negative integer and returns one of the following strings: 'singular', 'plural', or 'paucal'.

This string can then be used e.g. in determining which resource should be used with the number.

Examples of usage:  
determineGrammaticalNumber(301) will return the value 'singular'.  
determineGrammaticalNumber(-9) will return the value 'plural'.  
determineGrammaticalNumber(23) will return the value 'paucal'.  
