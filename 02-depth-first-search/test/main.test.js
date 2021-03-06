const { expect } = require('chai'); // jshint ignore:line
const depthFirst = require('../src/main');
const Node = require('../src/node'); // jshint ignore:line

describe('depth first search', function() {
  describe('given a tree', function() {
    before(function() {
      const d = new Node('D');
      const e = new Node('E');
      const b = new Node('B', d, e);
      const c = new Node('C');
      this.a = new Node('A', b, c);
    });

    it('returns values ordered by depth first search, pre-order', function() {
      expect(depthFirst.preOrder(this.a)).to.deep.equal(
        ['A', 'B', 'D', 'E', 'C']
      );
    });

    it('returns values ordered by depth first search, in-order', function() {
      expect(depthFirst.inOrder(this.a)).to.deep.equal(
        ['D', 'B', 'E', 'A', 'C']
      );
    });

    it('returns values ordered by depth first search, post-order', function() {
      expect(depthFirst.postOrder(this.a)).to.deep.equal(
        ['D', 'E', 'B', 'C', 'A']
      );
    });
  });
});
