/*

  A tree can be represented by a single Node, that has a:

    * name and a value
    * a parent
    * an array of children

*/

class Node {
  constructor (name) {
    this.name = name
    this.children = []
    this.parent = null
  }

  addChild (childNode) {
    childNode.parent = this
    this.children.push(childNode)
  }
}

module.exports = Node
