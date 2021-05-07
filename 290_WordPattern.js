// time : 18 mins

// algo: create 2 dictionaries, iterate through initial strings(i used arrays), check keys and values,
// add new keys and values in case of first appearance.

// comments: got stacked cause of inadvertency, and firstly i wanted to solve it using only 1 dictionary
// obv, got caught with 'abc' 'b a c' case

// task : Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

var wordPattern = function(pattern, s) {
  let words = s.split(' ')
  let letters = pattern.split('')
  if (words.length !== letters.length) return false
  let dictWords = new Map()
  let dictLetters = new Map()
  for (let i = 0; i < words.length; i++) {
    if (!dictWords.has(words[i]) && !dictLetters.has(letters[i])) {
      dictWords.set(words[i], letters[i])
      dictLetters.set(letters[i], words[i])
      continue
    }
    else {
      if (dictWords.get(words[i]) === letters[i] && dictLetters.get(letters[i]) === words[i]) {
        continue
      }
      return false
    }
  }
  return true
};

