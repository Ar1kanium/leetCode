// time : 1h for the first try, 44mins sec try
// algo: first of all, let's create an object, letters from strings will be keys, and we will iterate through
// given string to find amount of times letter appeared. next, let's iterate once again, now we compare letter 
// with prev one and pop prev, if current letter < prev and appearances > 0, so we will have a possibility to
// put this letter further. repeat comparing, until we didnt delete letter on current step. push letter in
// a final array, if there is no duplicate (in debugging, added for checking last letter)   

// comments: first try was a failure, i used wrong algo. after it i googled solution, took a break and tried again,
// used a little bit different approach, comparing to googled one solution.

// task : Return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.
// Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

var smallestSubsequence = function(s) {
  let appearanceCount = {}
  let finArr = []
  for (let i = 0; i < s.length; i++) {
    if (appearanceCount.hasOwnProperty(s[i])) {
      appearanceCount[s[i]]++}
    else appearanceCount[s[i]] = 1
    }
  for (let i = 0; i < s.length; i++) {
    appearanceCount[s[i]] = appearanceCount[s[i]] - 1
    if (!finArr.length) {
      finArr.push(s[i])
      continue
    }
    let flag = true
    while (flag && finArr.indexOf(s[i]) === -1) {
    flag = false
    let lastEl = finArr[finArr.length-1]
    if (s[i] < lastEl && appearanceCount[lastEl]) {
      finArr.pop()
      flag = true
      } 
    }
    if (finArr.indexOf(s[i]) === -1) {
      finArr.push(s[i])
    }
  } return finArr.join('')
}