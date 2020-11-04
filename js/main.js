
let hamBtn = document.querySelector('nav .ham-btn');
let navMenu = document.getElementById('menu');

hamBtn.addEventListener('click', () =>{
    navMenu.classList.toggle('show');
})

var acc = document.getElementsByClassName("contentBox");
var currentBox = -1;
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var accActive = document.querySelector(".contentBox.active")
    if (accActive) {      
      accActive.classList.remove("active");
    }
    if (i !== currentBox) {      
      this.classList.toggle("active");
      currentBox = i;
    } else {
      currentBox = -1;
    }
 });
}

$(document).ready(function(){
  $('.slider').slick({
    dots: true,    
    appendDots: $('.dotted'),
    vertical: true,
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: 0,
    swipe: true,
    touchMove: true,
    verticalSwiping: true,
  });
  });
