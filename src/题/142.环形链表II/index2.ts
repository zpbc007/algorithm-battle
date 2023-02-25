import {} from '@utils/list-node'

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }    

    let slow: ListNode | null = head
    let fast:  ListNode | null = head

    while(fast !== null) {
        slow = slow?.next  || null
        fast = fast?.next?.next || null

        /**
         * 快慢节点相遇
         */
        if (slow === fast && fast !== null) {
            fast = head

            while (slow !== fast) {
                fast = fast!.next
                slow = slow!.next
            }

            return slow
        }
    }

    return null
};


