// time : 9 mins

// algo: logx(y) is equal(almost) Math.log(y) / Math.log(x). let's round and check, if n is not 0 and 3^x === n

// comments: additional challenge was to not use recursion or cycles, so i used some time to find math solution:)

// task : Given an integer n, return true if it is a power of three. Otherwise, return false.

//  An integer n is a power of three, if there exists an integer x such that n == 3x.


var isPowerOfThree = function(n) {
  let x = Math.round(Math.log(n) / Math.log(3))
  return (3 ** x === n && n !== 0 )
};