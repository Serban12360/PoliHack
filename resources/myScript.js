
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
    
  document.getElementById("main").style.marginLeft = "250px";
    
  document.getElementById("sigla").style.marginLeft = "250px";
  document.getElementById("sigla").style.backgroundColor = "rgb(77, 77, 77)";
    
  document.getElementById("img").style.opacity = "0.4";
    
  document.getElementById("casuta").style.marginLeft = "250px";
  document.getElementById("casuta").style.backgroundColor = "rgb(77, 77, 77)";
  document.getElementById("cas").style.textDecoration = "none";
    
  document.getElementById("col").style.opacity = "0.2";
    
  document.getElementById("ph").style.opacity = "0.2";
    
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    
  document.getElementById("main").style.marginLeft= "0";
    
    
  document.getElementById("sigla").style.marginLeft = "0";
  document.getElementById("sigla").style.backgroundColor = "white";
    
  document.getElementById("img").style.opacity = "1";
    
  document.getElementById("casuta").style.marginLeft = "0";
  document.getElementById("casuta").style.backgroundColor = "white";
  document.getElementById("cas").style.textDecoration = "underline #737373";
        
  document.getElementById("col").style.opacity = "1";
  document.getElementById("col").style.opacity = "1";
    
    
  document.getElementById("ph").style.opacity = "1";
    
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
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
function logout(){
  sessionStorage.removeItem('username');
  window.location='/';
}

window.onload = function() {
    var x=document.getElementById('e')
    const username = sessionStorage.username;
    if(username) {
      x.innerHTML = 'Buna, ' + username;
      document.getElementById('log_in').style.display='none';
      document.getElementById('sign_up').style.display='none';
    }
    else {
      document.getElementById('logout').style.display='none';
    }
}
