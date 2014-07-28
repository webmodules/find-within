
var find = require('../');
var assert = require('assert');

describe('find-within', function () {

  it('should find an Element within a div', function () {
    var div = document.createElement('div');
    div.innerHTML = '<b><u><i>foo</i></u></b>';

    var d = find(div, Node.ELEMENT_NODE);

    assert(d);
    assert.equal(d, div);
    assert.equal(d.nodeType, Node.ELEMENT_NODE);
    assert.equal(d.nodeName, 'DIV');
  });

  it('should find a TextNode within a div', function () {
    var div = document.createElement('div');
    div.innerHTML = '<b><u><i>foo</i></u></b>';

    var text = find(div, Node.TEXT_NODE);

    assert(text);
    assert.equal(text.nodeType, Node.TEXT_NODE);
    assert.equal(text.nodeValue, 'foo');
  });

  it('should find a TextNode within a div to the left', function () {
    var div = document.createElement('div');
    div.innerHTML = 'foo<i>|</i>bar';

    var first = true;
    var text = find(div, Node.TEXT_NODE, first);

    assert(text);
    assert.equal(text.nodeType, Node.TEXT_NODE);
    assert.equal(text.nodeValue, 'foo');
  });

  it('should find a TextNode within a div to the right', function () {
    var div = document.createElement('div');
    div.innerHTML = 'foo<i>|</i>bar';

    var first = false;
    var text = find(div, Node.TEXT_NODE, first);

    assert(text);
    assert.equal(text.nodeType, Node.TEXT_NODE);
    assert.equal(text.nodeValue, 'bar');
  });

  it('should return `null` when no TextNode is present', function () {
    var div = document.createElement('div');
    div.innerHTML = '<i></i>';

    var text = find(div, Node.TEXT_NODE);

    assert.equal(null, text);
  });

});
