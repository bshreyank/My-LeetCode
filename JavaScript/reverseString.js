/*function reverseWords(input) {
  const words = input.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWords.join(" ");
}

const inputString = "Hello World";
const reversedString = reverseWords(inputString);
console.log(reversedString);
*/

//WITHOUT FUNCTION

function reverseWordsManually(input) {
  let reversedString = '';
  let currentWord = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ' || i === input.length - 1) {
      if (i === input.length - 1) {
        currentWord += input[i];
      }
      
      for (let j = currentWord.length - 1; j >= 0; j--) {
        reversedString += currentWord[j];
      }
      
      if (input[i] === ' ') {
        reversedString += ' ';
      }
      
      currentWord = '';
    } else {
      currentWord += input[i];
    }
  }

  return reversedString;
}

const inputString = "Hello World";
const reversedString = reverseWordsManually(inputString);
document.write(reversedString);
