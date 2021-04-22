// time : 1h 10mins
// algo: let's create a counter, iterate through the array with step +2, if value is not what we needed,
//  increment counter and change places of i+1 and wanted value. 

// comments: easy problem, but i waste to much time, thinking avout algo and then had issues with indexOf

// task : 

var minSwapsCouples = function(row) {
  let count = 0
  for (let i = 0; i < row.length; i+=2) {
    let wantedVal = row[i] % 2 === 0 ? row[i] + 1 : row[i] - 1
    if (row[i+1] != wantedVal) {
      count++
      let a = row.indexOf(wantedVal)
      let b = row[a]
      let c = row[i+1]
      row[a] = c
      row[i+1] = b
    }
  }
  
  return count
};