var svg = document.getElementById('screen');
var i, j;

populate();

function populate() {
  var solution = makeSolution();
  for (var y=0;y<10;y++) {
    for (var x=0;x<10;x++) {
      svg.appendChild(makeTile(50*x, 50*y,
        'rotate('+(90*(x+y))+','+(50*x+25)+','+(50*y+25)+')', Math.floor(Math.random()*2.999999999999)));
    }
  }
}

function makeTile(x, y, transform, tileid) {
  var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('x', x);
  use.setAttribute('y', y);
  use.setAttribute('transform', transform);
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#tile' + tileid);
  use.addEventListener('click', turnTile);
  return use;
}

function turnTile(e) {
  var rotate = parseTransform(e.target.getAttribute('transform')).rotate;
  e.target.setAttribute('transform',
    'rotate('+(parseInt(rotate[0]) + 90)+','+rotate[1]+','+rotate[2]+')');
}

function parseTransform(a) {
    var b={};
    for (i in a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g)) {
        var c = a[i].match(/[\w\.\-]+/g);
        b[c.shift()] = c;
    }
    return b;
}

function makeSolution() {
  var s = [];
  for (i=0;i<5;i++) {
    s.push()
  }
}