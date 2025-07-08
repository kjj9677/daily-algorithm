// 134. Gas Station
// https://leetcode.com/problems/gas-station/description/
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length
    const gaps = Array.from({length:n}).fill(0)
    gas.forEach((fill,index)=>gaps[index] = fill - cost[index])
    
    let target = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        if(sum+gaps[i] <0) {
            target = i+1
            sum = 0;
        } else {
            sum +=gaps[i]
        }
    }
    if(target ===n) return -1

    for(let i=0;i< target;i++){
        if(sum + gaps[i]<0) return -1
        sum += gaps[i]
    }

    return target
};
