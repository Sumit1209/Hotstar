

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}

//video-card
const videoCards=[...document.querySelectorAll('.video-card')];
videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.play()
    })
})
//card slider
let cardContainer=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardContainer.forEach((item,i)=>{
    let containerDimension=item.getBoundingClientRect();
    let containerWidth=containerDimension.width;

    nxtBtns[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth - 200;
    })

})
// js for toggle menu bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


