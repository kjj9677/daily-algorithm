// 1048. Longest String Chain
// https://leetcode.com/problems/longest-string-chain/
// 카카오 디벨로퍼스 코딩테스트 2번 문제
var longestStrChain = function(words) {
    const n = words.length
    words.sort((a,b)=>a.length-b.length)
제
    let answer = 1;
    const chainLengthMap = new Map()

    for(let i=0; i<n;i++){
        let max = 1
        const length = words[i].length

        for(let j=0;j<length;j++){
            const target = words[i].slice(0,j) + words[i].slice(j+1)
            const chainLength = (chainLengthMap.get(target) ?? 0) + 1
            max = Math.max(max, chainLength)
        } 
        chainLengthMap.set(words[i], max)
        answer = Math.max(answer, max)
    }
    return answer 
};