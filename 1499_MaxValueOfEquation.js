// time : first try failed, sec try >1h

// algo: as a matter of fact, |xi - xj|, as xj>xi equal to xj - xi. so, our equation is yi - xi + yj + xj
// let's create an array, we will put there values from points [y-x, x], y - x, to have a sum, and x to check
// if sum of x's less or equal to given k. then, let's iterate through points array, shift value, if sum of 
// x's more than k, find result with val at [0], pop values, if (y-x) > (y-x)last (so we have max in the [0])

// comments: found solution, rebuilt and understood (hopefully)

// task : Given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, 
// where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.
// Find the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k and 1 <= i < j <= points.length. 
// It is guaranteed that there exists at least one pair of points that satisfy the constraint |xi - xj| <= k.



var findMaxValueOfEquation = function(points, k) {
  let arr = []
  let result = -Infinity
  for (let [x, y] of points) {
    while (arr.length && x - arr[0][1] > k) {
      arr.shift()
    }
    if (arr.length) result = Math.max(result, (x + y + arr[0][0]))
    while (arr.length && y-x > arr[arr.length-1][0]) {
      arr.pop()
    }
    arr.push([y-x, x])
  }
  return result
};