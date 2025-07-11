// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
var insert = function(intervals, newInterval) {
    const n = intervals.length
    if(n===0) return [[...newInterval]]
    const [newStart,newEnd] = newInterval
    const answerArray = []

    if(newEnd < intervals[0][0] ) return [newInterval,...intervals]
    if(newStart > intervals[n-1][1] ) return [...intervals,newInterval]
    let flag= false;
    let tempStart = -1;
    let tempEnd = -1;
    intervals.forEach(([start,end])=> {
        if(end < newStart){
            answerArray.push([start,end])
        } else if(start > newEnd ){
            if(tempStart>=0){
                flag=true;
                answerArray.push([tempStart,tempEnd])
                tempStart = -1;
                tempEnd = -1;
            } else if(!flag) {
                flag=true
                answerArray.push([newStart,newEnd])
            }
            answerArray.push([start,end])
        } else if(tempStart >=0){
            if(end >=tempEnd){
                flag=true
                tempEnd = end
                answerArray.push([tempStart,tempEnd])
                tempStart = -1;
                tempEnd = -1;
            }
        } else {
            tempStart = Math.min(start, newStart)
            tempEnd = Math.max(end,newEnd)
            if(end >=newEnd){
                flag=true
                answerArray.push([tempStart,tempEnd])
                tempStart = -1;
                tempEnd = -1;
            }
        }
    })
    
    if(tempEnd >= 0) answerArray.push([tempStart,tempEnd])
    return answerArray
};
