function findLongestWord(sentence) {
    const words = sentence
      .match(/[a-zA-Z]+/g);
  
    if (!words) {
      return "";
    }
  
    let longestWord = "";
    let maxVowelCount = 0;
  
    for (const word of words) {
      const vowelCount = word.split("").filter(char => "aeiou".includes(char)).length;
      if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowelCount)) {
        longestWord = word;
        maxVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "\"Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers\" (Socrates)";

  const longestWord = findLongestWord(sentence);
  console.log(longestWord);

//   Basic Test Case:
//   Input: "Smart people learn from everything"
//   Output: "everything"

//   Equal Length Words with Vowels:
//   Input: "The quick brown fox jumps over the lazy dog"
//   Output: "quick"

//   No Vowels in Any Word:
//   Input: "Hmmm, why try?"
//   Output: "hmmm"

//   Mixed Case Sentence:
//   Input: "HeLlO wOrLd"
//   Output: "HeLlO"

//   Special Characters and Punctuation:
//   Input: "Word with! special-characters@ and punctuations."
//   Output: "punctuations"

//   Sentence with Numbers:
//   Input: "The year is 2023"
//   Output: "year"

//   Empty Input:
//   Input: ""
//   Output: ""

//   Sentence with Multiple Spaces:
//   Input: " Multiple spaces "
//   Output: "Multiple"