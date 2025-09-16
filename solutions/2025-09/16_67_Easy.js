// 67. Add Binary
// https://leetcode.com/problems/add-binary/
var addBinary = function(a, b) {
    let m = a.length -1
    let n = b.length -1
    let add = 0;
    const reversed = []
    while(m >=0 || n >=0) {
        const sum = +(a[m] ?? 0) + +(b[n] ?? 0) + add 

        switch(sum){
            case 3 : {
                add = 1;
                reversed.push(1)
                break;
            }
            case 2 : {
                add = 1;
                reversed.push(0)
                break;
            }
            case 1 : {
                add = 0;
                reversed.push(1)
                break;
            }
            case 0 : {
                add = 0;
                reversed.push(0)
                break;
            }
        }
        m--;
        n--;
    }
    if(add) {
        reversed.push(add)
    }
    const length = reversed.length
    const answer = reversed.map((s,index)=> reversed[length-1-index]).join("")
    return answer
};