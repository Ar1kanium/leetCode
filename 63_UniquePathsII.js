// time : 44 mins

// algo: Robot can move right or down only, so, let's track, how many different ways of reaching point
//  it has. for point[i][j] = point [i-1][j] + point[i][j-1]. left-top point mark with one, all points 
//  met with 1 in val let's mark as 0(1 marked as obstacles in problem) return right-bot point

// comments: two much errors during solving cause of inattentiveness:(

// task : A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right
//  corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0 
  if (obstacleGrid.length === 1 && obstacleGrid[0].length === 1) {
    return (obstacleGrid[0][0]) ? 0 : 1
  }
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (!i && !j) {
        obstacleGrid[i][j] = 1
        continue
      }
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
        continue
      }
      if (!i) {
        obstacleGrid[i][j] = obstacleGrid[i][j-1]
        continue
      }
      if (!j) {
        obstacleGrid[i][j] = obstacleGrid[i-1][j]
        continue
      }
      obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};