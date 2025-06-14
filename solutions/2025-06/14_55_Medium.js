// 55. Jump Game
// https://leetcode.com/problems/jump-game/
// 가능한 모든 인덱스에 도달할 선 있는지 확인하는 방식에서 도달 가능한 최대 인덱스를 추적하는 방식으로 시간 복잡도 개선
var canJump = function(nums) {
    const length = nums.length
    let maxIndex = 0;

    nums.forEach((num,index)=>{
        if(maxIndex >=index){
            maxIndex = Math.max(maxIndex, index + num)
        }
    })

    return maxIndex >= length -1
};

var canJump = function(nums) {
    const length = nums.length
    const isPossible = Array.from({length}).fill(false)
    isPossible[0] = true

    nums.forEach((num,index)=>{
        if(isPossible[index]){
            for(let i=1;i<=num;i++){
                isPossible[index+i] = true
            }
        }
    })

    return isPossible[length-1]
};

