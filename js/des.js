document.addEventListener('DOMContentLoaded', function () {

// description

  var chairDescription = document.querySelectorAll('.description');
  var ch1Des = chairDescription[0];
  var ch2Des = chairDescription[1];

  ch1Des.addEventListener('mouseover', function () {
    ch1Des.style.visibility = "hidden";
  })

  ch1Des.addEventListener('mouseout', function () {
    ch1Des.style.visibility = "visible";
  })

  ch2Des.addEventListener('mouseover', function () {
    ch2Des.style.visibility = "hidden";
  })

  ch2Des.addEventListener('mouseout', function () {
    ch2Des.style.visibility = "visible";
  })

})
