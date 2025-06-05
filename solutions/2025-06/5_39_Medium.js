// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
// combo[i][j] = combo[i-1][j] + combo[i][j-nums[i]]를 이용한 dp 풀이 방식 사용
// 문제 조건 기준으로 기존 재귀적인 풀이보다 더 많은 시간 소요


var combinationSum = function(candidates, target) {
    const length = candidates.length
    candidates.sort((a,b)=> a - b)
    
    const combo = Array.from({ length }, () =>Array.from({ length: target+1 }, () => []))

    for(let i=0;i < length;i++){
        const value = candidates[i]
        for(let j=0; j< target+1;j++){            
            if(i===0){
                if(j===0 ||  j % value !==0) continue;
                const count = j / value
                const tempCombo = Array.from({length: count}).fill(value)
                combo[i][j].push(tempCombo)
            } else{
                
                const tempCombo = j-value > 0 ? combo[i][j-value].map((combination)=>([...combination,value]))   :  j-value === 0 ? [[value]] : []
                
                combo[i][j] = [...(combo[i-1][j]), ...tempCombo]
            }

        }
    }
    
    return combo[length-1][target]
};




