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

        //let windowSize;   // how BIG is the window?
        //let start;        // WHERE does the window begin?
        //let windowSum;    // what's the SUM inside it?
        let best; // best sum

        // [4, -1, 2, 7]

        // [4, -1] 2, 7

        let windowSize = 2;
        let start = 0;
        let windowSum = 0;

        let sum = 0;

        for (let i = 0; i <= nums.length; i++) {
            windowSum = windowSum - nums[i - 1] + nums[i + windowSize - 1];

            if (windowSum > best) {
                best = windowSum;
            }
        }

        return sum;
    }
}
