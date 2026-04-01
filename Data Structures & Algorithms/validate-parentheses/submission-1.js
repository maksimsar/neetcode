class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let open = "{[(";
        for (let x of s) {
            if (open.includes(x)) {
                stack.push(x);
            } else {
                let deleted = stack.pop();
                if (x == '}') {
                    if (deleted != '{') {
                        return false;
                    }
                }
                if (x == ')') {
                    if (deleted != '(') {
                        return false;
                    }
                }
                if (x == ']') {
                    if (deleted != '[') {
                        return false;
                    }
                }
            }
        }
        if (stack.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
