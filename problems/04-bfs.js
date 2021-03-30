// Implement a function that takes in the root of a
// binary tree, traverses it in breadth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root) {

    if (root === null) {
        return [];
    }
    let queue = [root];
    let finalArr = []
    while (queue.length) {
        let shifted = queue.shift()
        finalArr.push(shifted.val)

        if (shifted.left !== null) {
            queue.push(shifted.left)
        }
        if (shifted.right !== null) {
            queue.push(shifted.right)
        }
        console.log(shifted, finalArr)
    }
    return finalArr;



























    // if (root === null) {
    //     return []
    // }

    // let queue = []
    // let finalarr = []

    // queue.push(root.val)

    //     while(queue.length >= 1) {
    //         console.log(root.left)
    //         console.log(root.right)
    //         finalarr.push(queue[0])
    //         if(root.left !== null) {
    //             queue.push(root.left)
    //         }
    //         if(root.right !== null) {
    //             queue.push(root.right)
    //         }
    //     }

    // return finalarr

    // let queue = []

    // queue.push(root.val)

    // while(queue.length > 0) {
    //     let current = queue[0]

    //     if(current.left !== null) {
    //         queue.push(current.left)
    //     }
    //     if(current.right !== null) {
    //         queue.push(current.right)
    //     }

    //     queue.shift()
    // }

    // return queue

}






module.exports = { bfs };
