class Solution {
    encode(strs) {
        let res = '';
        for (let s of strs) {
            res += s.length + '#' + s;
        }
        return res;
    }

    decode(str) {
        let res = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            res.push(str.substring(i, i + length));

            i += length;
        }
        
        return res;
    }
}
