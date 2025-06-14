// LeetCode 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    let answer = []
    const digitMap = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"], 
    }

    digits.split("").forEach((target)=>{
        const temp = []
        const copied = [...answer]
        const targetArray = digitMap[target]
        const length = targetArray.length
        
        for(let i=0;i<length;i++){
            if(copied.length === 0){
                temp.push(targetArray[i])
            } else {
                copied.forEach((copy)=> temp.push(copy+ targetArray[i])) 
            }
        }
        answer = temp
    })
    return answer
};