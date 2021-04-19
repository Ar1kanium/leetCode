// time : 1h 55min
// algo : Create a string, we will put an answer there. Let's pick out substring 
//    with length of k or length of num, depending which one is less. Find the 
//    smallest value, put it in answer, replace in original string with ''.
//    repeat, while k > 0 or we have smth in num. 
// 
// comments : my first version, using arrays, was out of time. But for this one,
//   LeetCode shows, that it faster than 100% of JS solutions, never seen smth like
//   this, proud of myself LOL
// 
// task: Given a string num representing the digits of a very large integer and an integer k.

// You are allowed to swap any two adjacent digits of the integer at most k times.

// Return the minimum integer you can obtain also as a string.

let minInteger = function(num, k) {
  let ans = '' 
  while (k > 0 && num !== '') {  
    if (num[0] === '0') {
      ans += '0'
      num = num.replace('0', '')
      continue
    }
    let subStr = num.slice(0, Math.min(num.length, k + 1))
    let findVal = '0123456789'
    let minVal
    for (let i = 0; i < 10; i++) {
      if (subStr.indexOf(findVal[i]) !== -1) {
        minVal = findVal[i]
        break
      }
    }
    ans += minVal
    let ind = subStr.indexOf(minVal)
    k -= ind
    num = num.replace(minVal, '')
      
  }
  return ans + num
  }

