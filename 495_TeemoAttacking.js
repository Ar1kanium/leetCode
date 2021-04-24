// time : 7 mins

// algo: let's iterate through timeSeries array and increment minimal value of duration and [i] - [i-1]

// comments: pretty easy task, no idea, why it is medium

// task: You are given an integer array timeSeries and an integer duration. Our hero Teemo has attacked
// an enemy where the ith attack was done at the timeSeries[i]. When Teemo attacks their enemy, the
// enemy gets poisoned for duration time (i.e., the enemy is poisoned for the time interval
// [timeSeries[i], timeSeries[i] + duration - 1] inclusive).

// Return the total time that the enemy is in a poisoned condition.

var findPoisonedDuration = function(timeSeries, duration) {
  let counter = duration
  if (timeSeries.length === 0) return 0
  for (let i = 1; i < timeSeries.length; i++) {
    counter+= Math.min(duration, timeSeries[i] - timeSeries[i-1]) 
  }
  return counter
};