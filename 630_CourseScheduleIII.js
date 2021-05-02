// time : 4 hrs

// algo: sort array in ascending deadlines order. create an array, we will put there days, needed to end course
// in ascending order as well. Create a special function for it. iterate in array, if we are not supposed to
// learn course before deadline, let's check, if there are a course, which needed more days in our array. 
// if there is, pop value (the biggest one, cause of ascending order), and put there current.

// comments: i started to learn heap data structure, cause i failed first time, solving this problem. But in the
// middle of studying idea came to me, that i can implement binary search to find index in ascending array. it
// worked, fortunately. still need to learn about heaps

// task : There are n different online courses numbered from 1 to n. You are given an daysQueueay courses where 
// courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi 
// days and must be finished before or on lastDayi.
// You will start on the 1st day and you cannot take two or more courses simultaneously.
// Return the maximum number of courses that you can take.


var scheduleCourse = function(courses) {
  courses.sort((a,b) => {
    return a[1] - b[1]
  })
  let daysQueue = []
  let daysSpent = 0
  let insertVal = (val) => {
    if (!daysQueue.length || val >= daysQueue[daysQueue.length - 1]) {
      daysQueue.push(val)
      return 
    }
    if (daysQueue.length === 1) {
      daysQueue.unshift(val)
      return
    }
    let [ceil, floor] = [daysQueue.length, -1]
    let counter = Math.floor((ceil + floor)/2)
    while (daysQueue[counter] !== val && ceil - floor !== 1 && ceil > 0 && floor < daysQueue.length - 1) {
      if (daysQueue[counter] > val) ceil = counter
      if (daysQueue[counter] < val) floor = counter
      counter = Math.floor((ceil + floor)/2)
    }
    if (daysQueue[counter] === val) {
      daysQueue = [...daysQueue.slice(0, counter), val, ...daysQueue.slice(counter)]
      return
    }
    if (ceil === floor + 1) {
      daysQueue = [...daysQueue.slice(0, ceil), val, ...daysQueue.slice(ceil)]
    }
  }

  for (let [days, deadline] of courses) {
    if (daysSpent + days <= deadline) {
      insertVal(days)
      daysSpent+= days
    }
    else {
      if (days >= daysQueue[daysQueue.length - 1] || !daysQueue.length) continue
      else {
        daysSpent+= days - daysQueue.pop()
        insertVal(days)
      }
    }
  }
  return daysQueue.length
};