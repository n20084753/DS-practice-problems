/**
There is a social networking platform with N members. It is known that the pairs of members are friends. According to the famous saying that “The friends of my friends are my friends too” it follows that if A - B is friends and B - C are friends then A - C are friends, too.

Given two members' names, check if they are friends.

[Sample Input]    
    Harry, Ron, Hermione, Snipe, Hagrid, Faust, Gordan, Hamilton, Kane, Jack
    Harry-Ron, Ron-Snipe, Hermione-Faust, Hermione-Kane, Jack-Hagrid, Gordan-Jack , kane - ron
    2
    Harry Snipe
    Harry Jack

[Sample Output]
    Yes
    No
*/


let vertices = ['Harry', 'Ron', 'Hermione', 'Snipe', 'Hagrid', 'Faust', 'Gordan', 'Hamilton', 'Kane', 'Jack'];
let edges = [
    ['Harry', 'Ron'],
    ['Ron', 'Snipe'],
    ['Hermione', 'Faust'],
    ['Hermione', 'Kane'],
    ['Jack', 'Hagrid'],
    ['Gordan', 'Jack']
];

const createAdjacencyMatrix = (vertices, edges) => {
    let m = vertices.length;    
    let matrix = new Array(m).fill(0).map(() => new Array(m).fill(0));

    for (let i = 0; i < edges.length; i++) {
        console.log(edges[i]);
        let s1Index = vertices.indexOf(edges[i][0]);
        let s2Index = vertices.indexOf(edges[i][1]);
        console.log(s1Index, s2Index);

        matrix[s1Index][s2Index] = 1;
        
        matrix[s2Index][s1Index] = 1;
        
    }

    console.table(matrix);
    return matrix;
}

const createAdjacencyList = (vertices, edges) => {
    let adjcenylist = {};

    for (let i = 0; i < vertices.length; i++) {
        adjcenylist[vertices[i]] = [];
    }

    for (let i = 0; i < edges.length; i++) {
        // Harry - Ron 
        // harry: [Ron]
        // Ron: [Harry, snipe]
        // snipe: [ron]
        !adjcenylist[edges[i][0]].includes(edges[i][1]) && adjcenylist[edges[i][0]].push(edges[i][1]);
        !adjcenylist[edges[i][1]].includes(edges[i][0]) && adjcenylist[edges[i][1]].push(edges[i][0]);
    }

    console.log(adjcenylist);
    return adjcenylist;
}

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


        tempNode = null;
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

const isMutualFriend = (adjMatrix, stranger1, stranger2) => {
    // let start = vertices.indexOf(stranger1);
    // let end = vertices.indexOf(stranger2);
    let visited = [];

    let stack = new Stack();
    stack.push(stranger1);
    visited.push(stranger1);

    while (!stack.isEmpty()) {
        let currentNode = stack.pop();
        Harry
        Haryy - [ron]
        ron - [Harry, snipe]
        for (let i = 0; i < adjMatrix[currentNode].length; i++) {
            let friend = adjMatrix[currentNode][i];
            if ((!visited.includes(friend))) {
                if (friend === stranger2) {
                    return true;
                }

                stack.push(friend);
                visited.push(friend);
            }
        }
    }

    return false;
}

[]


// let adjMatrix = createAdjacencyMatrix(vertices, edges);

// let mutualFriendStatus = isMutualFriend(adjMatrix ,'Harry', 'Snipe');
// console.log(mutualFriendStatus);

let list = createAdjacencyList(vertices, edges);
let mutualFriendStatus = isMutualFriend(list ,'Harry', 'Snipe');
console.log(mutualFriendStatus);


