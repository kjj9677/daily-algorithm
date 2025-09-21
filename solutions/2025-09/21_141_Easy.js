// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// Set 과 투포인터를 이용한 두가지 풀이 추가
var hasCycle = function(head) {
    if(!head) return false
    const nodeSet = new Set()
    let cur = head
    while(true){
        if(!cur.next) return false
        if(nodeSet.has(cur.next)) {
            return true;
        }
        nodeSet.add(cur.next)
        cur = cur.next
    }
};

var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;         
    fast = fast.next.next;    
  }
  return false;
};