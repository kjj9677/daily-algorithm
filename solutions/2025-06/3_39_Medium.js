// LeetCode 39. Combination Sum
// https://leetcode.com/problems/combination-sum/description/

var combinationSum = function(candidates, target) {
    const sorted = candidates.sort((a,b)=> a - b)
    let answer = [];
    const getCombo = (startIndex,cur, tar) => {
        if(tar ===0) return answer.push(cur)
        let currentValue = sorted[startIndex]
        if(currentValue > tar) return;
        if(currentValue === tar) {
            return answer.push([...cur, currentValue]);
        }

        for(let i=startIndex; i < sorted.length ;i++){
            if(tar - sorted[i] < 0) break;
            getCombo(i,[...cur, sorted[i]], tar - sorted[i])            
        }
    }

    getCombo(0,[],target)
    return answer
};