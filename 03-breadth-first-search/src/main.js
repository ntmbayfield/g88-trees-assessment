/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write an algorithm that returns its values as an array, ordered using a breadth first search strategy.
*/
breadthFirstSearch (fn) {
  if (!this.root) return null
  const queue = [this.root]

  while(queue.length !== 0) {
    let node = queue.shift()
    fn(node)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
module.exports.bfs = function (root) {

};
