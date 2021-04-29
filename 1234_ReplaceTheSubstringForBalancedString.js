// time : 14 mins + reading about sliding window

// algo: we need an object with counts of excess letters. first iteration take place for this
// purpose. than, let's iterate once again. we should have 2 pointers, between them there 
// should be all excess letters. we need minimal distance between two pointers. 

// comments: sliding window algo is pretty obvious, but here it is a little bit complicated

// task: You are given a string containing only 4 kinds of characters 'Q', 'W', 'E' and 'R'.
// A string is said to be balanced if each of its characters appears n/4 times where n is the
// length of the string.
// Return the minimum length of the substring that can be replaced with any other string of
// the same length to make the original string s balanced.
// Return 0 if the string is already balanced.


var balancedString = function(s) {
  let maxLet = s.length / 4
  let appearanceCount = {'Q' : 0, 'W': 0, 'E': 0, 'R': 0}
  let needToRepl = {'Q': 0, 'W': 0, 'E': 0, 'R':0}
  for (let i = 0; i<s.length; i++) {
    if (appearanceCount[s[i]] < maxLet) appearanceCount[s[i]]++
    else needToRepl[s[i]]++
  }
  let counter = Infinity
  let start = 0
  for (let i = 0; i<s.length; i++) {
    needToRepl[s[i]]--
    while (start < s.length && needToRepl['Q'] < 1 && needToRepl['E'] < 1 && needToRepl['W'] < 1 && needToRepl['R'] < 1) {
      counter = Math.min(counter, i - start + 1)
      needToRepl[s[start]]++
      start++
    }
  }
  return counter
};