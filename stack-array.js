class Stack {

    constructor() {        
        this.dataSet = [];
        this.size = -1;
    }

    isEmpty() {
        return this.size === -1;
    }

    push (data) {
        this.dataSet[++this.size] = data;        
    }

    pop () {

        if (this.isEmpty()) {
            console.log("stack is underflow");
            return;
        }
        let temp = this.dataSet[this.size];
        delete this.dataSet[this.size];
        this.size--;
        
        return temp;
        // return this.dataSet[this.size--];
    }

    // top()
    peek () {
        if (this.isEmpty()) {
            console.log("stack is underflow");
            return;
        }

        return this.dataSet[this.size];
    }
}

let stack = new Stack();
stack.push(1);
[1]
stack.push(2);
[2,1]
stack.push(3);
[3,2,1]

console.log(stack.pop());
[2,1]

stack.push(4);
[4,2,1]
console.log(stack.peek());
[4,2,1]

stack.push(5);
[5,4,2,1]
console.log(stack.pop());
console.log(stack.pop());
