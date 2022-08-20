class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        stack<ListNode*> stck;
        int kmin, cnt = 0;
        
        if (k==0 || head == NULL)
            return head;
        ListNode* curr = head;
        while(curr)
        {
            stck.push(curr);
            curr = curr->next;
            cnt++;
        }
        
        kmin = k%cnt;
        curr = head;
        while(kmin--)
        {
            ListNode* n = stck.top();
            stck.pop();
            n->next = curr;
            curr = n;
        }
        stck.top()->next = NULL;
        
        return curr;
    }
};
