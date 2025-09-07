// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0])
    const length = intervals.length
    const answerArray = []
    let start = intervals[0][0];
    let end = intervals[0][1];
    for(let i=1;i<length;i++){
        const target = intervals[i] 
        if(target[0] > end){
            answerArray.push([start,end])
            start = target[0]
            end = target[1]
            continue;
        }
        end = Math.max(end, target[1])
    }
    
    answerArray.push([start,end])
    return answerArray
};