// weekly contest

var maxDistance = function(nums1, nums2) {
  let maxDist = 0
  let opInd = 0
  let clInd = 0
  while (opInd < nums1.length && clInd < nums2.length) {
    if (opInd <= clInd && nums1[opInd]<= nums2[clInd]) {
      maxDist = Math.max(maxDist, clInd - opInd)
      clInd++
      continue
    }
    if (nums1[opInd] > nums2[clInd]) {
      if (opInd < clInd) opInd++
      else clInd++
      continue
    }
  }
  return maxDist
};