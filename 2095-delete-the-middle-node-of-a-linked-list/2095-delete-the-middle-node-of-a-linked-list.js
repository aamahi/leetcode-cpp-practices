/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next==null){return null;}
    let first = head; 
    let last = head; 
    let previous;
    while(last && last.next){
        last = last.next.next;
        previous = first;
        first = first.next;
    }
    previous.next = previous.next.next;
    return head;
}