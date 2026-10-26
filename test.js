
// Create 1: Insert at the end
const nums = [1,2,3,11];
nums[nums.length] = 10;
console.log("nums", nums)

// Create 2: Insert at the beginning
function unshift(nums, new1) {
    const temp = []
    temp[0] = new1;
    for (let i=0; i<= nums.length-1; i++) {
        temp[i+1] = nums[i]
    }
    return nums
}
console.log(unshift(nums, 9), "=====", nums) // but why base array is unchanged


// Create 3: Insert at a specific index
function insertSpecificIndex(nums, val, index) {
    let temp = [];
    const length = nums.length-1;
    for (let i=0; i<= length+1; i++) {
        if (index < i) {
            nums[i] =  nums[i-1];
            continue;
        }
        if (index === i) {
            nums[i]=val;
            continue;
        }
        nums[i] =nums[i]
    }
    return nums
}

let val = 'mid';
let index = 5;
console.log(insertSpecificIndex(nums, val, index), "---", nums)


// Create 4: Handle insertion boundaries
// i did not get the problem

let arr = []
arr[1000000000000] = 5
arr[100000] =9
console.log("arr", arr[100000], arr)