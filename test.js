// const s = "0P";
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// const nums = [-1]
// var maxSubArray = function(nums) {
//     let count = 0;
//     let length = nums.length - 1;
//     let minlength = nums.length - 1;
//     let maxlength = nums.length - 1;
//     let max = 100;
//     for (let j=0; j<= length; j++){
//         let min =  length-minlength;
//         for (let i = min; i <= maxlength; i++) {
//             count = nums[i] + count
//         }
//         minlength--;
//         j > 0 ? maxlength-- : null;
//         console.log(count)
//         max = count > max? count: max;
//         count = 0;
//     }
//     return max
// };

// console.log(maxSubArray(nums ))


// ==============================================================================================

// Function to check whether any pair exists
// whose sum is equal to the given target value
function twoSum(arr, target)
{
    // Sort the array
    let left = 0, right = arr.length - 1;
    // Iterate while left pointer is less than right
    while (left < right) {
            left++;
            right--;
    }
    // If no pair is found
    return false;
}

let arr = [ 1, 1, 0, 1, 2, 1, 1, 0, 1, 2, 1, 1, 0, 1, 2 ];
let target = 2;

// Call the twoSum function and print the result
if (twoSum(arr, target)) {
    console.log("true");
} else {
    console.log("false");
}











