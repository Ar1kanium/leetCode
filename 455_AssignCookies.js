// time : 28 mins
// algo: sort both of arrays, iterate through size arrow, find max <= val in g arrow.
//  delete this appearance, save floor for next iterations, since our arrays are sorted

// comments: decided to use here binary search, just for speed and training

// task : Assume you are an awesome parent and want to give your children some cookies.
//  But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child 
// will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the
//  cookie j to the child i, and the child i will be content. Your goal is to maximize the number
//   of your content children and output the maximum number.

var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a-b)
  s = s.sort((a, b) => a-b)
  let answ = 0
  let lastFloor = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (!g.length) break
    if (s[i] >= g[g.length - 1]) {
      g.pop()
      answ++
      continue
    }
    if (s[i]<g[0]) break
    let ceil = g.length-1
    let floor = lastFloor? lastFloor: 0
    while (ceil - floor != 1) {
      let counter = Math.round((ceil + floor) / 2)
      if (g[counter] > s[i]) {
        ceil = counter
        continue
      }
      if (g[counter] < s[i]) {
        floor = counter
        continue
      }
      floor = counter
      break
    }
    g.splice(floor, 1)
    answ++
  }
  return answ
}