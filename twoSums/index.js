// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const nums = [2,7,11,15]
const target = 9
// created a function that receives two parameters nums and target
function twoSum(nums, target){
    // as i need to return the index of both numbers i created an empty objetc to storage it in every interaction 
    const sumTargetFinderObj = {}

    // i created a for loop, so i can go throug the role array
    for (let i = 0; i < nums.length ; i++){
        // as we know in match to discovery the x in 2 - x = 9 we just need to isolate the x and it would be 9 -> the target less - the number that i'm positioned while lopping, and i storage the result in this variable called complementNumber
        const complementNumber = target - nums[i]
        // here i check if the complementNumber exist in the sumTargetFinderObj, if it does, it means that i found the result of the equation exist in my given nums Arr
        if (complementNumber in sumTargetFinderObj){
            // so i return the index of te number i have just found, and the index of the number that i'm lopping now
            return [sumTargetFinderObj[complementNumber], i]
        }
        
        sumTargetFinderObj[nums[i]] = i
    }

    return []
}

twoSum(nums, target)