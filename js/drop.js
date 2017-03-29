document.addEventListener('DOMContentLoaded', function () {

// drop_down_list
  var lists = document.querySelectorAll('.drop');
  console.log(lists);

  var mouseOver = function () {
    this.parentNode.querySelector('ul').style.display = 'block';
  }

  var mouseOut = function() {
    this.parentNode.querySelector('ul').style.display = 'none';
  }

  for (var i = 0; i < lists.length; i++) {
    lists[i].querySelector('.list_arrow').addEventListener('mouseover', mouseOver);
    lists[i].querySelector('.list_arrow').addEventListener('mouseout', mouseOut);
  }
});
