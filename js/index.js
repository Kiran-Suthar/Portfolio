const the_animation = document.querySelectorAll('.skills_page');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-skills_page');
        }
        else {
                entry.target.classList.remove('scroll-animation');
            }
        
    })
},
   { threshold: 0.1
   });
   
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
}

// Education Page JScode
document.getElementById("btn2").onclick = function() {
    var firstDiv = document.getElementById("education1");
    var secondDiv = document.getElementById("experiances1");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var btn2 = document.getElementById("btn2");
    var btn1 = document.getElementById("btn1");
    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "block";
        img2.style.display = "block";
        img2.style.display = "inline-block";
        img1.style.display = "none";
        btn2.style.backgroundImage = "linear-gradient(0deg, #50a3a2 0%, #70e2b2 100%)";
        btn2.style.color ="#white";
        btn1.style.background = "none";
        btn1.style.color ="none";
        firstDiv.style.display = "none";
    }
};
document.getElementById("btn1").onclick = function() {
    var firstDiv = document.getElementById("education1");
    var secondDiv = document.getElementById("experiances1");
    var img2 = document.getElementById("img2");
    var img1 = document.getElementById("img1");
    var btn2 = document.getElementById("btn2");
    var btn1 = document.getElementById("btn1");
    if (firstDiv.style.display === "none") {
        firstDiv.style.display = "block";
        secondDiv.style.display = "none";
        img1.style.display = "block";
        img1.style.display = "inline-block";
        img2.style.display = "none";
        btn2.style.background = "none";
        btn2.style.color ="none";
        btn1.style.backgroundImage = "linear-gradient(0deg, #50a3a2 0%, #70e2b2 100%)";
        btn1.style.color = "white";
    }
};

const element = document.querySelector('.my-element');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
const observer1 = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            element.classList.add('show');
            element1.classList.add('show');
        }
        else {
                // element.classList.remove('show');
            }
        
    })
}, options);
observer1.observe(element);

// Project section animation
const element1 = document.querySelector('.project_animation');
const obser = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            element1.classList.add('show');
        }
        else {
                // element1.classList.remove('show');
            }
        
    })
}, {
    threshold: 0.5
});
obser.observe(element1);

// Go To Top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


