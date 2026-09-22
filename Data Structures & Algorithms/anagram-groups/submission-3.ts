class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let anagramArray: string[] = []

        strs.forEach(str => {
            anagramArray.push(str.split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join(""))
        })

        let groups: Map<string, Array<string>> = new Map()

        anagramArray.forEach((astr, i) => {
            if (groups.has(astr)) {
                let current = groups.get(astr)
                current.push(strs[i])
            } else {
                groups.set(astr, [strs[i]])
            }
        })

        

        return Array.from(groups.values())

        /**
         *  "key": [fdfdfd]
         *  "key2" [ddd, ddd]
         * 
         * [fdfdfd], [ddd, ddd]
         * 
         * 
         * 
         */

    }
}
