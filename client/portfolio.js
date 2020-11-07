//alert("hello world i dey work!");


ScrollOut({
    once:true,
    threshold: 0.98     
});




function move() {
    var right = document.getElementsByClassName('nav-right');
    var left = document.getElementsByClassName('nav-left');
    var links = document.getElementsByClassName('links');
    var btn = document.getElementById("button-close")

    for ( i = 0; i < right.length; i++) {
        right[i].style.width = "100vw"
        right[i].style.opacity = "1"
    };
    for ( i = 0; i < right.length; i++) {
        left[i].style.width = "100%"
        left[i].style.opacity = "1"
    }
    links[0].style.top = '20'
    links[0].style.opacity = '1'
    btn.style.right = "5px"
}

function disband() {
    var right = document.getElementsByClassName('nav-right');
    var left = document.getElementsByClassName('nav-left');
    var links = document.getElementsByClassName('links')
    var btn = document.getElementById("button-close")

    for ( i = 0; i < right.length; i++) {

        right[i].style.width = "0"
        right[i].style.opacity = "0"
    };
    for ( i = 0; i < right.length; i++) {
        left[i].style.width = "0"
        left[i].style.opacity = "0"
    }
    links[0].style.bottom = '-50%'
    links[0].style.opacity = '0'
    btn.style.right = "-150px"
    

}
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

window.addEventListener("load", function(event) {
    //alert('function no gree work o!')
 
    var hi = document.querySelector('.hi');
    var name = document.querySelector('.name h3');
    var intro = document.querySelector('.intro');
 
    hi.style.opacity = '1'
    name.style.top = '0'
    name.style.opacity = '1'
    intro.style.bottom = '0'
    intro.style.opacity = '1'
 
 })


//var button = document.getElementById('greet');
//button.addEventListener('onclick', 'welcome')
/*==================== My Professional Skills SlideShow!========================= */

        var i = 0
        var images = []
        var time = 3000

        images[0] = './images/html.png'
        images[1] = './images/css2.png'
        images[2] = './images/javascript.png'
        images[4] = './images/nodejs.png'
        images[3] = './images/reactjs.png'

        function changeImage() {
            document.slides.src = images[i];

            if( i < images.length - 1) {
                i++;
            }
            else{
                i = 0;
            }
        }
         setInterval('changeImage()', time)

         window.load = changeImage;