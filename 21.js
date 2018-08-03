// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var currNode1 = l1, currNode2 = l2;
  var startNode = l1;
  if (!l1 || !l2) {
      if (l1) return l1;
      else if (l2) return l2;
      else return null;
  }
  if (l1.val > l2.val) {
      startNode = l2;
      currNode2 = currNode2.next;
  } else {
      currNode1 = currNode1.next;
  }
  var currNode = startNode;
  while (currNode1 || currNode2) {
      if (!currNode1) {
          currNode.next = currNode2;
          break;
      } else if (!currNode2) {
          currNode.next = currNode1;
          break;
      }
      if (currNode1.val > currNode2.val) {
          currNode.next = currNode2;
          currNode = currNode2;
          currNode2 = currNode2.next;
      } else {
          currNode.next = currNode1;
          currNode = currNode1;
          currNode1 = currNode1.next;
      }
  }
  return startNode;
};
