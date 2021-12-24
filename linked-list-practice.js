class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {    

    constructor() {
        this.head = null;        
    }

    add(data) {
        let node = new Node(data);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }
             
            current.next = node;
        }
    }
    
    insertAt(data, index) {
        let node = new Node(data);
        
        if (index == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let current = this.head;

        for (let i=0; i<index; i++) {
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
    }

    removeFrom(index) {
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            current = null;
            return;
        }

        let prev = null;
        for (let i=0; i < index; i++) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        current = null;
    }    

    findIndex(searchElement) {
        let count = 0;
        let current = this.head;

        while ( current != null ) {
            if (current.data == searchElement) {
                return count;
            } 
            count++;
            current = current.next;
        }

        return -1;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let newp = null;

        while (current != null) {
            newp = current.next;
            current.next = prev;
            prev = current;
            current = newp;
        }

        this.head = prev;
    }    

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while ( fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }

    print() {
        let current = this.head;
        let array = [];

        while(current != null) {
            array.push(current.data);
            current = current.next;
        }

        console.log(array.join(' -> '));
    }

    // TODO: 
    // InsertBefore(data, index)
    // InsertAfter(data, index)
    // removeByData(data)    
    // isEmpty()
    // size()
    // isPalidrome()
}

let list = new LinkedList();
this.head = null;

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

// head->[1 | 1024] -> [2 | 2048] -> [3 | null]
list.print();

list.removeFrom(1);

list.print();

list.reverse();

list.print();