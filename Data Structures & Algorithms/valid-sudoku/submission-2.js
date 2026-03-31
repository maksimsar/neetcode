class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++ ) {
                let value = board[r][c];
                let BoxInd = Math.floor(c / 3) * 3 + Math.floor(r / 3);
                let Row = `r ${r} has ${value}`;
                let Box = `b ${BoxInd} has ${value}`;
                let Col = `c ${c} has ${value}`;
                if (value != '.') {
                    if (seen.has(Row) || seen.has(Box) || seen.has(Col)) {
                        return false;
                    } else {
                        seen.add(Row);
                        seen.add(Box);
                        seen.add(Col);
                    }

                }

                
            }
        }
        return true;
    }
}
