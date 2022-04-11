// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


/*
The caesar() function in the src/caesar.js file has three parameters:

    input refers to the inputted text to be encoded or decoded.
    shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
    encode refers to whether you should encode or decode the message. By default it is set to true.

    When building the function, keep the following constraints and rules in mind:

    If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    Spaces should be maintained throughout, as should other nonalphabetic symbols.
    Capital letters can be ignored.
    If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).


*/

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const getShiftLetter = (letter,shift) => {

    let ans = alphabet.indexOf(letter) + shift

    if(ans < 0){
      ans += 26
    }

    if(ans > 25){
      ans -= 26
    }

    return alphabet[ans]

  }

  function caesar(input, shift=0, encode = true) {
    if(shift === 0 || shift < -25 || shift > 25) return false
    if(!encode) shift = shift * -1

    input = input.toLowerCase()

    let res = ""

    for(char of input){
      if((!(/[a-z]/).test(char))){
        res += char
        continue
      } 

      res += getShiftLetter(char,shift)
    }

    console.log(res)

    return res

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
