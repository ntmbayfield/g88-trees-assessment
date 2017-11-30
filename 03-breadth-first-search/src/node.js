/*

  A tree can be represented by a single Node, that has a:

    * name and a value
    * a parent
    * an array of children

*/

class Node {
  constructor (data, left=null, right=null) {
    this.data = data
    this.left = left
    this.right = right
  }

  show () {
    return this.data
  }
}

module.exports = Node
