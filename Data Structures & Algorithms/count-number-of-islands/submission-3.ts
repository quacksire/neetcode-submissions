class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {

        let islands = 0;

        let vistedList = new Set<string>()

        function visit(row: number, col: number) {
            if (grid[row]?.[col] !== "1") return //if its water, gtfo
            if (vistedList.has(`${row}:${col}`)) return // if visited, gtfo

            vistedList.add(`${row}:${col}`)

            visit(row - 1, col) // up
            visit(row + 1, col) // down
            visit(row, col - 1) // left
            visit(row, col + 1) // right

        }

        for (let row = 0; row < grid.length; row++ ) {


            for (let col = 0; col < grid[row].length; col++) {

                // every cell time

                if (grid[row][col] === "1") {
                    // island
                    if (!vistedList.has(`${row}:${col}`)) {
                        islands++
                        visit(row, col)
                    } 
                } else {
                    // water
                }
            }
        }

        return islands

        


    }
}
