// LeetCode 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function(s) {

    const map = new Map();
    let maxLen = 0, start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map.has(char) && map.get(char) >= start) {
            maxLen = Math.max(maxLen, i - start);
            start = map.get(char) + 1;
        }
        map.set(char, i); 
    }

    maxLen = Math.max(maxLen, s.length  - start );
    return maxLen;
};