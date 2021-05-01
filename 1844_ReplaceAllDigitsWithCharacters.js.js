// time : BiweeklyContest

// algo: let's iterate through string, if ind % 2 === 0, that means we need to simply add s[ind] to our answer, if not,
// let's have a charcode of prev letter and sum it with current digit, after it tramsform that to letter again and incr 
// to answer

// comments: spent 10 minutes to understood what did they want from, what a shame. !!TRICKY MOMENT!!: don't forget to transform
// digit to number, cause it is string in the first place and we will have something strange in answer otherwise:)

// task: You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.


var replaceDigits = function(s) {
  let answ = ''
  for (let i=0; i<s.length; i++) {
    if (i % 2 === 0) answ += s[i]
    else {
      answ += String.fromCharCode(s[i-1].charCodeAt(0) + +s[i])
    }
  }
  return answ
};