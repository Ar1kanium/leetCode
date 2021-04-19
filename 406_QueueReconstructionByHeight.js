// time : 1h 56min
// algo:  let's sort our array in descending order, first compare [0], after it
//  compare [1]. Create an array with needed length and 0's inside, for easy comparing
//  then let's start to put in our subarrays, first subarray[1] will be an index in
//  final array, but after it we need to iterate through our final array and skip
//  indexes (do not decrease counter), where subarray[0] less than current subarray[0]
//  if last[0] equal to current[0], lets define iterators from last point, otherwise
//  start from beginning.  
// comments: end of the day, very tired...
// task : You are given an array of people, people, which are the attributes of
//  some people in a queue (not necessarily in order). Each people[i] = [hi, ki] 
//  represents the ith person of height hi with exactly ki other people in front 
//  who have a height greater than or equal to hi.

// Reconstruct and return the queue that is represented by the input array people. 
// The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] 
// is the attributes of the jth person in the queue (queue[0] is the person at the 
// front of the queue).

var reconstructQueue = function(people) {
  let finArr = people.map((i) => 0)
  people.sort((a,b) => {
    if (a[0] > b[0]) {
      return 1}
    if (a[0] < b[0]) {
      return -1}
    if (a[1] > b[1]) {
      return 1
      }
    return -1
      })
  let lastVal = -1
  let lastPlace = -1
  for (let i = 0; i < people.length; i++) {
    let place = lastVal === people[i][0] ? lastPlace + 1 : 0
    let counter = lastVal === people[i][0] ? people[i][1] - people[i-1][1] - 1:people[i][1]
    while (counter || finArr[place]) {
      if (!finArr[place]) {
        counter--
        place++
        continue
      }
      place++
    }
    finArr[place] = people[i]
    lastVal = people[i][0]
    lastPlace = place
  }
  return finArr
};