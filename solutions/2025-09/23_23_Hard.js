// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
function mergeTwo(l1, l2) {
  const dummy = new ListNode(0);
  let t = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) { t.next = l1; l1 = l1.next; }
    else { t.next = l2; l2 = l2.next; }
    t = t.next;
  }
  t.next = l1 || l2;
  return dummy.next;
}

var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return null;
  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = mergeTwo(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists[0] || null;
};