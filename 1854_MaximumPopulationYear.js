// weekly contest

var maximumPopulation = function(logs) {
  let births = []
  let deaths = []
  for (let i =0; i< logs.length; i++) {
    births.push(logs[i][0])
    deaths.push(logs[i][1])
  }
  births.sort((a,b) => a-b)
  deaths.sort((a,b) => a-b)
  let peopCounter = 0 
  let firstMaxYear = -Infinity
  let curMax = -Infinity
  for (let year = births[0]; year <= deaths[deaths.length - 1]; year++) {
    while (year === births[0]) {
      peopCounter++
      births.shift()
    }
    while (year === deaths[0]) {
      peopCounter--
      deaths.shift()
    }
    if (peopCounter > curMax) {
      firstMaxYear = year
      curMax = peopCounter
    }
  }
  return firstMaxYear
};