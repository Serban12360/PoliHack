window.onload = function(){
var username=document.getElementById('usernameInput');
var parola=document.getElementById('passwordInput');

var buton=document.getElementById('login');

buton.addEventListener('click', function(){

	console.log('hey')
	console.log(username.value, parola.value);
	let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
 			if (this.readyState == 4 && this.status == 200) {

    			console.log(this.responseText);
    			console.log('Totul e in regula');
    			if(this.responseText == 'OK'){
    				sessionStorage.username  = username.value;
    				window.location='/';
    			}
    			else alert(this.responseText);
  			}
		}
		xhttp.open("POST", "/logare",true);
		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhttp.send(`username=${username.value}&parola=${parola.value}`);	

})


}
