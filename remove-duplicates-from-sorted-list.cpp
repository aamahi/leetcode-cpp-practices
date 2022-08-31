/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        
    ListNode * temp = head;
    ListNode*ptr=head;
        
    if(head==NULL or head->next==NULL)
    {
        return head;
    }
        
    while(ptr!=NULL)
    {  
       if(temp->val!=ptr->val)
       {
          temp->next=ptr;
          temp=ptr;
       }
       ptr=ptr->next;
    }   
  
    temp->next=NULL;
        
    return head;
        
    }
};
