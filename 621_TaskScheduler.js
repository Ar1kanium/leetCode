// time : 1h 10 mins

// algo: we need to increment counter and decrement appearances of tasks, from max one, to lowest, but in range n.
//   if no available task, just increment counter. have a variable for counting idles of last cycle, we need to 
//   substract that value from our counter to have final answer

// comments: remember! [...Object.values()]

// task: Given a characters array tasks, representing the tasks a CPU needs to do, where each letter 
// represents a different task. Tasks could be done in any order. Each task is done in one unit of time. 
// For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks 
// (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

var leastInterval = function(tasks, n) {
  if (!n) return tasks.length
  let counter = 0
  let appearanceCount = {}
  tasks.forEach(element => {
    if (appearanceCount.hasOwnProperty(element)) appearanceCount[element]++
    else appearanceCount[element] = 1
  });
  let countOfDiffTasks = [...Object.values(appearanceCount)].sort((a, b) => b - a)
  let lastIdle = 0
  while (countOfDiffTasks.length) {
    lastIdle = 0
    for (let i = 0; i< n+1; i++) {
      if (countOfDiffTasks[i]) {
        countOfDiffTasks[i]--
        counter++
      }
      else {
        counter++
        lastIdle++
      }
    }
    countOfDiffTasks.sort((a, b) => b-a)
    for (let i = countOfDiffTasks.length - 1; i>= 0; i--) {
      if (!countOfDiffTasks[i]) countOfDiffTasks.pop()
      else break
    }
  }
  return counter - lastIdle
};