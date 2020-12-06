window.onload = function(){

let ajax = new XMLHttpRequest(); 
    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       		document.getElementById('tabel').innerHTML = this.responseText;
        }
    };
    ajax.open("GET", `http://localhost:3000/preia_tabel/?username=${sessionStorage.username}&id=${localStorage.lastCatalog}`);
    ajax.send(); 


console.log(`sunt pe catalogul ${localStorage.lastCatalog}`)

let tabel=document.getElementById('tabel');

let buton=document.getElementById('adaugaElev');

let butonElimina=document.getElementById('eliminaElev');



butonElimina.addEventListener('click', function(){
	if(tabel.rows.length > 1){
	tabel.deleteRow(tabel.rows.length-1);
	tabel.deleteRow(tabel.rows.length-1);
	tabel.deleteRow(tabel.rows.length-1);
}
})

buton.addEventListener('click', function(){
console.log(tabel.rows.length-1);
let row1=tabel.insertRow(tabel.rows.length);
let row2=tabel.insertRow(tabel.rows.length);
let row3=tabel.insertRow(tabel.rows.length);
let cell1=row1.insertCell(0);
cell1.contentEditable='true';
cell1.rowSpan='3';
let celule1=[], celule2=[], celule3=[];
for(let i=1; i<=28; i++){
	celule1[i]=row1.insertCell(i);
	if(i%2 == 1)
		celule1[i].innerHTML='Note';
	
	else
		celule1[i].innerHTML='Absente';
	celule2[i]=row2.insertCell(i-1);
	celule2[i].contentEditable='true';
	if(i<=14){
		celule3[i]=row3.insertCell(i-1);
		celule3[i].colSpan='2';
		celule3[i].contentEditable='true';
	}
	}
})



}
 

function salveaza(){
	var catalog=document.getElementById('tabel').innerHTML;
	let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
 			if (this.readyState == 4 && this.status == 200) {
 				
    			console.log('ok')
    			
  			}
		}
		let username=sessionStorage.username;
		xhttp.open("POST", "/salveaza_catalog",true);
		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhttp.send(`username=${username}&catalog=${catalog}&id=${localStorage.lastCatalog}`);	
}

