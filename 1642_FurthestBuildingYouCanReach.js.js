// time : 15 mins

// algo: keep track of biggest buildings height differences, using array with length = ladders. decrease min height
//  difference from bricks count, return last i value, if bricks < 0

// comments: 

// task : You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

// While moving from building i to building i+1 (0-indexed),

// If the current building's height is greater than or equal to the next building's height, you do not need 
// a ladder or bricks. If the current building's height is less than the next building's height, you can either
// use one ladder or (h[i+1] - h[i]) bricks. Return the furthest building index (0-indexed) you can reach if you
// use the given ladders and bricks optimally.

var furthestBuilding = function(heights, bricks, ladders) {
  let laddering = []
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] <= heights[i-1]) continue
    else {
      if (laddering.length < ladders) {
        laddering.push(heights[i] - heights[i-1])
        continue
      }
      else {
        let min = Math.min(...laddering)
        if (heights[i] - heights[i-1] > min) {
          laddering[laddering.indexOf(min)] = heights[i] - heights[i-1]
          bricks-= min
        }
        else bricks-= heights[i] - heights[i-1]
      }
    }
  if (bricks < 0) return i - 1
  }
  return heights.length - 1
};