// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


/*

The substitution() function in the src/substitution.js file has three parameters:

    input refers to the inputted text to be encoded or decoded.
    alphabet refers to substitution alphabet.
    encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, keep the following constraints and rules in mind:

    The input could include spaces and letters as well as special characters such as #, $, *, etc.
    Spaces should be maintained throughout.
    Capital letters can be ignored.
    The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
    All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

*/
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const original = 'abcdefghijklmnopqrstuvwxyz'

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    if(alphabet.length !== 26) return false
    if([...new Set(alphabet)].length !== alphabet.length) return false

    let res = ""
    input = input.toLowerCase()

    for(char of input){
      if(char === " "){
        res += " "
      }else{
        res += encode ? alphabet[original.indexOf(char)] : original[alphabet.indexOf(char)] 
      }
    }

    return res

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
