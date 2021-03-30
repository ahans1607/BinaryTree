// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root, finalarr = []){
    if (root === null) {
        return finalarr
    }
    finalarr.push(root.val)
    dfs(root.left, finalarr)

    dfs(root.right, finalarr)

    return finalarr
}

module.exports = { dfs };