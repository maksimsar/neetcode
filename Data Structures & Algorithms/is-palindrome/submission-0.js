class Solution {

    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let l = 0;
        let r = cleaned.length - 1;
        while (l < r) {
            if (cleaned[l] == cleaned[r]) {
                l += 1;
                r -= 1;
            } else {
                return false;
            }

        }
        return true;
    }
}
