class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let seen = new Set();
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let value = board[r][c];
            
            if (value !== '.') {
                // Индекс подквадрата 3x3
                let boxInd = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                
                let row = `r${r}${value}`;
                let col = `c${c}${value}`;
                let box = `b${boxInd}${value}`;

                if (seen.has(row) || seen.has(col) || seen.has(box)) {
                    return false;
                }

                seen.add(row);
                seen.add(col);
                seen.add(box);
            }
        }
    } 
    return true;
}
}