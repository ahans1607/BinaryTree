// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root, finalarr = []) {
    if (root === null) {
        return finalarr
    }
    finalarr.push(root.val)
    preOrderArray(root.left, finalarr)

    preOrderArray(root.right, finalarr)

    return finalarr
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root, finalarr = []) {
    // Your code here
    if (root === null) {
        return finalarr;
    }

    inOrderArray(root.left, finalarr);
    finalarr.push(root.val);
    
    inOrderArray(root.right, finalarr);

    return finalarr

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {
    // Your code here
}


module.exports = {
    preOrderArray,
    inOrderArray,
    postOrderArray
};
