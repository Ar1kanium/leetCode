// time : 47 mins

// algo: let's create a collection, for keeping all available values of y if key = x (using set)
// iterate through our initial array and collect data. then, let's look at every point with every
// other points. we need x1!=x2 and y1!=y2, these two points potentially create a diag of rectangle.
// obv, they are already in our collection, so let's check for another diag. if two other points 
// are in our sets, then we have a rectangle

// comments: fpund and rebuild solution. need to practice with maps more

// task: Given a set of points in the xy-plane, determine the minimum area of a rectangle formed
// from these points, with sides parallel to the x and y axes.
// If there isn't any rectangle, return 0.

var minAreaRect = function(points) {
  let minArea = Infinity
  let myMap = new Map()
  for (let [x, y] of points) {
    if (!myMap.has(x)) {
      myMap.set(x, new Set())
      myMap.get(x).add(y)
    }
    else myMap.get(x).add(y)
  }
  for (let [x1,y1] of points) {
    for (let [x2,y2] of points) {
      if (x1 === x2 || y1 === y2) continue
      if (myMap.get(x1).has(y2) && myMap.get(x2).has(y1)) minArea = Math.min(minArea, Math.abs(x2-x1) * Math.abs(y2-y1))
    }
  }
  return minArea === Infinity ? 0 : minArea

};