/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr;
    for(let i=0;i<nums.length;i++)
    {
        let first=nums[i];
        if(nums.length === 1)
        {
            arr=nums[i];
            return arr;
        }
        for(let j=0;j<nums.length;j++)
        {
            if(first=nums[j])
            {
                count ++;
            }
        }
        if(count == 1)
        {
            arr=first;
            return arr;
        }
    }
    return -1;
}