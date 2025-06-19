// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
var isSymmetric = function(root) {
    const leftQueue = [root.left]
    const rightQueue = [root.right]

    while(leftQueue.length > 0 && rightQueue.length > 0 ) {
        const leftTarget = leftQueue.shift()
        const rightTarget = rightQueue.shift()
        if(leftTarget === null && rightTarget === null) continue;
        if(leftTarget?.val !== rightTarget?.val) {
            return false
        }
        leftQueue.push(leftTarget.left)
        leftQueue.push(leftTarget.right)
        rightQueue.push(rightTarget.right)
        rightQueue.push(rightTarget.left)
    }

    return true;
};