class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {

        // make sure everything is sorted
        intervals.sort((a, b) => a[0] - b[0])


        let overlap: number[][] = [];
        let curr = intervals[0];

        for(let i = 1; i < intervals.length; i++) {
            let next = intervals[i]

            if (next[0] <= curr[1]) {
                curr = [
                    Math.min(curr[0], next[0]),
                    Math.max(curr[1], next[1])
                ]   
            } else {
                overlap.push(curr)
                curr = next
            }

        }

        overlap.push(curr)


        return overlap


    }
}
// Car Fleet