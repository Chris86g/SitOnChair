document.addEventListener('DOMContentLoaded', function () {

  var navMenu = document.querySelectorAll('.nav>ul>li');

  var mouseOver = function () {
    if ((this.children.length > 0) === true) {
      this.querySelector('ul').style.display = 'block';
    }
  }

  var mouseOut = function() {
    this.querySelector('ul').style.display = 'none';
  }

  for (var i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener('mouseover', mouseOver);
    navMenu[i].addEventListener('mouseout', mouseOut);
  }
});
