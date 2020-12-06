/* Navigation */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
    
  document.getElementById("main").style.marginLeft = "250px";
    
  document.getElementById("sigla").style.marginLeft = "250px";
  document.getElementById("sigla").style.backgroundColor = "rgb(77, 77, 77)";
    
  document.getElementById("col").style.opacity = "0.2";
    
  document.getElementById("a").style.opacity = "0.2";
  document.getElementById("b").style.opacity = "0.2";
  document.getElementById("c").style.opacity = "0.2";
  document.getElementById("d").style.opacity = "0.2";
  document.getElementById("e").style.opacity = "0.2";
  document.getElementById("f").style.opacity = "0.2";
  document.getElementById("g").style.opacity = "0.2";
    
  document.getElementById("h").style.opacity = "0.2";
  document.getElementById("i").style.opacity = "0.2";
    
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    
  document.getElementById("main").style.marginLeft= "0";
    
    
  document.getElementById("sigla").style.marginLeft = "0";
  document.getElementById("sigla").style.backgroundColor = "white"; 
    
  document.getElementById("col").style.opacity = "1";
    
  document.getElementById("a").style.opacity = "1";
  document.getElementById("b").style.opacity = "1";
  document.getElementById("c").style.opacity = "1";
  document.getElementById("d").style.opacity = "1";
  document.getElementById("e").style.opacity = "1";
  document.getElementById("f").style.opacity = "1";
  document.getElementById("g").style.opacity = "1";
    
  document.getElementById("h").style.opacity = "1";
  document.getElementById("i").style.opacity = "1";
    
  document.body.style.backgroundColor = "black";
}