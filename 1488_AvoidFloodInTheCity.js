// time : failed timer:(

// algo: let's have an object and track last rain over every lake. also, let's create an array for keeping
//  records of indexes, where we can dry lakes. let's iterate through initial array, if we need to dry lake,
//  let's find, if we have a suitable index in dryArray (it must be in interval of last track in object and
//  current i) and do it. In the end, we need to get rid of remaining indexes in dryArrow. 

// comments: first try was timedout, found and interprete idea of solution of another person

// task: Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains
// over the nth lake, the nth lake becomes full of water. If it rains over a lake which is full of water, 
// there will be a flood. Your goal is to avoid the flood in any lake.

// Given an integer array rains where:

// rains[i] > 0 means there will be rains over the rains[i] lake.
// rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
// Return an array ans where:

// ans.length == rains.length
// ans[i] == -1 if rains[i] > 0.
// ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
// If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

// Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, 
// nothing changes. (see example 4)

var avoidFlood = function(rains) {
  let floodedLakes = {}
  let dryInd = []
  for (let i = 0; i < rains.length; i++) {
    if (!rains[i]) {
      dryInd.push(i)
    }
    else {
      if (!floodedLakes.hasOwnProperty(rains[i])) {
        floodedLakes[rains[i]] = i
        rains[i] = -1
        continue
      }
      if (floodedLakes[rains[i]] || floodedLakes[rains[i]] === 0) {
        let flag = false
        for (let j = 0; j<dryInd.length; j++) {
          if (dryInd[j]<i && dryInd[j]>floodedLakes[rains[i]]) {
            rains[dryInd[j]] = rains[i]
            floodedLakes[rains[i]] = i
            dryInd.splice(j , 1)
            rains[i] = -1
            flag = true
            break
          }
        }
        if (flag) continue
        if (!flag) return []
      }
    }
  }
  dryInd.forEach(element => {
    rains[element] = 1
  });
  return rains
};