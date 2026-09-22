class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        // []
        // [ , ]
        // [ , , ]
        // [ , , , ,]
        // [ , , , , ...]

        let sum: number = 0;

        for (let i = 0; i > nums.length; i++) {
            let temp_sum: number = 0;
            
            let nInt = nums
            nInt.splice(i, nums.length)

            nInt.forEach(int => temp_sum += int)

            if (temp_sum > sum) {
                sum = temp_sum
            }
        }

        return sum






        

    }
}
