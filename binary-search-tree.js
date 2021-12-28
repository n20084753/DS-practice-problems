class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // insertNode();
    // removeNode();

    // Helper methods
    // findMinumunNode
    // inorder
    // search

             

    insert(data) {
        function insertNode (currentNode, newNode) {
            if (currentNode.data > newNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                } else {
                    insertNode(currentNode.left, newNode);
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                } else {
                    insertNode(currentNode.right, newNode);
                }
            }
        }

        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        insertNode(this.root, newNode);
    }

    remove(data) {
        function removeNode(node, key) {
            function findMinNode(root) {
                if (root.left == null) {
                    return root;
                } 
                return findMinNode(root.left);
            }
            if (node === null) return null;

            if (key < node.data) {
                node.left = removeNode(node.left, key);
                return node;
            }

            if (key > node.data) {
                node.right = removeNode(node.right, key);
                return node;
            }

            // found the data

            // leaf node deletion
            if (node.left === null && node.right == null) {
                node = null;
                return node;
            }

            // deleting node with left child
            if (node.right === null) {
                node = node.left;
                return node;
            }

            // deleting node with right child
            if (node.left === null) {
                node = node.right;
                return node;
            }

            // when i have both the childs

            let minNode = findMinNode(node.right);
            node.data = minNode.data;

            node.right = removeNode(node.right, minNode.data);
            return node;
        }
    }

    search(key) {
        function searchNode(node, key) {
            if (node === null) {
                return null;
            }

            if (key < node.data) {
                return searchNode(node.left, key);
            }

            if (key > node.data) {
                return searchNode(node.right, key);
            }

            return node;
        }

        return searchNode(this.root, key);
    }

    findMin() {
        function findMinNode(root) {
            if (root.left == null) {
                return root;
            } 
            return findMinNode(root.left);
        }

        return findMinNode(this.root);
    }

    inOrder(root)  {        
        root.left && this.inOrder(root.left);
        console.log(root.data);
        root.right && this.inOrder(root.right);
    }
}

let tree = new BST();

tree.insert(3);
tree.insert(4);
tree.insert(19);
tree.insert(26);
tree.insert(33);
tree.insert(55);
tree.insert(70)



        
    //             19
    //         4        26
    //      3               33
    //                    30     55
            

    // AVL Tree |  Red black tree        

tree.inOrder(tree.root);

let node = tree.search(19);
console.log(node.data);

console.log(tree.findMin());