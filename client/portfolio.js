//alert("hello world i dey work!");

ScrollOut({
  once: true,
  threshold: 0.99,
});



var right = document.querySelector(".mobile__navbar");
const move = () => {
  const leftAway1 = document.querySelector(".left-away__one");
  const leftAway2 = document.querySelector(".left-away__two");
  const riseLeft = document.querySelector(".rise-left");
  const scaleRight = document.querySelector(".scale-right");

  leftAway1.classList.toggle("activate-leftaway__one");
  leftAway2.classList.toggle("activate-leftaway__two");
  riseLeft.classList.toggle("activate__riseleft");
  scaleRight.classList.toggle("activate__scaleright");

    
  right.classList.toggle("active");
};


//======================================================

/*var hover = document.getElementsByTagName('h2');

    for(i = 0; i < hover.length; i++) {
        hover[i].addEventListener('mouseover', function() {
            //alert('i dey')
            hover[i].classList.add('skew');
            //alert('idey')
        })
        
    };

    for(i = 0; i < hover.length; i++) {
        hover[i].addEventListener('mouseout', function() {
            hover[i].classList.remove('skew');
            alert('mouse just left')

        });
        
    }
/*
/*===================Greeting Animation=======================================*/

window.addEventListener("load", function (event) {
  //alert('function no gree work o!')

  var hi = document.querySelector(".hi");
  var name = document.querySelector(".name h3");
  var intro = document.querySelector(".intro");

  hi.style.opacity = "1";
  name.style.left = "0";
  name.style.opacity = "1";
  intro.style.bottom = "0";
  intro.style.transform = "scale(1)";
  intro.style.opacity = "1";
});

//var button = document.getElementById('greet');
//button.addEventListener('onclick', 'welcome')
/*==================== My Professional Skills SlideShow!========================= */

var i = 0;
var images = [];
var time = 3500;

images[0] = "./images/html5_black.png";
images[1] = "./images/css_black.png";
images[2] = "./images/new_javascript2.png";
images[4] = "./images/new_nodejs.png";
images[3] = "./images/reactjs.png";

function changeImage() {
  document.slides.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval("changeImage()", time);

window.load = changeImage;


