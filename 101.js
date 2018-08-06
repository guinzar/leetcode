// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

var isSymmetric = function(root) {
  function isMirror(node1, node2) {
    if (!node1 && !node2) return true;
    if ((node1 && !node2) || (!node1 && node2)) return false;
    if (node1.val === node2.val) {
      return isMirror(node1.left, node2.right) && 
        isMirror(node1.right, node2.left)
    }
    return false;
  }
  return isMirror(root.left, root.right);
};
