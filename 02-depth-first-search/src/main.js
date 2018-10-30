/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, pre-order strategy.
*/
// module.exports.preOrder = function(root) {
//
// };

DFSPreOrder (fn, node = this.root) {
  if (!node) return null
  fn(node)
  if (node.left) this.DFSPreOrder(fn, node.left)
  if (node.right) this.DFSPreOrder(fn, node.right)
}

DFSInOrder (fn, node = this.root) {
  if (!node) return null
  if (node.left) this.DFSInOrder(fn, node.left)
  fn(node)
  if (node.right) this.DFSInOrder(fn, node.right)
}

DFSPostOrder (fn, node = this.root) {
  if (!node) return null
  if (node.left) this.DFSPostOrder(fn, node.left)
  if (node.right) this.DFSPostOrder(fn, node.right)
  fn(node)
}


/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, in-order strategy.
*/
module.exports.inOrder = function(root) {

};

/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, post-order strategy.
*/
module.exports.postOrder = function(root) {

};
