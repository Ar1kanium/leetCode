// time : 1h 42 min
// algo : creating equal distribution between uniform numbers by using formula:
//  !!!randx() + x*(randx() - 1), we can use any interval, with max /10 = uni, but the biggest dig
//  is better for speed 
// comments :  !!!!didn't find an answer by myself, googled algo
// task : Given the API rand7() that generates a uniform random integer in the range [1, 7], 
// write a function rand10() that generates a uniform random integer in the range [1, 10]. 
// You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.
// Each test case will have one internal argument n, the number of times that your implemented function rand10() 
// will be called while testing. Note that this is not an argument passed to rand10().

var rand10 = function() {
  let a =  rand7() + 7 * (rand7() - 1)
  if (a > 40) return rand10()
  return a % 10 + 1
};