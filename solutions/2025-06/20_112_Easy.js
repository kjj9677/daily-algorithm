// 112. Path Sum
// https://leetcode.com/problems/path-sum/
const dfs = (start, targetSum)=>{
    if (!start.left && !start.right && start.val === targetSum) {
        return true;
    }

    if (!start.left && !start.right && start.val !== targetSum) {
        return false;
    }

    if (!start.left) {
        return dfs(start.right, targetSum-start.val);
    }

      if (!start.right) {
        return dfs(start.left, targetSum-start.val);
    }
    
    return dfs(start.left, targetSum-start.val) || dfs(start.right, targetSum-start.val) 
}

var hasPathSum = function(root, targetSum) {
    if(!root) return false
    
    return dfs(root,targetSum)
};