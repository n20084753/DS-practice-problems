class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

    

let root = new Node(10);
root.left = new Node(15);
root.right = new Node(8);
root.left.left = new Node(13);
root.left.right = new Node(57);
root.right.left = new Node(16);
root.right.right = new Node(24);

// Traversals
// Inorder - Left Root Right
const inOrder = (root) => {
    if (root === null) {
        return;
    }

    inOrder(root.left); 
    console.log(root.data);
    inOrder(root.right);
}
// Root Left Right
const preOrder = (root) => {
    if (root === null) {
        return;
    }

    console.log(root.data);
    preOrder(root.left);     
    preOrder(root.right);
}

// Root Left Right
const postOrder = (root) => {
    if (root === null) {
        return;
    }
    
    postOrder(root.left);     
    postOrder(root.right);
    console.log(root.data);
}

//            10
    //     15           8
    // 13      57 16       24

postOrder(root);


