class Queue {
    constructor() {
        this.dataSet = [];
        this.start = 0;
        this.end = 0;
    }

    isEmpty() {
        return (this.start === this.end) 
    }

    enqueue(data) {
        this.dataSet[this.end] = data;
        this.end++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("empty queue");
            return;
        }

        let temp = this.dataSet[this.start];
        this.start++;
        return temp;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("empty queue");
            return;
        }
        
        return this.dataSet[this.start];
    }


}