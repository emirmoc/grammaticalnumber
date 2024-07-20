# grammaticalnumber
"1 čovjek", "3 čovjeka", "5 ljudi".

A function for determining whether a number (integer or floating point) should be treated as singular, plural, or paucal.

In Slavic languages such as Bosnian, Croatian, and Serbian, certain numbers (2, 3, 4) have a different grammatical form from other plural values. This form is called paucal.

Additionally, certain plural numbers, such as 11, are gramatically treated as singular.

The function determineGrammaticalNumber takes a positive or negative number as argument and returns one of the following strings: 'singular', 'plural', 'paucal'.

This string can then be used in determining which resource text to use with the number. In Bosnian and Croatian, one might write "1 čovjek", "3 čovjeka", or "5 ljudi".

Available as Node package from:
https://www.npmjs.com/package/grammaticalnumber

Install:
```
npm install grammaticalnumber
```

Examples of usage:
```
grammaticalnumber = require("grammaticalnumber");

grammaticalnumber(301); // returns 'singular'

grammaticalnumber(9);   // returns 'plural'

grammaticalnumber(23);  // returns 'paucal'
```

Special thanks to Emina Kamenarević and Alma Sarajlić for their linguistic guidance.
