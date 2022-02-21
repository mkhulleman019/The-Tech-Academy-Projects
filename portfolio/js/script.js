//----------------Hamburger Nav------------------//
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//-----------------Slideshow---------------------//
var slideIndex= 1;
showSlides(slideIndex);

//Next and Previous Controls //
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

//Thumbnail Image Controls//
function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots= document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex =1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
}