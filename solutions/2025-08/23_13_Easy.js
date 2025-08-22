// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
    let answer = 0;
    const romanObj = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    const edgeObj = {
        "I" : ["V","X"],
        "X" : ["L","C"],
        "C" : ["D","M"]
    }

    for(let i=0;i<s.length;i++){
        const current = s[i]
        const value = romanObj[current]
        const next = s[i+1]
        if(edgeObj[current] && edgeObj[current].includes(next)){
            answer -=value;
            continue
        }
        answer += value    
    }
    
    return answer
};