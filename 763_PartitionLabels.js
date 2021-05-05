// time : 8 mins

// algo: let's iterate through string, we need to find last index of every letter in our substring, 
// that index will be the end of our interval. declare counter to count current steps to push in answ array

// comments: pretty easy, why is it medium

// task: A string S of lowercase English letters is given. We want to partition this string into as 
// many parts as possible so that each letter appears in at most one part, and return a list of
// integers representing the size of these parts.

var partitionLabels = function(S) {
  let answ = []
  let counter = 1
  let i = 0
  let currentMax = -Infinity
  while (i < S.length) {
    currentMax = Math.max(currentMax ,S.lastIndexOf(S[i]))
    if (currentMax === i) {
      answ.push(counter)
      counter = 0
    }
    i++
    counter++
  }
  return answ
};