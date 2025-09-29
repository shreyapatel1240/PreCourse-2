// Time Complexity : O(n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
class SinglyLinkedList {
    constructor() {
        this.head = null // head of linked list
    }

    /* Linked list node */
    static Node = class {
        constructor(d) {
            //Constructor here
            this.data = d
            this.next = null
        }
    }

    /* Function to print middle of linked list */
    //Complete this function
    printMiddle() {
        //Write your code here
        //Implement using Fast and slow pointers
        if (!this.head) return null

        let last = this.head
        let first = this.head

        while (first && first.next) {
            last = last.next
            first = first.next.next
        }
        console.log("Middle Node: " + last.data)
    }

    push(new_data) {
        let new_node = new SinglyLinkedList.Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }

    printList() {
        let tnode = this.head;
        while (tnode != null) {
            console.log(tnode.data + "->");
            tnode = tnode.next;
        }
        console.log("NULL");
    }
}

let llist = new SinglyLinkedList();
for (let i = 15; i > 0; --i) {
    llist.push(i);
    llist.printList();
    llist.printMiddle();
}