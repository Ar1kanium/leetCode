// time : 

// algo: 

// comments: 

// task : You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent 
// the digits of two numbers. You are also given an integer k.
// Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits
// from the same array must be preserved.
// Return an array of the k digits representing the answer.




// var maxNumber = function(nums1, nums2, k) {
//   let finArr = []
//   let countVal = nums1.length + nums2.length - k
//   mainCycle:
//   while (k && nums1.length && nums2.length) {
//     let maxVal1 = Math.max(...nums1.slice(0, countVal + 1))
//     let maxVal2 = Math.max(...nums2.slice(0, countVal + 1))
//     let indOfMaxVal1 = nums1.indexOf(maxVal1)
//     let indOfMaxVal2 = nums2.indexOf(maxVal2)
//     k--
//     if (maxVal1 > maxVal2) {
//       finArr.push(maxVal1)
//       nums1 = nums1.slice(indOfMaxVal1 + 1)
//       countVal = nums1.length + nums2.length - k
//       continue
//     }
//     if (maxVal2 > maxVal1) {
//       finArr.push(maxVal2)
//       nums2 = nums2.slice(indOfMaxVal2 + 1)
//       countVal = nums1.length + nums2.length - k
//       continue
//     }
//     if (maxVal1 === maxVal2) {
//       let j = 1
//       let a = [...nums1,...nums2]
//       let b = [...nums2,...nums1]
//       let flag = true
//       while (flag) {
//         while (a[indOfMaxVal1 + j] === b[indOfMaxVal2 + j]) {
//           j++
//           k--
//         }
//         // may cause problems here 
//         if (k <= 0) return [...finArr, a.slice(indOfMaxVal1, indOfMaxVal1 + (j+k))] 
//         else {
//           let stInd1 = indOfMaxVal1
//           let stInd2 = indOfMaxVal2
//           a = a.slice(indOfMaxVal1 + j)
//           b = b.slice(indOfMaxVal2 + j)
//           countVal = a.length + b.length - k
//           maxVal1 = Math.max(...a.slice(0, countVal + 1))
//           maxVal2 = Math.max(...b.slice(0, countVal + 1))
//           indOfMaxVal1 = nums1.indexOf(maxVal1)
//           indOfMaxVal2 = nums2.indexOf(maxVal2)
//           if (maxVal1 > maxVal2) {
//             flag = false
//             finArr = [...finArr, ...nums1.slice(stInd1, stInd1 + j)]
//             nums1 = nums1.slice(stInd1 + j)
//             if (indOfMaxVal1 + j >= nums1.length) {
//               j = indOfMaxVal1 + j - nums1.length
//               finArr = [...finArr, ...nums2.slice(0, j + 1)]
//               nums2 = nums2.slice(j+1)
//             }
//           }
//           if (maxVal2 > maxVal1) {
//             flag = false
//             finArr = [...finArr, ...nums2.slice(stInd2, stInd2 + j)]
//             nums2 = nums2.slice(stInd2 + j)
//             if (indOfMaxVal2 + j >= nums2.length) {
//               j = indOfMaxVal2 + j - nums2.length
//               finArr = [...finArr, ...nums1.slice(0, j + 1)]
//               nums1 = nums1.slice(j+1)
//             }
//           }
//         }
//       }
//       countVal = nums1.length + nums2.length - k
//     }
//   }
//   while (k) {
//     if (nums1.length) {
//       if (k === nums1.length) {
//         return finArr = [...finArr, ...nums1]
//       }
//       else {
//         countVal = nums1.length - k
//         maxVal1 = Math.max(...nums1.slice(0, countVal + 1))
//         indOfMaxVal1 = nums1.indexOf(maxVal1)
//         finArr.push(maxVal1)
//         nums1 = nums1.slice(indOfMaxVal1 + 1)
//         k--
//       }
//     }
//     else {
//       if (k === nums2.length) {
//         return finArr = [...finArr, ...nums2]
//       }
//       else {
//         countVal = nums2.length - k
//         maxVal2 = Math.max(...nums2.slice(0, countVal + 1))
//         indOfMaxVal2 = nums2.indexOf(maxVal2)
//         finArr.push(maxVal2)
//         nums2 = nums2.slice(indOfMaxVal2 + 1)
//         k--
//       }
//     }
//   }

//   return finArr
// };