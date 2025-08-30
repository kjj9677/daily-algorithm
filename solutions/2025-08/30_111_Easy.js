// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/
var minDepth = function(root) {
    if(!root) return 0

    let answer = 1;
    let queue = [root]
    while(queue.length>0){
        let temp = []
        for(let i=0; i<queue.length;i++){
            if(!queue[i].left && !queue[i].right){
                return answer
            } else {
                if(queue[i].left) temp.push(queue[i].left)
                if(queue[i].right) temp.push(queue[i].right)
            }
        }
        answer++;
        queue = temp
    }

    return answer
};