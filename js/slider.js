document.addEventListener('DOMContentLoaded', function () {

  var nextBtn = document.getElementById('nextPicture');
  var prevBtn = document.getElementById('prevPicture');
  var listElements = document.querySelectorAll('.slider ul li');
  var currIndex = 0;

  listElements[currIndex].classList.add('visible')

  nextBtn.addEventListener('click', function (event) {
    console.log('next clicked!')
    listElements[currIndex].classList.remove('visible');
    currIndex += 1;
    if (listElements.length === currIndex) {
      currIndex = 0;
    }
    listElements[currIndex].classList.add('visible');
  })

  prevBtn.addEventListener('click', function (event) {
    console.log('prev clicked!');
    listElements[currIndex].classList.remove('visible');
    currIndex -= 1;
    if (currIndex < 0) {
      currIndex = listElements.length-1;
    }
    listElements[currIndex].classList.add('visible');
  })

})
