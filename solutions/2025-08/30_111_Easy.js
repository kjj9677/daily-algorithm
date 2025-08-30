// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// 내풀이와 GPT를 이용한 두번째 풀이
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

var minDepth2 = function(root) {
  if (!root) return 0;

  const q = [[root, 1]];
  let head = 0;

  while (head < q.length) {
    const [node, d] = q[head++];

    if (!node.left && !node.right) return d;

    if (node.left)  q.push([node.left,  d + 1]);
    if (node.right) q.push([node.right, d + 1]);
  }
  return 0;
};