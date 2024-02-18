
/**
 * 
 * Input: s = "babad"
 * Output: "bab"
 * 
 * @param {string} str 
 */
const longestPalindrome = function(str) {
    if (str === null || str.length < 1) return "";
    
    let start = 0;
    let end = 0;

    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter(str, i, i);
        let len2 = expandAroundCenter(str, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return str.substring(start, end + 1);
}

const expandAroundCenter = (s, left, right) => {
    let L = left;
    let R = right;
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}

console.log(longestPalindrome("badad"))