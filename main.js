var NAMESPACE = 'http://www.w3.org/2000/svg'
var svg = document.getElementById('screen');

populate();

function populate() {
  makeTile();
}

function makeTile() {
  var use = document.createElementNS(NAMESPACE, 'use');
  use.setAttribute('x', 100);
  use.setAttribute('y', 100);
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#tile');
  console.log(use);
  console.log(document.getElementById('tile'));
  svg.appendChild(use);
}
