// time : 21 mins

// algo: create an arrays for accumulating x powers, y powers and for answer. find all x pows <= bound
// and y <= bound, be careful with values < 2. now lets have 2 cycles for finding all sums that <= bound,
// one cycle for iterating in xList, one for yList. if no such value in result yet and val <= bound, push.

// comments: should be REALLY CAREFUL with this '1' cases, especially during interview! 

// task: Given three integers x, y, and bound, return a list of all the powerful integers that have 
// a value less than or equal to bound.
// An integer is powerful if it can be represented as xi + yj for some integers i >= 0 and j >= 0.
// You may return the answer in any order. In your answer, each value should occur at most once.

var powerfulIntegers = function(x, y, bound) {
  let [xList, yList, finArr] = [[],[],[]]
  let i = 0 
  while (x ** i <= bound || y ** i <= bound) {
    if (x === 1 && y === 1) {
        xList = [1]
        yList = [1]
        break
    }
    if (x < 2 || y < 2) {
      if (x < 2) {
        if (y ** i <= bound) {
          yList.push(y ** i)
          i++
          continue
        }
        xList.push(x ** i)
        break
      }
      if (y < 2) {
        if (x ** i <= bound) {
          xList.push(x ** i)
          i++
          continue
        }
        yList.push(y ** i)
        break
      }
    }
    if (x ** i <= bound) xList.push(x ** i)
    if (y ** i <= bound) yList.push(y ** i)
    i++
  }
  for (let i = 0; i < xList.length; i++) {
    for (let j = 0; j < yList.length; j++) {
      let sum = xList[i] + yList[j]
      if (sum <= bound) {
        if (finArr.indexOf(sum) === -1) {
          finArr.push(sum)
        }
        continue
      }
      else break
    }
  }
  return finArr
};