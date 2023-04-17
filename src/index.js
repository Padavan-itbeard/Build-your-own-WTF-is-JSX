/** @jsx h */
let foo = <div id="foo">Hello!</div>;

function h(nodeName, attributes, ...args) {
  const children = args?.length ? [].concat(...args) : null;

  return { nodeName, attributes, children }
}

function render(vNode) {
  // String just convert to text #node
  if (vNode.split) {
    return document.createTextNode(vNode);
  }

  // create a Dom element with the nodeName of our VDOM element
  const n = document.createElement(vNode.nodeName);

  // copy attributes onto the new node
  const a = vNode.attributes || {};
  Object.keys(a).forEach(k => n.setAttributes(k, a[k]));

  // render (build) and then append child nodes
  (vNode.children || []).forEach(c => render(c));

  return n;
}