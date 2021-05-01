// time : 1h 3mins

// algo: as we need only last index, let's just create an object and put there all variants of prefixes and suffixes of
// the word, separate them anyhow(here with '#'). in our function, let's return value of key, if undefined, return -1 

// comments: firstly i went for a naive approach that, surely, didn't work. took time to think about hints:)

// task : Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.
// Implement the WordFilter class:
// WordFilter(string[] words) Initializes the object with the words in the dictionary.
// f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix
// suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.

var WordFilter = function(words) {
  this.dictionary = {}
  words.forEach((word, i) => {
    for (let j = 0; j < word.length; j++) {
      let prefix = word.substring(0, j + 1)
      for (let z = word.length - 1; z >= 0; z-- ) {
        let suffix = word.substring(z)
        this.dictionary[`${prefix}#${suffix}`] = i
      }
    }
  });
};


WordFilter.prototype.f = function(prefix, suffix) {
  let key = `${prefix}#${suffix}`
  return this.dictionary[key] === undefined ? -1 : this.dictionary[key]
};