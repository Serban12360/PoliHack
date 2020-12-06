window.onload = function(){

var nume=document.getElementById('numeInput');
var email=document.getElementById('emailInput');
var username=document.getElementById('usernameInput');
var parola=document.getElementById('passwordInput');
var parolaConfirm=document.getElementById('passwordInputConfirm');
var buton=document.getElementById('signup');

buton.addEventListener('click', function(){

	console.log('hey')
	let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
 			if (this.readyState == 4 && this.status == 200) {
 				
    			console.log(this.responseText);
    			console.log('Totul e in regula');
    			if(this.responseText == 'OK')
    				window.location='/';
    			else alert(this.responseText);
  			}
		}
		xhttp.open("POST", "/date",true);
		xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhttp.send(`nume=${nume.value}&email=${email.value}&username=${username.value}&parola=${parola.value}&parolaConfirm=${parolaConfirm.value}`);	

})


}