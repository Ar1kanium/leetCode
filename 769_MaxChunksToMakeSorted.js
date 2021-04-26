// time : 17 mins

// algo: we need array values in chunks to be equal to indexes, to have a possibility to sort.
//  so let's iterate and assign the lowest value to variable, which will be a border of our cycle.
//  if all is ok, lets decrease our array, increase counter and repeat

// comments: here i walked from the end of the array, but i just realised, i also could've start from
//  the beginning, the difference will be, that i would've find max instead of min, and arr.slice(nInd + 1)

// task : Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array 
// into some number of "chunks" (partitions), and individually sort each chunk.  After concatenating them,
// the result equals the sorted array.

// What is the most number of chunks we could have made?

var maxChunksToSorted = function(arr) {
  let counter = 0
  while (arr.length) {
    let nInd = arr.length - 1
    for (let i = arr.length - 1; i >= nInd; i--) {
     nInd = Math.min(arr[i], nInd)
    }
    counter++
    arr = arr.slice(0, nInd)
  }
  return counter
};