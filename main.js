var test = document.getElementById('test');
test.addEventListener('click', rotate);
var i = 0;

function rotate(e) {
  e.preventDefault();
  test.setAttribute('transform', 'rotate(' + i + ',' +
    (parseInt(test.getAttribute('x')) + parseInt(test.getAttribute('width')) / 2) + ',' +
    (parseInt(test.getAttribute('y')) + parseInt(test.getAttribute('height')) / 2) + ')');
  i += 45;
}
