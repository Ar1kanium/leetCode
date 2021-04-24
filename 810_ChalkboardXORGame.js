// time : 26 mins

// algo: u can always erase number different from current XOR, cause there are at least two 
//  different numbers(otherwise, XOR = 0). so, if length of numbers is even, or XOR already
// == 0, then return true

// comments: i didn't find algo by myself, just implement and understand(hopefully) solution

// task: We are given non-negative integers nums[i] which are written on a chalkboard.  Alice and Bob 
// take turns erasing exactly one number from the chalkboard, with Alice starting first.  If erasing 
// a number causes the bitwise XOR of all the elements of the chalkboard to become 0, then that 
// player loses.  (Also, we'll say the bitwise XOR of one element is that element itself, and 
// the bitwise XOR of no elements is 0.)

// Also, if any player starts their turn with the bitwise XOR of all the elements of 
// the chalkboard equal to 0, then that player wins.

// Return True if and only if Alice wins the game, assuming both players play optimally.


var xorGame = function(nums) {
    return (!nums.reduce((a, b) => a^b) || nums.length % 2 === 0)
};