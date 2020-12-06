window.onload = function(){

let cataloage= [];

let ajax = new XMLHttpRequest();  
    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          cataloage=JSON.parse(this.responseText);
          for(let i=0; i<cataloage.length; i++){
            let catalog=document.createElement("DIV");
            catalog.classList.add('catalog');
            catalog.innerHTML +="<p class='x'>" + "x" + "</p>" + "<p id='titlu_catalog'>" + cataloage[i] + "</p>";
            document.body.appendChild(catalog);
            catalog.addEventListener("click", function(){
              localStorage.lastCatalog=cataloage[i];
                window.location="/catalog2";
               })
            }
        }
    };
    ajax.open("GET", `http://localhost:3000/preia_id/?username=${sessionStorage.username}`);
    ajax.send(); 
   



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
  document.getElementById('d').style.color='white';
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    
  document.getElementById("main").style.marginLeft= "0";
    
    
  document.getElementById("sigla").style.marginLeft = "0";
  document.getElementById("sigla").style.backgroundColor = "white";
    
    
  document.getElementById("casuta").style.marginLeft = "0";
  document.getElementById("casuta").style.backgroundColor = "white";
  document.getElementById("cas").style.textDecoration = "underline #737373";
        
  document.getElementById("col").style.opacity = "1";
  document.getElementById("col").style.opacity = "1";
    
    
  document.getElementById("ph").style.opacity = "1";
    
  document.body.style.backgroundColor = "black";
}
let open=document.getElementById('open');
open.addEventListener('click', openNav);

let close=document.getElementById('close');
close.addEventListener('click', closeNav);




let catalog;
let catalogNou=document.getElementById('add');
let fereastra=document.getElementById('numeCatalog');
let gata=document.getElementById('butonGata');
var numeCatalog;
let x

catalogNou.addEventListener('click', function(){
	fereastra.classList.remove("ascuns");
})
gata.addEventListener('click', function(){
	fereastra.classList.add("ascuns");
	catalog=document.createElement("DIV");
	document.body.appendChild(catalog);
	catalog.classList.add('catalog');
	numeCatalog = document.createElement("P");
	catalog.appendChild(numeCatalog);
	numeCatalog = document.getElementById("clasa").value;
	console.log(numeCatalog);
	catalog.innerHTML ="<p class='x' id='stergere'>" + "x" + "</p>" + "<p id='titlu_catalog'>" + numeCatalog + "</p>";
	catalog.style.textAlign="center";
      	catalog.addEventListener("click", function(){
          localStorage.lastCatalog=numeCatalog;
      		window.location= "/catalog2";
      	})
	let x=document.getElementById('stergere');
	x.addEventListener('click', function(e){
	     e.stopPropagation();
	     catalog.remove();
})
  localStorage.lastCatalog=numeCatalog;
  window.location="/catalog2";
})





}


