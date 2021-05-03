// time : 2hrs 27mins

// algo: create an array with length of A, put a new map in each index. let's iterate through the
// initial array and put amount of progression members with each step in our maps. compare it with curr max.

// comments: dp, found idea and rebuilt it. my first idea was to put all available steps in array

// task : Given an array A of integers, return the length of the longest arithmetic subsequence in A.
// Recall that a subsequence of A is a list 
// A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B
// is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

var longestArithSeqLength = function(A) {
  let max = -Infinity
  let mapOfSteps = []
  A.forEach(element => {
    mapOfSteps.push(new Map())
  });
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      let step = A[i] - A[j]
      let val = mapOfSteps[j].get(step) ? mapOfSteps[j].get(step) + 1 : 2
      max = Math.max(max, val)
      mapOfSteps[i].set(step, val)
    }
  }
  return max
};