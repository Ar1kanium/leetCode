// time : 52 mins

// algo: let's create comparison array. we will push there arrays, which are not subsets.
//  cause of all subarrays are different with at least 1 element, longest ones can't be
//  subsets, so push them to compatison array. next candidate will be an array with second
//  max length, let's iterate through comparison array to check that it is not a subset.
//  repeat.

// comments: 

// task: Given the array favoriteCompanies where favoriteCompanies[i] is the list of favorites 
// companies for the ith person (indexed from 0).

// Return the indices of people whose list of favorite companies is not a subset of any 
// other list of favorites companies. You must return the indices in increasing order.

var peopleIndexes = function(favoriteCompanies) {
  let answ = favoriteCompanies.map((i) => i.length + 1)
  let answer = []
  let comparingArray = []
  let maxLength = Math.max(...answ)
  cycleStart:
  while (maxLength > 1) {
    while (answ.indexOf(maxLength) != -1) {
      let comp = favoriteCompanies[answ.indexOf(maxLength)]
      nextComparison:
      for (let i = 0; i<comparingArray.length; i++) {
        for (let j = 0; j < comp.length; j++) {
          if (comparingArray[i].indexOf(comp[j]) === -1) continue nextComparison
        }
        answ[answ.indexOf(maxLength)] = false
        maxLength = Math.max(...answ)
        continue cycleStart
      }
      comparingArray.push(comp)
      answ[answ.indexOf(maxLength)] = true
      maxLength = Math.max(...answ)
    }
  }
  for (let i =0; i<answ.length; i++) {
    if (answ[i]) answer.push(i)
  }
  return answer
};