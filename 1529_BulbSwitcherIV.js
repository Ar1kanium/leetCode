// time : 8 mins

// algo: we need to count how much times digit in string is not similar as digit before, but if 1st digit is 
// 1 we should increase counter anyway.

// comments: 3 failed submissions, what a shame! do not hurry! btw, should be in easy section

// task : There is a room with n bulbs, numbered from 0 to n - 1, arranged in a row from left to right. 
// Initially, all the bulbs are turned off.
// Your task is to obtain the configuration represented by target where target[i] is '1' if the ith
// bulb is turned on and is '0' if it is turned off.
// You have a switch to flip the state of the bulb, a flip operation is defined as follows:
// Choose any bulb (index i) of your current configuration.
// Flip each bulb from index i to index n - 1.
// When any bulb is flipped it means that if it is '0' it changes to '1' and if it is '1' it changes to '0'.
// Return the minimum number of flips required to form target.


var minFlips = function(target) {
  let counter = 1
  let started = false
  for (let i = 0; i<target.length; i++) {
    if (target[i] == 1 && !started) {
      started = true
      continue
    }
    if (started && target[i] != target[i-1]) counter++
  }
  return started ? counter : 0
};