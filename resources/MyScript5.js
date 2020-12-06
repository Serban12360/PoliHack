/* Navigation */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
    
  document.getElementById("main").style.marginLeft = "250px";
    
  document.getElementById("sigla").style.marginLeft = "250px";
  document.getElementById("sigla").style.backgroundColor = "rgb(77, 77, 77)";
    
  document.getElementById("tex1").style.opacity = "0.2";
  document.getElementById("friends").style.opacity = "0.2";
  document.getElementById("tex").style.opacity = "0.2";
    
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    
  document.getElementById("main").style.marginLeft= "0";
    
  document.getElementById("sigla").style.marginLeft = "0";
  document.getElementById("sigla").style.backgroundColor = "white"; 
    
  document.getElementById("tex1").style.opacity = "1";
  document.getElementById("friends").style.opacity = "1";
  document.getElementById("tex").style.opacity = "1";
    
  document.body.style.backgroundColor = "black";
}