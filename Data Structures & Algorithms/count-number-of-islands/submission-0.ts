class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {

        let islands = 0;

        let vistedList = []

        function visit(row: number, col: number) {
            if (grid[row]?.[col] !== "1") return //if its water, gtfo
            if (vistedList.includes(`${row}:${col}`)) return // if visited, gtfo

            vistedList.push(`${row}:${col}`)

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
                    if (!vistedList.includes(`${row}:${col}`)) {
                        islands++
                        visit(row, col)
                    } 
                } else {
                    // water
                }
            }
        }

        console.log(islands)

        return islands

        


    }
}
