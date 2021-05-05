// time : 7 hrs

// algo: create an array length numCourses, with arrays of length numCourses filled with false inside.
// iterate in prerequisites array to initially change [0][1] values to true. go with Floyd-Warshall algo.
// create an asnwer array, push true, if true, false otherwise

// comments: several times timed out, finally read and implemented Floyd-Warshall algo, it works, dunno how.
// going to dig deeply and understand it right know

// task: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
// course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should 
// answer whether the course uj is a prerequisite of the course vj or not. Note that if course a is
// a prerequisite of course b and course b is a prerequisite of course c, then, course a is a prerequisite of course c.
// Return a boolean array answer, where answer[j] is the answer of the jth query.

var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  let a = [...new Array(numCourses)].map((_) => [...new Array(numCourses)].fill(false))
  for (let [dad, child] of prerequisites) {
    a[dad][child] = true
  }
  for (let k = 0; k < numCourses; k++) {
    for (let i = 0; i < numCourses;i++) {
      for (let j = 0; j< numCourses;j++) {
        a[i][j] = a[i][j] || (a[i][k] && a[k][j])
      }
    }
  }
  let answ = []
  for (let [dad, child] of queries) {
    a[dad][child] ? answ.push(true) : answ.push(false)
  }
  return answ
};