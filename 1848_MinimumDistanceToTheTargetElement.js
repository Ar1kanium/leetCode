// contest

var getMinDistance = function(nums, target, start) {
  let counter = 0;
  while (true) {
      if (start + counter < nums.length && nums[start + counter] === target) return counter   
      if (start - counter >= 0 && nums[start - counter] === target) return counter 
      counter++
  }
};