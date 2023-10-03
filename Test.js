// Given a sentence with multiple lowercase words separated by spaces,
// write a Javascript function that finds and returns the longest word in the sentence.
// If there are multiple words of the same length, choose one that has the highest number
// of vowels. Ignore any character in the sentence that is not an English letter or a space.
// Find the most efficient way to achieve this.

// Sample input:

// “Smart people learn from everything and everyone, average people from their experience,
// stupid people already, have all the answers” (Socrates)

// Sample output: “experience”

// Explanation:

// Longest words are “everything” and “experience”, but the second has the most vowels

Solution: function findLongestWord(sentence) {
  // Remove non-letter characters and split the sentence into words
  const words = sentence.replace(/[^a-z\s]/gi, "").split(" ");

  // Initialize variables to store the longest word and its vowel count
  let longestWord = "";
  let maxVowels = 0;

  // Iterate through each word in the array using a for loop
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // Calculate the number of vowels in the current word
    const vowelCount = word.match(/[aeiou]/gi)
      ? word.match(/[aeiou]/gi).length
      : 0;

    // Check if the current word is longer than the longest word found so far
    // or if it has the same length but more vowels
    if (
      word.length > longestWord.length ||
      (word.length === longestWord.length && vowelCount > maxVowels)
    ) {
      longestWord = word;
      maxVowels = vowelCount;
    }
  }

  return longestWord;
}

// Test case  scenarios:
const sentence1 =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

const basicsentence2 = "The quick brown lizard";

const longSentence =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const noVowels = "Myth";

const specialChar = "Hello! World? How are you doing?";

const multipleLongWordsWithVowels =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers.";

const mixedInput = "The QuIck bRoWn FoX";

const emptySentence = "";

const numbersInput = "The price is $1000.";

// Output
console.log(findLongestWord(sentence1));
console.log(findLongestWord(basicsentence2));
console.log(findLongestWord(longSentence));
console.log(findLongestWord(specialChar));
console.log(findLongestWord(mixedInput));
console.log(findLongestWord(emptySentence));
console.log(findLongestWord(emptySentence));
console.log(findLongestWord(numbersInput));
