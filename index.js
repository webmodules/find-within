
/**
 * Module exports.
 */

module.exports = find;

/**
 * Traverses "down" the children nodes hierarchy in order to find the first
 * (or last) `nodeType` Node.
 *
 * @param {Element} el - DOM element to traverse down to find a `nodeType`
 * @param {Number} nodeType - Node type to find the deepest member of (i.e. `Node.TEXT_NODE`)
 * @param {Boolean} first - if `true`, will traverse down the `firstChild`, otherwise will traverse down the `lastChild` text node
 * @return {TextNode} returns the first `nodeType` node from within `el`
 * @public
 */

function find (el, nodeType, first) {
  while (el && el.nodeType !== nodeType) {
    if (first) {
      el = el.firstChild;
    } else {
      el = el.lastChild;
    }
  }
  return el;
}
