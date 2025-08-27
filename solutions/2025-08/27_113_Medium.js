// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/description/
const isLeaf = (node)=> node.left === null && node.right === null

var pathSum = function(root, targetSum) {
    const answer = []
    if(!root) return answer
    const dfs = (node, target,path)=>{
        if(isLeaf(node)){
            if(node.val === target){
                path.push(target)
                answer.push([...path])
                path.pop()
            }
            return;
        }
        path.push(node.val)
        if(node.left) dfs(node.left, target - node.val, path)
        if(node.right) dfs(node.right, target - node.val, path)
        path.pop()

    }

    dfs(root, targetSum,[])
    return answer 
};