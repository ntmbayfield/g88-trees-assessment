const { expect } = require('chai'); // jshint ignore:line
const bfs = require('../src/main').bfs;
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

    it('returns values ordered by breadth first search', function() {
      expect(bfs(this.a)).to.deep.equal(
        ['A', 'B', 'C', 'D', 'E']
      );
    });
  });
});
