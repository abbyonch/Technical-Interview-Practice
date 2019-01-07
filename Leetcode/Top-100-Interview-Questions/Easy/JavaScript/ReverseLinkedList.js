/*Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

ps:  WE STILL NEED TO ADD RECURSIVE SOLUTION
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next = null;
    while(current){
        // save next pointer so you dont loose it
        next = current.next;
        // reverse the pointer
        current.next = prev;
        // increment previous to current
        prev = current;
        // increment current to next
        current = next;
    }
    return prev
};
