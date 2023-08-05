function reverseWords(input) {
  const words = input.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversedWords.join(" ");
}

const inputString = "Hello World";
const reversedString = reverseWords(inputString);
console.log(reversedString);
