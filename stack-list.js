class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }   

    push(data) {
        let node = new Node(data);

        node.next = this.head;
        this.head = node;
    }    

    pop() {
        if (this.isEmpty()) {
            console.log("underflow");
            return;
        }
        let tempNode = this.head;
        let temp = tempNode.data;
        this.head = this.head.next;


        delete tempNode;
        return temp;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("underflow");
            return;
        }

        return this.head.data;
    }
}