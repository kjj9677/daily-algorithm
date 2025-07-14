
// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
// 같은 O(n) 시간복잡도이지만, 더 간결한 코드로 작성할 수 있다.
var insert = function(intervals, newInterval) {
    const [newStart, newEnd] = newInterval;
    const result = [];
    let i = 0;
    const n = intervals.length;

    while (i < n && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }

    let [start, end] = newInterval;
    
    while (i < n && intervals[i][0] <= newEnd) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    result.push([start, end]);

    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};


// var insert = function(intervals, newInterval) {
//     const n = intervals.length
//     if(n===0) return [[...newInterval]]
//     const [newStart,newEnd] = newInterval
//     const answerArray = []

//     if(newEnd < intervals[0][0] ) return [newInterval,...intervals]
//     if(newStart > intervals[n-1][1] ) return [...intervals,newInterval]
//     let flag= false;
//     let tempStart = -1;
//     let tempEnd = -1;
//     intervals.forEach(([start,end])=> {
//         if(end < newStart){
//             answerArray.push([start,end])
//         } else if(start > newEnd ){
//             if(tempStart>=0){
//                 flag=true;
//                 answerArray.push([tempStart,tempEnd])
//                 tempStart = -1;
//                 tempEnd = -1;
//             } else if(!flag) {
//                 flag=true
//                 answerArray.push([newStart,newEnd])
//             }
//             answerArray.push([start,end])
//         } else if(tempStart >=0){
//             if(end >=tempEnd){
//                 flag=true
//                 tempEnd = end
//                 answerArray.push([tempStart,tempEnd])
//                 tempStart = -1;
//                 tempEnd = -1;
//             }
//         } else {
//             tempStart = Math.min(start, newStart)
//             tempEnd = Math.max(end,newEnd)
//             if(end >=newEnd){
//                 flag=true
//                 answerArray.push([tempStart,tempEnd])
//                 tempStart = -1;
//                 tempEnd = -1;
//             }
//         }
//     })
    
//     if(tempEnd >= 0) answerArray.push([tempStart,tempEnd])
//     return answerArray
// };
