// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
var mergeKLists = function(lists) {
    const k = lists.length
    if(k===0) return null;

    const cur = lists.map((head)=> head)
    let head = null;
    let currentNode = null;
    while(true){
        let minIndex;
        let minNode;
        cur.forEach((head,index)=>{
            if(!minNode){
                minNode = head;
                minIndex = index;
            } else {
                if(head && minNode.val > head.val){
                    minNode = head;
                    minIndex = index;
                }
            }
        })  
        if(!minNode) break;
        cur[minIndex] = minNode.next
        if(!head){
            head = minNode;
            currentNode = head; 
        } else {
            currentNode.next = minNode;
            currentNode = currentNode.next
        }
    }

    return head
};