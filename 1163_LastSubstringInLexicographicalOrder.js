// time : 29 min 1st vers, 1h 16min 2nd vers
// algo : let's define two counters, i for index of potential answer, j for comparing
//  if s[j] > s[i], obv, i = j; if s[i] === s[j] let's compare next letters, 
//  , create new variables for that, find out, if there is a higher order letter further.
//  !!! Don't forget to refresh j, when comparing interval leaves original interval window,
//  to not have timeout.
//  
// 
// comments :  22/27 cases, timeout, 2nd try again faster that 100%... was so
//  good to feel myself as a genius :feelsBadMan:
// 
// task: Given a string s, return the last substring of s in lexicographical order.
// First try:
// let alOrder = 'zyxwvutsrqponmlkjihgfedcba'
// let lastSubstring = function(s) {
//   let findLast = (substr = '') => {
//     for (let i = 0; i < alOrder.length; i++) {
//         if (s.indexOf(substr + alOrder[i]) === -1) continue
//         substr += alOrder[i]
//         if (s.indexOf(substr) === s.lastIndexOf(substr)) return substr
//         return findLast(substr)
//       }
//     }
//     return s.slice(s.indexOf(findLast()))
// };
//

let lastSubstring = function(s) {
  let [i, j] = [0, 1]
  while (j < s.length) {
    if (s[i] < s[j]){
      i = j
    }
    if (s[i] === s[j]) {
      let [a, b] = [i + 1, j + 1]
      while (a < j && b < s.length) {
        if (s[a] > s[b]) break
        if (s[b] > s[a]) {
          i = j
          break
        }
        if (s[a] === s[b]){
          a++
          b++
        }
      }
      j = b - 1
    }
    j++to refresh j, when  to not have timeout.
  }  
  return s.slice(i)
}