// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/
var intToRoman = function(num) {
    const romanArray = []
    const romanObj = {
        1000: "M",
        900: "CM",
        500:"D",
        400:"CD",
        100:"C",
        90:"XC",
        50:"L",
        40:"XL",
        10:"X",
        9:"IX",
        5:"V",
        4:"IV",
        1:"I"
    }
    const romanMap = new Map(Object.entries(romanObj).sort(([a],[b])=>b - a))
    let target = num;
    while(target>0){
        for(const [key,value] of romanMap){
            if(target >= +key) {
                romanArray.push(value)
                target -= (+key);
                break;
            }
        }
    }
    return romanArray.join("")
};