// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
The polybius() function in the src/polybius.js file has two parameters:

    input refers to the inputted text to be encoded or decoded.
    encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, keep the following constraints and rules in mind:

    You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
    When encoding, your output should still be a string.
    When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
    Spaces should be maintained throughout.
    Capital letters can be ignored.
    The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.

*/

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const letterToNumMapping = {};
  const NumToLetterMapping = {};

  const mapping = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];

  for (i in mapping) {
    const aIndex = parseInt(i) + 1;

    for (y in mapping[i]) {
      const letter = mapping[i][y];

      const bIndex = parseInt(y) + 1;
      const num = `${aIndex}${bIndex}`;

      letterToNumMapping[letter] = num;
      NumToLetterMapping[num] = letter;
    }
  }

  function polybius(input, encode = true) {
    input = input.toLowerCase();

    let res = "";

    if (encode) {
      for (letter of input) {
        if (/[a-z]/.test(letter)) {
          if (letter === "i" || letter === "j") letter = "(i/j)";
          res += letterToNumMapping[letter];
        } else {
          res += letter;
        }
      }
    } else {
      if (input.replace(" ", "").length % 2 !== 0) return false;

      let i = 0;

      while (i < input.length) {
        const char = input[i];

        if (char === " ") {
          res += " ";
          i += 1;
          continue;
        }

        const num = `${input[i]}${input[i + 1]}`;
        res += NumToLetterMapping[num];
        i += 2;

      }
    }

    return res;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
