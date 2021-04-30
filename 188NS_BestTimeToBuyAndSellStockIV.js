// time : > 2.5 hrs

// algo: create an array with similar length as prices and fill it with 0s. we need to iterate through prices array k times,
// for each time we will find the most profitable additional opportunity, if existed.

// comments: !solution found in comments and rebuilded(not rewrited), but i'm not sure i understood it fully and will repeat
// it during interview, for instance

// task: You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
// Find the maximum profit you can achieve. You may complete at most k transactions.
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

var maxProfit = function(k, prices) {
  if (!prices.length) return 0
  let profit = new Array(prices.length).fill(0)
  for (let j = 0; j < k; j++) {
    let min = prices[0]
    let max = 0
    for (let i = 1; i< prices.length; i++) {
      min = Math.min(min, prices[i] - profit[i])
      max = Math.max(max, prices[i] - min)
      profit[i] = max
    }
  }
  return profit[profit.length - 1]
};