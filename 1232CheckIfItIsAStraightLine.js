// time : 31 mins

// algo: simple math equation of straight line y = ax + b. let's find a and b using first two
//  points, then check other points to satisfy equation. Don't forget to look at case, where
//  x1 === x2 separately

// comments: ashamed of myself for sparing so much time, all of that separate case, where x1===x2

// task: You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the
//  coordinate of a point. Check if these points make a straight line in the XY plane.

var checkStraightLine = function(coordinates) {
  let [x1, y1, x2, y2] = [coordinates[0][0], coordinates[0][1], coordinates[1][0], coordinates[1][1]]
  a = (y1 - y2)/ (x1 - x2)
  b = y1 - a * x1
  for (let i = 2; i < coordinates.length; i++) {
    if (x1 - x2 === 0) {
      if (coordinates[i][0] != x1) return false
    }
    if (x1 - x2 !== 0) {
      if (coordinates[i][1] != a * coordinates[i][0] + b) return false
    }
  }
  return true
};