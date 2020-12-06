/* Navigation */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
   
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("ceva").style.marginLeft = "0px";
  document.getElementById("sigla").style.marginLeft = "250px";
  document.getElementById("sigla").style.backgroundColor = "rgba(0,0,0,0.4)";
    
  document.getElementById("img").style.opacity = "0.4";
    
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("ceva").style.marginLeft = "0";  
  document.getElementById("sigla").style.marginLeft = "0";
  document.getElementById("sigla").style.backgroundColor = "white";
    
  document.getElementById("img").style.opacity = "100%";
    
  document.body.style.backgroundColor = "black";
}

/* Image Slider */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}