// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
function getLength(head) {
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}

function getValue(head,index){
    let count = 0;
    let current = head;
    while(count < index){
        count ++;
        if(!current) break;
        current = current.next;
    }

    return current? current.val : 0
}

var addTwoNumbers = function(l1, l2) {
    const maxLength = Math.max(getLength(l1), getLength(l2));
    let indicator = 0;
    let answer;
    let current; 
    for(let i=0; i<maxLength;i++){
        const sum = getValue(l1,i) + getValue(l2,i) + indicator       
        const value = sum>=10? sum-10: sum;
        indicator = sum>=10? 1 : 0

        const newNode = new ListNode(value)
        if(!answer){
            answer = newNode
                
        }else {
            current.next = newNode
        }
        current = newNode
    }
    if(indicator){
        current.next = new ListNode(indicator);
    }
    return answer 
};