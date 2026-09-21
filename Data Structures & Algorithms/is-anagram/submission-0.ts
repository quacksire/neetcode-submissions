class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        let sArray = s.split("")
        let tArray = t.split("")

        sArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        tArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

        return JSON.stringify(sArray) == JSON.stringify(tArray)

    }

}
