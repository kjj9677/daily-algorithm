// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function(head) {
    if(head === null) {
        return head;
    }
    let cur = head;
    let target = cur.next;
 
    while(true){
        if(!target) {
            cur.next = target
            break;
        };
        if(cur.val === target.val) {
            target = target.next;
        } else {
            cur.next = target
            cur = cur.next
            target = target.next
        }
        
    }
    return head
};