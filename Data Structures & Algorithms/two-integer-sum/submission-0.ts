class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {


        // [i, j]
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) == target) {
                    let obj = [i, j]
                    return obj
                }
            }
        }
        return []
    }
}
